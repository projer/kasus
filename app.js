import { questions } from './data.js';

const STORAGE_KEY = 'kasus-trainer-v2';
const state = {
  mode: 'random', current: null, answered: false, position: 0, order: [],
  filters: { cases: ['Nominative', 'Accusative', 'Dative'], tags: [] },
  stats: loadStats()
};

const $ = (id) => document.getElementById(id);
const els = {
  sentence: $('sentence'), choices: $('choices'), feedback: $('feedback'), explanation: $('explanation'),
  next: $('nextButton'), gender: $('genderButton'), genderHint: $('genderHint'),
  progress: $('progressText'), accuracy: $('accuracyText'), progressBar: $('progressBar'), modeBadge: $('modeBadge'),
  modeButton: $('modeButton'), modePanel: $('modePanel'), settings: $('settingsDialog'), reset: $('resetButton'), apply: $('applyFilters')
};

function loadStats() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
function saveStats() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats)); }
function getStat(id) { return state.stats[id] || { attempts: 0, correct: 0, lastAnswer: null }; }
function updateStat(id, selected, correct) {
  const s = getStat(id); s.attempts++; if (correct) s.correct++; s.lastAnswer = selected; state.stats[id] = s; saveStats();
}
function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function determinerForm(form) { return String(form).trim().split(/\s+/)[0]; }

