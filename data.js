// Initial seed set. The production target is ~250 carefully reviewed questions.
export const questions = [
  {
    id: "q001", sentence: "___ Mann arbeitet heute.", choices: ["Der Mann", "Den Mann", "Dem Mann"], answer: "Der Mann", case: "Nominative",
    noun: { word: "Mann", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "subject", text: "The noun is the subject of the sentence." }, tags: ["nominative"]
  },
  {
    id: "q002", sentence: "Ich sehe ___ Mann.", choices: ["der Mann", "den Mann", "dem Mann"], answer: "den Mann", case: "Accusative",
    noun: { word: "Mann", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "sehen takes a direct object in the Accusative." }, tags: ["accusative", "accusative-verb"]
  },
  {
    id: "q003", sentence: "Ich helfe ___ Mann.", choices: ["der Mann", "den Mann", "dem Mann"], answer: "dem Mann", case: "Dative",
    noun: { word: "Mann", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "helfen always takes a Dative object." }, tags: ["dative", "dative-verb"]
  },
  {
    id: "q004", sentence: "Ich spreche mit ___.", choices: ["der neuen Lehrer", "den neuen Lehrer", "dem neuen Lehrer"], answer: "dem neuen Lehrer", case: "Dative",
    noun: { word: "Lehrer", gender: "masculine", number: "singular" }, article: "definite", adjective: "neu", trigger: { type: "preposition", text: "mit always requires the Dative." }, tags: ["dative", "preposition", "adjective"]
  },
  {
    id: "q005", sentence: "Das Geschenk ist für ___.", choices: ["der kleine Bruder", "den kleinen Bruder", "dem kleinen Bruder"], answer: "den kleinen Bruder", case: "Accusative",
    noun: { word: "Bruder", gender: "masculine", number: "singular" }, article: "definite", adjective: "klein", trigger: { type: "preposition", text: "für always requires the Accusative." }, tags: ["accusative", "preposition", "adjective"]
  },
  {
    id: "q006", sentence: "Ich fahre mit ___ Bus.", choices: ["der Bus", "den Bus", "dem Bus"], answer: "dem Bus", case: "Dative",
    noun: { word: "Bus", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "preposition", text: "mit always requires the Dative." }, tags: ["dative", "preposition"]
  },
  {
    id: "q007", sentence: "Ich habe gestern ___ Film gesehen.", choices: ["der Film", "den Film", "dem Film"], answer: "den Film", case: "Accusative",
    noun: { word: "Film", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "sehen takes a direct object in the Accusative. The Perfekt tense does not change the case." }, tags: ["accusative", "perfect", "accusative-verb"]
  },
  {
    id: "q008", sentence: "Ich habe ___ Mädchen geholfen.", choices: ["das Mädchen", "den Mädchen", "dem Mädchen"], answer: "dem Mädchen", case: "Dative",
    noun: { word: "Mädchen", gender: "neuter", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "helfen always takes the Dative. Mädchen is neuter because nouns ending in -chen are neuter." }, tags: ["dative", "dative-verb", "neuter", "-chen", "perfect"], distinctChoices: true
  },
  {
    id: "q009", sentence: "Ich sehe ___ Mädchen.", choices: ["das Mädchen", "den Mädchen", "dem Mädchen"], answer: "das Mädchen", case: "Accusative",
    noun: { word: "Mädchen", gender: "neuter", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "sehen takes a direct object in the Accusative. For a neuter noun, the definite article remains das in the Accusative." }, tags: ["accusative", "neuter", "-chen"]
  },
  {
    id: "q010", sentence: "Ich helfe ___ alten Frau.", choices: ["der alten Frau", "die alte Frau", "den alten Frau"], answer: "der alten Frau", case: "Dative",
    noun: { word: "Frau", gender: "feminine", number: "singular" }, article: "definite", adjective: "alt", trigger: { type: "verb", text: "helfen always takes a Dative object." }, tags: ["dative", "dative-verb", "feminine", "adjective"]
  },
  {
    id: "q011", sentence: "Ich sehe ___ neuen Freund.", choices: ["der neue Freund", "den neuen Freund", "dem neuen Freund"], answer: "den neuen Freund", case: "Accusative",
    noun: { word: "Freund", gender: "masculine", number: "singular" }, article: "definite", adjective: "neu", trigger: { type: "verb", text: "sehen takes a direct object in the Accusative." }, tags: ["accusative", "adjective"]
  },
  {
    id: "q012", sentence: "Das Buch liegt auf ___.", choices: ["der Tisch", "den Tisch", "dem Tisch"], answer: "dem Tisch", case: "Dative",
    noun: { word: "Tisch", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "preposition", text: "auf is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative." }, tags: ["dative", "two-way-preposition", "wo"]
  },
  {
    id: "q013", sentence: "Ich lege das Buch auf ___.", choices: ["der Tisch", "den Tisch", "dem Tisch"], answer: "den Tisch", case: "Accusative",
    noun: { word: "Tisch", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "preposition", text: "auf is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative." }, tags: ["accusative", "two-way-preposition", "wohin"]
  },
  {
    id: "q014", sentence: "Wir kommen aus ___.", choices: ["der Schweiz", "die Schweiz", "den Schweiz"], answer: "der Schweiz", case: "Dative",
    noun: { word: "Schweiz", gender: "feminine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "preposition", text: "aus always requires the Dative." }, tags: ["dative", "preposition", "feminine"]
  },
  {
    id: "q015", sentence: "Seit ___ Jahr lerne ich Deutsch.", choices: ["ein", "einem", "einen"], answer: "einem", case: "Dative",
    noun: { word: "Jahr", gender: "neuter", number: "singular" }, article: "indefinite", adjective: null, trigger: { type: "preposition", text: "seit always requires the Dative." }, tags: ["dative", "preposition", "neuter"]
  },
  {
    id: "q016", sentence: "Ich gehe zu ___.", choices: ["der Arzt", "den Arzt", "dem Arzt"], answer: "dem Arzt", case: "Dative",
    noun: { word: "Arzt", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "preposition", text: "zu always requires the Dative." }, tags: ["dative", "preposition"]
  },
  {
    id: "q017", sentence: "Ich besuche ___ kleinen Park.", choices: ["der kleine Park", "den kleinen Park", "dem kleinen Park"], answer: "den kleinen Park", case: "Accusative",
    noun: { word: "Park", gender: "masculine", number: "singular" }, article: "definite", adjective: "klein", trigger: { type: "verb", text: "besuchen takes a direct object in the Accusative." }, tags: ["accusative", "adjective", "accusative-verb"]
  },
  {
    id: "q018", sentence: "Das gehört ___ neuen Nachbarn.", choices: ["der neue Nachbar", "den neuen Nachbarn", "dem neuen Nachbarn"], answer: "dem neuen Nachbarn", case: "Dative",
    noun: { word: "Nachbar", gender: "masculine", number: "singular" }, article: "definite", adjective: "neu", trigger: { type: "verb", text: "gehören takes a Dative object." }, tags: ["dative", "dative-verb", "adjective"]
  },
  {
    id: "q019", sentence: "Ich habe ___ alten Freunden geschrieben.", choices: ["die alten Freunde", "den alten Freunden", "der alten Freunden"], answer: "den alten Freunden", case: "Dative",
    noun: { word: "Freund", gender: "plural", number: "plural" }, article: "definite", adjective: "alt", trigger: { type: "verb", text: "schreiben can take a Dative recipient. Here the friends are the people being written to." }, tags: ["dative", "plural", "adjective", "perfect"]
  },
  {
    id: "q020", sentence: "Ich habe ___ Schlüssel gefunden.", choices: ["der Schlüssel", "den Schlüssel", "dem Schlüssel"], answer: "den Schlüssel", case: "Accusative",
    noun: { word: "Schlüssel", gender: "masculine", number: "singular" }, article: "definite", adjective: null, trigger: { type: "verb", text: "finden takes a direct object in the Accusative." }, tags: ["accusative", "perfect", "accusative-verb"]
  }
];
