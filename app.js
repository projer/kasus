import { questions } from './data.js';

const STORAGE_KEY = 'kasus-trainer-v1';
const state = {
  mode: 'random',
  current: null,
  answered: false,
  position: 0,
  order: [],
  stats: loadStats()
};

const $ = (id) => document.getElementById(id);
const els = {
  sentence: $('sentence'), choices: $('choices'), feedback: $('feedback'), explanation: $('explanation'),
  next: $('nextButton'), gender: $('genderButton'), genderHint: $('genderHint'),
  progress: $('progressText'), accuracy: $('accuracyText'), progressBar: $('progressBar'), modeBadge: $('modeBadge'),
  modeButton: $('modeButton'), modePanel: $('modePanel'), settings: $('settingsDialog'), reset: $('resetButton')
};

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveStats() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats)); }
function getStat(id) { return state.stats[id] || { attempts: 0, correct: 0, lastAnswer: null }; }
function updateStat(id, selected, correct) {
  const s = getStat(id); s.attempts++; if (correct) s.correct++; s.lastAnswer = selected; state.stats[id] = s; saveStats();
}
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function eligibleQuestions() {
  if (state.mode === 'mistakes') return questions.filter(q => { const s = getStat(q.id); return s.attempts > 0 && s.correct < s.attempts; });
  if (state.mode === 'unseen') return questions.filter(q => getStat(q.id).attempts === 0);
  return questions;
}
function newOrder() {
  let pool = eligibleQuestions();
  if (!pool.length) pool = questions;
  state.order = shuffle(pool.map(q => q.id)); state.position = 0;
}
function getQuestion() { return questions.find(q => q.id === state.order[state.position]); }
function renderQuestion() {
  if (!state.order.length || state.position >= state.order.length) newOrder();
  const q = getQuestion(); state.current = q; state.answered = false;
  els.modeBadge.textContent = state.mode.toUpperCase();
  els.sentence.textContent = q.sentence;
  els.choices.innerHTML = '';
  shuffle(q.choices).forEach(choice => {
    const b = document.createElement('button'); b.className = 'choice'; b.textContent = choice;
    b.addEventListener('click', () => answer(choice, b)); els.choices.appendChild(b);
  });
  els.genderHint.classList.add('hidden'); els.genderHint.innerHTML = '';
  els.feedback.className = 'feedback hidden'; els.feedback.innerHTML = '';
  els.explanation.className = 'explanation hidden'; els.explanation.innerHTML = '';
  els.next.classList.add('hidden'); els.gender.disabled = false;
  updateProgress();
}
function updateProgress() {
  const total = state.order.length || questions.length;
  els.progress.textContent = `Question ${Math.min(state.position + 1, total)} / ${total}`;
  const all = Object.values(state.stats); const attempts = all.reduce((n,s) => n + s.attempts, 0); const correct = all.reduce((n,s) => n + s.correct, 0);
  els.accuracy.textContent = attempts ? `Accuracy: ${Math.round(correct / attempts * 100)}%` : 'Accuracy: —';
  els.progressBar.style.width = `${total ? Math.min(100, (state.position / total) * 100) : 0}%`;
}
function genderText(g) { return g === 'masculine' ? 'masculine' : g === 'feminine' ? 'feminine' : g === 'neuter' ? 'neuter' : 'plural'; }
function genderArticle(g) { return g === 'masculine' ? 'der' : g === 'feminine' ? 'die' : g === 'neuter' ? 'das' : 'die'; }
function answer(selected, button) {
  if (state.answered) return; state.answered = true; const q = state.current; const correct = selected === q.answer;
  updateStat(q.id, selected, correct);
  [...els.choices.children].forEach(b => { b.disabled = true; if (b.textContent === q.answer) b.classList.add('missed'); });
  if (correct) { button.classList.remove('missed'); button.classList.add('correct'); els.feedback.className = 'feedback correct'; els.feedback.textContent = '✓ Correct!'; }
  else { button.classList.add('incorrect'); els.feedback.className = 'feedback incorrect'; els.feedback.innerHTML = `✗ Not quite — correct answer: <strong>${q.answer}</strong>`; }
  els.explanation.className = 'explanation'; els.explanation.innerHTML = buildExplanation(q, correct);
  els.next.classList.remove('hidden'); els.gender.disabled = true; updateProgress();
}
function buildExplanation(q) {
  const trigger = q.trigger?.text || '';
  const gender = genderText(q.noun.gender);
  let html = `<div class="case-title">${q.case.toUpperCase()}</div>`;
  html += `<p>${escapeHtml(trigger)}</p>`;
  html += `<p><strong>${escapeHtml(q.noun.word)}</strong> is a ${gender} noun. The ${q.noun.number} form is affected by the ${q.case}.</p>`;
  if (q.adjective) html += `<p>The adjective <strong>${escapeHtml(q.adjective)}</strong> also changes its ending according to the case and article.</p>`;
  html += `<button class="show-table" id="showTable">Show full declension</button><div id="tableHolder"></div>`;
  setTimeout(() => { const b = $('showTable'); if (b) b.onclick = () => { $('tableHolder').innerHTML = declensionTable(q); b.remove(); }; }, 0);
  return html;
}
function declensionTable(q) {
  const w = q.noun.word, g = q.noun.gender, a = q.adjective;
  const adj = (ending) => a ? `${a}${ending} ` : '';
  let rows;
  if (g === 'plural') {
    const plural = w.endsWith('e') ? w : `${w}e`;
    rows = [['Nominative', `die ${adj('en')}${plural}`], ['Accusative', `die ${adj('en')}${plural}`], ['Dative', `den ${adj('en')}${plural}n`]];
  } else if (q.article === 'indefinite') {
    rows = {
      masculine: [['Nominative', `ein ${adj('er')}${w}`], ['Accusative', `einen ${adj('en')}${w}`], ['Dative', `einem ${adj('en')}${w}`]],
      feminine: [['Nominative', `eine ${adj('e')}${w}`], ['Accusative', `eine ${adj('e')}${w}`], ['Dative', `einer ${adj('en')}${w}`]],
      neuter: [['Nominative', `ein ${adj('es')}${w}`], ['Accusative', `ein ${adj('es')}${w}`], ['Dative', `einem ${adj('en')}${w}`]]
    }[g];
  } else {
    rows = {
      masculine: [['Nominative', `der ${adj('e')}${w}`], ['Accusative', `den ${adj('en')}${w}`], ['Dative', `dem ${adj('en')}${w}`]],
      feminine: [['Nominative', `die ${adj('e')}${w}`], ['Accusative', `die ${adj('e')}${w}`], ['Dative', `der ${adj('en')}${w}`]],
      neuter: [['Nominative', `das ${adj('e')}${w}`], ['Accusative', `das ${adj('e')}${w}`], ['Dative', `dem ${adj('en')}${w}`]]
    }[g];
  }
  return `<table class="declension-table"><thead><tr><th>Case</th><th>Form</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table>`;
}
function escapeHtml(s) { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function showGender() { const q = state.current; els.genderHint.innerHTML = `<strong>${escapeHtml(q.noun.word)}</strong> → ${genderText(q.noun.gender)} (${genderArticle(q.noun.gender)} ${escapeHtml(q.noun.word)})`; els.genderHint.classList.remove('hidden'); }
function setMode(mode) { state.mode = mode; newOrder(); document.querySelectorAll('.mode-option').forEach(b => b.classList.toggle('active', b.dataset.mode === mode)); renderQuestion(); els.modePanel.classList.add('hidden'); }

els.next.onclick = () => { state.position++; renderQuestion(); window.scrollTo({top: 0, behavior: 'smooth'}); };
els.gender.onclick = showGender;
els.modeButton.onclick = () => els.modePanel.classList.toggle('hidden');
document.querySelectorAll('.mode-option').forEach(b => b.onclick = () => setMode(b.dataset.mode));
$('settingsButton').onclick = () => els.settings.showModal();
els.reset.onclick = () => { if (confirm('Are you sure? This will erase all your progress.')) { localStorage.removeItem(STORAGE_KEY); state.stats = {}; setMode('random'); } };

newOrder(); renderQuestion();