function activeFilters() {
  const cases = [...document.querySelectorAll('.filter-case:checked')].map(x => x.value);
  const tags = [...document.querySelectorAll('.filter-tag:checked')].map(x => x.value);
  return { cases, tags };
}
function matchesFilters(q) {
  if (!state.filters.cases.includes(q.case)) return false;
  const topicTags = ['adjective','possessive','demonstrative','dative-verb','accusative-verb','preposition','two-way-preposition','perfect'];
  const selected = state.filters.tags;
  const hasTopic = topicTags.some(t => q.tags.includes(t));
  // Basic case-only questions remain available. Topic filters apply to questions
  // that actually belong to one or more of the selected topic categories.
  if (!hasTopic || !selected.length) return true;
  return selected.some(t => q.tags.includes(t));
}
function eligibleQuestions() {
  let pool = questions.filter(matchesFilters);
  if (state.mode === 'mistakes') pool = pool.filter(q => { const s = getStat(q.id); return s.attempts > 0 && s.correct < s.attempts; });
  if (state.mode === 'unseen') pool = pool.filter(q => getStat(q.id).attempts === 0);
  return pool;
}
function newOrder() {
  let pool = eligibleQuestions();
  if (!pool.length && state.mode !== 'random') pool = questions.filter(matchesFilters);
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
    const label = determinerForm(choice);
    const b = document.createElement('button');
    b.className = 'choice';
    b.textContent = label;
    b.addEventListener('click', () => answer(label, b));
    els.choices.appendChild(b);
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
function escapeHtml(s) { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function determinerLabel(d) {
  if (d === 'definite') return 'the definite article';
  if (d === 'indefinite') return 'an indefinite article';
  if (d === 'kein') return 'the negative determiner <em>kein</em>';
  if (['mein','dein','sein','ihr','unser','euer','Ihr'].includes(d)) return `the possessive determiner <em>${d}</em>`;
  return `the demonstrative/question determiner <em>${d}</em>`;
}
function endingInfo(q) {
  if (!q.adjective) return '';
  const form = q.forms[q.case === 'Nominative' ? 'nom' : q.case === 'Accusative' ? 'acc' : 'dat'];
  const match = form.match(new RegExp(`${q.adjective}(.*?)(?:\\s|$)`));
  const ending = match ? match[1] : '';
  return ending ? `The adjective <strong>${escapeHtml(q.adjective)}</strong> takes the ending <strong>-${escapeHtml(ending)}</strong> here.` : `The adjective <strong>${escapeHtml(q.adjective)}</strong> is also declined according to the case.`;
}
function buildExplanation(q) {
  const gender = genderText(q.noun.gender);
  const key = q.case === 'Nominative' ? 'nom' : q.case === 'Accusative' ? 'acc' : 'dat';
  const current = q.forms[key];
  let html = `<div class="case-title">${q.case.toUpperCase()}</div>`;
  html += `<p>${escapeHtml(q.trigger?.text || '')}</p>`;
  html += `<p><strong>${escapeHtml(q.noun.word)}</strong> is a ${gender} noun. The target phrase is <strong>${escapeHtml(current)}</strong>.</p>`;
  html += `<p>${determinerLabel(q.determiner)} is declined for the ${q.case}.`;
  if (q.determiner === 'definite' || q.determiner === 'indefinite' || q.determiner === 'kein' || ['mein','dein','sein','ihr','unser','euer','Ihr'].includes(q.determiner) || ['dieser','jener','welcher'].includes(q.determiner)) {
    html += ` Compare: Nominative <strong>${escapeHtml(q.forms.nom)}</strong> → ${q.case} <strong>${escapeHtml(current)}</strong>.`;
  }
  html += `</p>`;
  if (q.adjective) html += `<p>${endingInfo(q)}</p>`;
  if (q.noun.number === 'plural' && q.case === 'Dative' && !q.noun.word.endsWith('n')) html += `<p>In the Dative plural, German usually adds <strong>-n</strong> to the noun: ${escapeHtml(q.noun.word)} → ${escapeHtml(q.noun.word)}<strong>n</strong>.</p>`;
  html += `<button class="show-table" id="showTable">Show full declension</button><div id="tableHolder"></div>`;
  setTimeout(() => { const b = $('showTable'); if (b) b.onclick = () => { $('tableHolder').innerHTML = declensionTable(q); b.remove(); }; }, 0);
  return html;
}
function declensionTable(q) {
  const rows = [['Nominative', q.forms.nom], ['Accusative', q.forms.acc], ['Dative', q.forms.dat]];
  return `<table class="declension-table"><thead><tr><th>Case</th><th>Form</th></tr></thead><tbody>${rows.map(r => `<tr${r[0]===q.case?' class="current-case"':''}><td>${r[0]}</td><td>${escapeHtml(r[1])}</td></tr>`).join('')}</tbody></table>`;
}
function showGender() { const q = state.current; els.genderHint.innerHTML = `<strong>${escapeHtml(q.noun.word)}</strong> → ${genderText(q.noun.gender)} (${genderArticle(q.noun.gender)} ${escapeHtml(q.noun.word)})`; els.genderHint.classList.remove('hidden'); }
function answer(selected, button) {
  if (state.answered) return;
  state.answered = true;
  const q = state.current;
  const correctAnswer = determinerForm(q.answer);
  const correct = selected === correctAnswer;
  updateStat(q.id, selected, correct);
  [...els.choices.children].forEach(b => {
    b.disabled = true;
    if (b.textContent === correctAnswer) b.classList.add('missed');
  });
  if (correct) {
    button.classList.remove('missed');
    button.classList.add('correct');
    els.feedback.className = 'feedback correct';
    els.feedback.textContent = '✓ Correct!';
  } else {
    button.classList.add('incorrect');
    els.feedback.className = 'feedback incorrect';
    els.feedback.innerHTML = `✗ Not quite — correct answer: <strong>${escapeHtml(correctAnswer)}</strong>`;
  }
  els.explanation.className = 'explanation';
  els.explanation.innerHTML = buildExplanation(q);
  els.next.classList.remove('hidden');
  els.gender.disabled = true;
  updateProgress();
}
function setMode(mode) { state.mode = mode; newOrder(); document.querySelectorAll('.mode-option').forEach(b => b.classList.toggle('active', b.dataset.mode === mode)); renderQuestion(); }
function applyFilters() { state.filters = activeFilters(); newOrder(); renderQuestion(); els.modePanel.classList.add('hidden'); }

els.next.onclick = () => { state.position++; renderQuestion(); window.scrollTo({top: 0, behavior: 'smooth'}); };
els.gender.onclick = showGender;
els.modeButton.onclick = () => els.modePanel.classList.toggle('hidden');
document.querySelectorAll('.mode-option').forEach(b => b.onclick = () => setMode(b.dataset.mode));
els.apply.onclick = applyFilters;
$('settingsButton').onclick = () => els.settings.showModal();
els.reset.onclick = () => { if (confirm('Are you sure? This will erase all your progress.')) { localStorage.removeItem(STORAGE_KEY); state.stats = {}; state.mode='random'; newOrder(); renderQuestion(); els.settings.close(); } };

newOrder(); renderQuestion();
