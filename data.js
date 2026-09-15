export const questions = [
  {
    "id": "q001",
    "sentence": "___ ist heute hier.",
    "choices": [
      "die Männer",
      "den Männer",
      "dem Männer"
    ],
    "answer": "die Männer",
    "case": "Nominative",
    "noun": {
      "word": "Männer",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Männer",
      "acc": "die Männer",
      "dat": "den Männer"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q002",
    "sentence": "Ich sehe ___.",
    "choices": [
      "der kleine Freund",
      "den kleinen Freund",
      "dem kleinen Freund"
    ],
    "answer": "den kleinen Freund",
    "case": "Accusative",
    "noun": {
      "word": "Freund",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "klein",
    "forms": {
      "nom": "der kleine Freund",
      "acc": "den kleinen Freund",
      "dat": "dem kleinen Freund"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective"
    ]
  },
  {
    "id": "q003",
    "sentence": "Ich helfe ___.",
    "choices": [
      "der nette Arzt",
      "den netten Arzt",
      "dem netten Arzt"
    ],
    "answer": "dem netten Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "nett",
    "forms": {
      "nom": "der nette Arzt",
      "acc": "den netten Arzt",
      "dat": "dem netten Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb"
    ]
  },
  {
    "id": "q004",
    "sentence": "___ ist heute hier.",
    "choices": [
      "der Chef",
      "den Chef",
      "dem Chef"
    ],
    "answer": "der Chef",
    "case": "Nominative",
    "noun": {
      "word": "Chef",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Chef",
      "acc": "den Chef",
      "dat": "dem Chef"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative"
    ]
  },
  {
    "id": "q005",
    "sentence": "Ich sehe ___.",
    "choices": [
      "die teure Frau",
      "der teuren Frau",
      "den teure Frau"
    ],
    "answer": "die teure Frau",
    "case": "Accusative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "teuer",
    "forms": {
      "nom": "die teure Frau",
      "acc": "die teure Frau",
      "dat": "der teuren Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective"
    ]
  },
  {
    "id": "q006",
    "sentence": "Ich helfe ___.",
    "choices": [
      "der lange Kunde",
      "den langen Kunden",
      "dem langen Kunden"
    ],
    "answer": "dem langen Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "lang",
    "forms": {
      "nom": "der lange Kunde",
      "acc": "den langen Kunden",
      "dat": "dem langen Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb"
    ]
  },
  {
    "id": "q007",
    "sentence": "___ ist heute hier.",
    "choices": [
      "das Mädchen",
      "dem Mädchen",
      "den Mädchen"
    ],
    "answer": "das Mädchen",
    "case": "Nominative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "das Mädchen",
      "acc": "das Mädchen",
      "dat": "dem Mädchen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative"
    ]
  },
  {
    "id": "q008",
    "sentence": "Ich sehe ___.",
    "choices": [
      "der moderne Zug",
      "den modernen Zug",
      "dem modernen Zug"
    ],
    "answer": "den modernen Zug",
    "case": "Accusative",
    "noun": {
      "word": "Zug",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "modern",
    "forms": {
      "nom": "der moderne Zug",
      "acc": "den modernen Zug",
      "dat": "dem modernen Zug"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective"
    ]
  },
  {
    "id": "q009",
    "sentence": "Ich helfe ___.",
    "choices": [
      "der alte Kollege",
      "den alten Kollegen",
      "dem alten Kollegen"
    ],
    "answer": "dem alten Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "alt",
    "forms": {
      "nom": "der alte Kollege",
      "acc": "den alten Kollegen",
      "dat": "dem alten Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb"
    ]
  },
  {
    "id": "q010",
    "sentence": "___ ist heute hier.",
    "choices": [
      "die Schwestern",
      "den Schwestern",
      "dem Schwestern"
    ],
    "answer": "die Schwestern",
    "case": "Nominative",
    "noun": {
      "word": "Schwestern",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Schwestern",
      "acc": "die Schwestern",
      "dat": "den Schwestern"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q011",
    "sentence": "Ich sehe ___.",
    "choices": [
      "der nette Kunde",
      "den netten Kunden",
      "dem netten Kunden"
    ],
    "answer": "den netten Kunden",
    "case": "Accusative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "nett",
    "forms": {
      "nom": "der nette Kunde",
      "acc": "den netten Kunden",
      "dat": "dem netten Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective"
    ]
  },
  {
    "id": "q012",
    "sentence": "Ich helfe ___.",
    "choices": [
      "der wichtige Vater",
      "den wichtigen Vater",
      "dem wichtigen Vater"
    ],
    "answer": "dem wichtigen Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "wichtig",
    "forms": {
      "nom": "der wichtige Vater",
      "acc": "den wichtigen Vater",
      "dat": "dem wichtigen Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb"
    ]
  },
  {
    "id": "q013",
    "sentence": "___ ist heute hier.",
    "choices": [
      "die Lehrerin",
      "der Lehrerin",
      "den Lehrerin"
    ],
    "answer": "die Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Lehrerin",
      "acc": "die Lehrerin",
      "dat": "der Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative"
    ]
  },
  {
    "id": "q014",
    "sentence": "Ich sehe ___.",
    "choices": [
      "die lange Zeit",
      "der langen Zeit",
      "den lange Zeit"
    ],
    "answer": "die lange Zeit",
    "case": "Accusative",
    "noun": {
      "word": "Zeit",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "lang",
    "forms": {
      "nom": "die lange Zeit",
      "acc": "die lange Zeit",
      "dat": "der langen Zeit"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective"
    ]
  },
  {
    "id": "q015",
    "sentence": "Ich helfe ___.",
    "choices": [
      "der gute Vater",
      "den guten Vater",
      "dem guten Vater"
    ],
    "answer": "dem guten Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "gut",
    "forms": {
      "nom": "der gute Vater",
      "acc": "den guten Vater",
      "dat": "dem guten Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb"
    ]
  },
  {
    "id": "q016",
    "sentence": "___ ist heute hier.",
    "choices": [
      "ein Haus",
      "einem Haus",
      "den Haus"
    ],
    "answer": "ein Haus",
    "case": "Nominative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Haus",
      "acc": "ein Haus",
      "dat": "einem Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "indefinite-article",
      "nominative"
    ]
  },
  {
    "id": "q017",
    "sentence": "Ich sehe ___.",
    "choices": [
      "ein alter Student",
      "einen alten Studenten",
      "einem alten Studenten"
    ],
    "answer": "einen alten Studenten",
    "case": "Accusative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "alt",
    "forms": {
      "nom": "ein alter Student",
      "acc": "einen alten Studenten",
      "dat": "einem alten Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "indefinite-article"
    ]
  },
  {
    "id": "q018",
    "sentence": "Ich helfe ___.",
    "choices": [
      "ein kleiner Bruder",
      "einen kleinen Bruder",
      "einem kleinen Bruder"
    ],
    "answer": "einem kleinen Bruder",
    "case": "Dative",
    "noun": {
      "word": "Bruder",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "klein",
    "forms": {
      "nom": "ein kleiner Bruder",
      "acc": "einen kleinen Bruder",
      "dat": "einem kleinen Bruder"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "indefinite-article"
    ]
  },
  {
    "id": "q019",
    "sentence": "___ ist heute hier.",
    "choices": [
      "die Schwestern",
      "den Schwestern",
      "dem Schwestern"
    ],
    "answer": "die Schwestern",
    "case": "Nominative",
    "noun": {
      "word": "Schwestern",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Schwestern",
      "acc": "die Schwestern",
      "dat": "den Schwestern"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q020",
    "sentence": "Ich sehe ___.",
    "choices": [
      "ein wichtiger Nachbar",
      "einen wichtigen Nachbarn",
      "einem wichtigen Nachbarn"
    ],
    "answer": "einen wichtigen Nachbarn",
    "case": "Accusative",
    "noun": {
      "word": "Nachbar",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "wichtig",
    "forms": {
      "nom": "ein wichtiger Nachbar",
      "acc": "einen wichtigen Nachbarn",
      "dat": "einem wichtigen Nachbarn"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "indefinite-article"
    ]
  },
  {
    "id": "q021",
    "sentence": "Ich helfe ___.",
    "choices": [
      "ein teurer Mann",
      "einen teuren Mann",
      "einem teuren Mann"
    ],
    "answer": "einem teuren Mann",
    "case": "Dative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "teuer",
    "forms": {
      "nom": "ein teurer Mann",
      "acc": "einen teuren Mann",
      "dat": "einem teuren Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "indefinite-article"
    ]
  },
  {
    "id": "q022",
    "sentence": "___ ist heute hier.",
    "choices": [
      "ein Kater",
      "einen Kater",
      "einem Kater"
    ],
    "answer": "ein Kater",
    "case": "Nominative",
    "noun": {
      "word": "Kater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Kater",
      "acc": "einen Kater",
      "dat": "einem Kater"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "indefinite-article",
      "nominative"
    ]
  },
  {
    "id": "q023",
    "sentence": "Ich sehe ___.",
    "choices": [
      "ein guter Arzt",
      "einen guten Arzt",
      "einem guten Arzt"
    ],
    "answer": "einen guten Arzt",
    "case": "Accusative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "gut",
    "forms": {
      "nom": "ein guter Arzt",
      "acc": "einen guten Arzt",
      "dat": "einem guten Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "indefinite-article"
    ]
  },
  {
    "id": "q024",
    "sentence": "Ich helfe ___.",
    "choices": [
      "ein moderner Arzt",
      "einen modernen Arzt",
      "einem modernen Arzt"
    ],
    "answer": "einem modernen Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "modern",
    "forms": {
      "nom": "ein moderner Arzt",
      "acc": "einen modernen Arzt",
      "dat": "einem modernen Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "indefinite-article"
    ]
  },
  {
    "id": "q025",
    "sentence": "___ ist heute hier.",
    "choices": [
      "eine Frau",
      "einer Frau",
      "den Frau"
    ],
    "answer": "eine Frau",
    "case": "Nominative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "eine Frau",
      "acc": "eine Frau",
      "dat": "einer Frau"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "indefinite-article",
      "nominative"
    ]
  },
  {
    "id": "q026",
    "sentence": "Ich sehe ___.",
    "choices": [
      "meine kleine Frau",
      "meiner kleinen Frau",
      "den kleine Frau"
    ],
    "answer": "meine kleine Frau",
    "case": "Accusative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "klein",
    "forms": {
      "nom": "meine kleine Frau",
      "acc": "meine kleine Frau",
      "dat": "meiner kleinen Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q027",
    "sentence": "Ich helfe ___.",
    "choices": [
      "dein nettes Mädchen",
      "deinem netten Mädchen",
      "den nettes Mädchen"
    ],
    "answer": "deinem netten Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "nett",
    "forms": {
      "nom": "dein nettes Mädchen",
      "acc": "dein nettes Mädchen",
      "dat": "deinem netten Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q028",
    "sentence": "___ ist heute hier.",
    "choices": [
      "sein Städte",
      "seinen Städte",
      "den Städte"
    ],
    "answer": "sein Städte",
    "case": "Nominative",
    "noun": {
      "word": "Städte",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "sein Städte",
      "acc": "sein Städte",
      "dat": "seinen Städte"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural",
      "possessive"
    ]
  },
  {
    "id": "q029",
    "sentence": "Ich sehe ___.",
    "choices": [
      "ihr teurer Kollege",
      "ihren teuren Kollegen",
      "ihrem teuren Kollegen"
    ],
    "answer": "ihren teuren Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "teuer",
    "forms": {
      "nom": "ihr teurer Kollege",
      "acc": "ihren teuren Kollegen",
      "dat": "ihrem teuren Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q030",
    "sentence": "Ich helfe ___.",
    "choices": [
      "unser langes Mädchen",
      "unserem langen Mädchen",
      "den langes Mädchen"
    ],
    "answer": "unserem langen Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "lang",
    "forms": {
      "nom": "unser langes Mädchen",
      "acc": "unser langes Mädchen",
      "dat": "unserem langen Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q031",
    "sentence": "___ ist heute hier.",
    "choices": [
      "euer Kunde",
      "euren Kunden",
      "eurem Kunden"
    ],
    "answer": "euer Kunde",
    "case": "Nominative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": null,
    "forms": {
      "nom": "euer Kunde",
      "acc": "euren Kunden",
      "dat": "eurem Kunden"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q032",
    "sentence": "Ich sehe ___.",
    "choices": [
      "Ihr modernes Buch",
      "Ihrem modernen Buch",
      "den modernes Buch"
    ],
    "answer": "Ihr modernes Buch",
    "case": "Accusative",
    "noun": {
      "word": "Buch",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "modern",
    "forms": {
      "nom": "Ihr modernes Buch",
      "acc": "Ihr modernes Buch",
      "dat": "Ihrem modernen Buch"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q033",
    "sentence": "Ich helfe ___.",
    "choices": [
      "meine alte Lehrerin",
      "meiner alten Lehrerin",
      "den alte Lehrerin"
    ],
    "answer": "meiner alten Lehrerin",
    "case": "Dative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "alt",
    "forms": {
      "nom": "meine alte Lehrerin",
      "acc": "meine alte Lehrerin",
      "dat": "meiner alten Lehrerin"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q034",
    "sentence": "___ ist heute hier.",
    "choices": [
      "dein Jahr",
      "deinem Jahr",
      "den Jahr"
    ],
    "answer": "dein Jahr",
    "case": "Nominative",
    "noun": {
      "word": "Jahr",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "dein Jahr",
      "acc": "dein Jahr",
      "dat": "deinem Jahr"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q035",
    "sentence": "Ich sehe ___.",
    "choices": [
      "sein netter Vater",
      "seinen netten Vater",
      "seinem netten Vater"
    ],
    "answer": "seinen netten Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "nett",
    "forms": {
      "nom": "sein netter Vater",
      "acc": "seinen netten Vater",
      "dat": "seinem netten Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q036",
    "sentence": "Ich helfe ___.",
    "choices": [
      "ihr wichtiger Lehrer",
      "ihren wichtigen Lehrer",
      "ihrem wichtigen Lehrer"
    ],
    "answer": "ihrem wichtigen Lehrer",
    "case": "Dative",
    "noun": {
      "word": "Lehrer",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "wichtig",
    "forms": {
      "nom": "ihr wichtiger Lehrer",
      "acc": "ihren wichtigen Lehrer",
      "dat": "ihrem wichtigen Lehrer"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q037",
    "sentence": "___ ist heute hier.",
    "choices": [
      "unser Studenten",
      "unseren Studenten",
      "den Studenten"
    ],
    "answer": "unser Studenten",
    "case": "Nominative",
    "noun": {
      "word": "Studenten",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unser Studenten",
      "acc": "unser Studenten",
      "dat": "unseren Studenten"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural",
      "possessive"
    ]
  },
  {
    "id": "q038",
    "sentence": "Ich sehe ___.",
    "choices": [
      "euer langer Junge",
      "euren langen Jungen",
      "eurem langen Jungen"
    ],
    "answer": "euren langen Jungen",
    "case": "Accusative",
    "noun": {
      "word": "Junge",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "lang",
    "forms": {
      "nom": "euer langer Junge",
      "acc": "euren langen Jungen",
      "dat": "eurem langen Jungen"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q039",
    "sentence": "Ich helfe ___.",
    "choices": [
      "Ihre gute Schwester",
      "Ihrer guten Schwester",
      "den gute Schwester"
    ],
    "answer": "Ihrer guten Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "gut",
    "forms": {
      "nom": "Ihre gute Schwester",
      "acc": "Ihre gute Schwester",
      "dat": "Ihrer guten Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q040",
    "sentence": "___ ist heute hier.",
    "choices": [
      "mein Tisch",
      "meinen Tisch",
      "meinem Tisch"
    ],
    "answer": "mein Tisch",
    "case": "Nominative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "mein Tisch",
      "acc": "meinen Tisch",
      "dat": "meinem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q041",
    "sentence": "Ich sehe ___.",
    "choices": [
      "dein alter Mann",
      "deinen alten Mann",
      "deinem alten Mann"
    ],
    "answer": "deinen alten Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "alt",
    "forms": {
      "nom": "dein alter Mann",
      "acc": "deinen alten Mann",
      "dat": "deinem alten Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q042",
    "sentence": "Ich helfe ___.",
    "choices": [
      "sein kleiner Vater",
      "seinen kleinen Vater",
      "seinem kleinen Vater"
    ],
    "answer": "seinem kleinen Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "klein",
    "forms": {
      "nom": "sein kleiner Vater",
      "acc": "seinen kleinen Vater",
      "dat": "seinem kleinen Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q043",
    "sentence": "___ ist heute hier.",
    "choices": [
      "ihr Arzt",
      "ihren Arzt",
      "ihrem Arzt"
    ],
    "answer": "ihr Arzt",
    "case": "Nominative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": null,
    "forms": {
      "nom": "ihr Arzt",
      "acc": "ihren Arzt",
      "dat": "ihrem Arzt"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q044",
    "sentence": "Ich sehe ___.",
    "choices": [
      "unsere wichtige Lehrerin",
      "unserer wichtigen Lehrerin",
      "den wichtige Lehrerin"
    ],
    "answer": "unsere wichtige Lehrerin",
    "case": "Accusative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "wichtig",
    "forms": {
      "nom": "unsere wichtige Lehrerin",
      "acc": "unsere wichtige Lehrerin",
      "dat": "unserer wichtigen Lehrerin"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q045",
    "sentence": "Ich helfe ___.",
    "choices": [
      "eure teure Frau",
      "eurer teuren Frau",
      "den teure Frau"
    ],
    "answer": "eurer teuren Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "teuer",
    "forms": {
      "nom": "eure teure Frau",
      "acc": "eure teure Frau",
      "dat": "eurer teuren Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q046",
    "sentence": "___ ist heute hier.",
    "choices": [
      "Ihr Arbeiten",
      "Ihren Arbeiten",
      "den Arbeiten"
    ],
    "answer": "Ihr Arbeiten",
    "case": "Nominative",
    "noun": {
      "word": "Arbeiten",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "Ihr",
    "adjective": null,
    "forms": {
      "nom": "Ihr Arbeiten",
      "acc": "Ihr Arbeiten",
      "dat": "Ihren Arbeiten"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural",
      "possessive"
    ]
  },
  {
    "id": "q047",
    "sentence": "Ich sehe ___.",
    "choices": [
      "mein gutes Mädchen",
      "meinem guten Mädchen",
      "den gutes Mädchen"
    ],
    "answer": "mein gutes Mädchen",
    "case": "Accusative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "gut",
    "forms": {
      "nom": "mein gutes Mädchen",
      "acc": "mein gutes Mädchen",
      "dat": "meinem guten Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q048",
    "sentence": "Ich helfe ___.",
    "choices": [
      "dein modernes Mädchen",
      "deinem modernen Mädchen",
      "den modernes Mädchen"
    ],
    "answer": "deinem modernen Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "modern",
    "forms": {
      "nom": "dein modernes Mädchen",
      "acc": "dein modernes Mädchen",
      "dat": "deinem modernen Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q049",
    "sentence": "___ ist heute hier.",
    "choices": [
      "sein Kollege",
      "seinen Kollegen",
      "seinem Kollegen"
    ],
    "answer": "sein Kollege",
    "case": "Nominative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "sein Kollege",
      "acc": "seinen Kollegen",
      "dat": "seinem Kollegen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q050",
    "sentence": "Ich sehe ___.",
    "choices": [
      "ihr kleines Essen",
      "ihrem kleinen Essen",
      "den kleines Essen"
    ],
    "answer": "ihr kleines Essen",
    "case": "Accusative",
    "noun": {
      "word": "Essen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "klein",
    "forms": {
      "nom": "ihr kleines Essen",
      "acc": "ihr kleines Essen",
      "dat": "ihrem kleinen Essen"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q051",
    "sentence": "Ich helfe ___.",
    "choices": [
      "unser netter Kunde",
      "unseren netten Kunden",
      "unserem netten Kunden"
    ],
    "answer": "unserem netten Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "nett",
    "forms": {
      "nom": "unser netter Kunde",
      "acc": "unseren netten Kunden",
      "dat": "unserem netten Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q052",
    "sentence": "___ ist heute hier.",
    "choices": [
      "euer Freund",
      "euren Freund",
      "eurem Freund"
    ],
    "answer": "euer Freund",
    "case": "Nominative",
    "noun": {
      "word": "Freund",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": null,
    "forms": {
      "nom": "euer Freund",
      "acc": "euren Freund",
      "dat": "eurem Freund"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q053",
    "sentence": "Ich sehe ___.",
    "choices": [
      "Ihre teure Lehrerin",
      "Ihrer teuren Lehrerin",
      "den teure Lehrerin"
    ],
    "answer": "Ihre teure Lehrerin",
    "case": "Accusative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "teuer",
    "forms": {
      "nom": "Ihre teure Lehrerin",
      "acc": "Ihre teure Lehrerin",
      "dat": "Ihrer teuren Lehrerin"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q054",
    "sentence": "Ich helfe ___.",
    "choices": [
      "mein langer Chef",
      "meinen langen Chef",
      "meinem langen Chef"
    ],
    "answer": "meinem langen Chef",
    "case": "Dative",
    "noun": {
      "word": "Chef",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "lang",
    "forms": {
      "nom": "mein langer Chef",
      "acc": "meinen langen Chef",
      "dat": "meinem langen Chef"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q055",
    "sentence": "___ ist heute hier.",
    "choices": [
      "dein Väter",
      "deinen Väter",
      "den Väter"
    ],
    "answer": "dein Väter",
    "case": "Nominative",
    "noun": {
      "word": "Väter",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "dein Väter",
      "acc": "dein Väter",
      "dat": "deinen Väter"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "plural",
      "possessive"
    ]
  },
  {
    "id": "q056",
    "sentence": "Ich sehe ___.",
    "choices": [
      "sein moderner Film",
      "seinen modernen Film",
      "seinem modernen Film"
    ],
    "answer": "seinen modernen Film",
    "case": "Accusative",
    "noun": {
      "word": "Film",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "modern",
    "forms": {
      "nom": "sein moderner Film",
      "acc": "seinen modernen Film",
      "dat": "seinem modernen Film"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q057",
    "sentence": "Ich helfe ___.",
    "choices": [
      "ihr alter Student",
      "ihren alten Studenten",
      "ihrem alten Studenten"
    ],
    "answer": "ihrem alten Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "alt",
    "forms": {
      "nom": "ihr alter Student",
      "acc": "ihren alten Studenten",
      "dat": "ihrem alten Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q058",
    "sentence": "___ ist heute hier.",
    "choices": [
      "unser Zug",
      "unseren Zug",
      "unserem Zug"
    ],
    "answer": "unser Zug",
    "case": "Nominative",
    "noun": {
      "word": "Zug",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unser Zug",
      "acc": "unseren Zug",
      "dat": "unserem Zug"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "nominative",
      "possessive"
    ]
  },
  {
    "id": "q059",
    "sentence": "Ich sehe ___.",
    "choices": [
      "eure nette Schwester",
      "eurer netten Schwester",
      "den nette Schwester"
    ],
    "answer": "eure nette Schwester",
    "case": "Accusative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "nett",
    "forms": {
      "nom": "eure nette Schwester",
      "acc": "eure nette Schwester",
      "dat": "eurer netten Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "possessive"
    ]
  },
  {
    "id": "q060",
    "sentence": "Ich helfe ___.",
    "choices": [
      "Ihre wichtige Schwester",
      "Ihrer wichtigen Schwester",
      "den wichtige Schwester"
    ],
    "answer": "Ihrer wichtigen Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "wichtig",
    "forms": {
      "nom": "Ihre wichtige Schwester",
      "acc": "Ihre wichtige Schwester",
      "dat": "Ihrer wichtigen Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "possessive"
    ]
  },
  {
    "id": "q061",
    "sentence": "___ ist heute hier.",
    "choices": [
      "dieser Mann",
      "diesen Mann",
      "diesem Mann"
    ],
    "answer": "dieser Mann",
    "case": "Nominative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Mann",
      "acc": "diesen Mann",
      "dat": "diesem Mann"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "demonstrative",
      "nominative"
    ]
  },
  {
    "id": "q062",
    "sentence": "Ich sehe ___.",
    "choices": [
      "jene lange Tür",
      "jener langen Tür",
      "den lange Tür"
    ],
    "answer": "jene lange Tür",
    "case": "Accusative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "lang",
    "forms": {
      "nom": "jene lange Tür",
      "acc": "jene lange Tür",
      "dat": "jener langen Tür"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative"
    ]
  },
  {
    "id": "q063",
    "sentence": "Ich helfe ___.",
    "choices": [
      "welcher gute Arzt",
      "welchen guten Arzt",
      "welchem guten Arzt"
    ],
    "answer": "welchem guten Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "gut",
    "forms": {
      "nom": "welcher gute Arzt",
      "acc": "welchen guten Arzt",
      "dat": "welchem guten Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative"
    ]
  },
  {
    "id": "q064",
    "sentence": "___ ist heute hier.",
    "choices": [
      "diese Zeiten",
      "diesen Zeiten",
      "den Zeiten"
    ],
    "answer": "diese Zeiten",
    "case": "Nominative",
    "noun": {
      "word": "Zeiten",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "diese Zeiten",
      "acc": "diese Zeiten",
      "dat": "diesen Zeiten"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "demonstrative",
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q065",
    "sentence": "Ich sehe ___.",
    "choices": [
      "jene alte Frau",
      "jener alten Frau",
      "den alte Frau"
    ],
    "answer": "jene alte Frau",
    "case": "Accusative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "alt",
    "forms": {
      "nom": "jene alte Frau",
      "acc": "jene alte Frau",
      "dat": "jener alten Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative"
    ]
  },
  {
    "id": "q066",
    "sentence": "Ich helfe ___.",
    "choices": [
      "welcher kleine Kunde",
      "welchen kleinen Kunden",
      "welchem kleinen Kunden"
    ],
    "answer": "welchem kleinen Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "klein",
    "forms": {
      "nom": "welcher kleine Kunde",
      "acc": "welchen kleinen Kunden",
      "dat": "welchem kleinen Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative"
    ]
  },
  {
    "id": "q067",
    "sentence": "___ ist heute hier.",
    "choices": [
      "dieses Mädchen",
      "diesem Mädchen",
      "den Mädchen"
    ],
    "answer": "dieses Mädchen",
    "case": "Nominative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieses Mädchen",
      "acc": "dieses Mädchen",
      "dat": "diesem Mädchen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "demonstrative",
      "nominative"
    ]
  },
  {
    "id": "q068",
    "sentence": "Ich sehe ___.",
    "choices": [
      "jener wichtige Bruder",
      "jenen wichtigen Bruder",
      "jenem wichtigen Bruder"
    ],
    "answer": "jenen wichtigen Bruder",
    "case": "Accusative",
    "noun": {
      "word": "Bruder",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "wichtig",
    "forms": {
      "nom": "jener wichtige Bruder",
      "acc": "jenen wichtigen Bruder",
      "dat": "jenem wichtigen Bruder"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative"
    ]
  },
  {
    "id": "q069",
    "sentence": "Ich helfe ___.",
    "choices": [
      "welcher teure Kollege",
      "welchen teuren Kollegen",
      "welchem teuren Kollegen"
    ],
    "answer": "welchem teuren Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "teuer",
    "forms": {
      "nom": "welcher teure Kollege",
      "acc": "welchen teuren Kollegen",
      "dat": "welchem teuren Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative"
    ]
  },
  {
    "id": "q070",
    "sentence": "___ ist heute hier.",
    "choices": [
      "dieser Nachbar",
      "diesen Nachbarn",
      "diesem Nachbarn"
    ],
    "answer": "dieser Nachbar",
    "case": "Nominative",
    "noun": {
      "word": "Nachbar",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Nachbar",
      "acc": "diesen Nachbarn",
      "dat": "diesem Nachbarn"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "demonstrative",
      "nominative"
    ]
  },
  {
    "id": "q071",
    "sentence": "Ich sehe ___.",
    "choices": [
      "jener gute Kunde",
      "jenen guten Kunden",
      "jenem guten Kunden"
    ],
    "answer": "jenen guten Kunden",
    "case": "Accusative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "gut",
    "forms": {
      "nom": "jener gute Kunde",
      "acc": "jenen guten Kunden",
      "dat": "jenem guten Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative"
    ]
  },
  {
    "id": "q072",
    "sentence": "Ich helfe ___.",
    "choices": [
      "welcher moderne Kater",
      "welchen modernen Kater",
      "welchem modernen Kater"
    ],
    "answer": "welchem modernen Kater",
    "case": "Dative",
    "noun": {
      "word": "Kater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "modern",
    "forms": {
      "nom": "welcher moderne Kater",
      "acc": "welchen modernen Kater",
      "dat": "welchem modernen Kater"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative"
    ]
  },
  {
    "id": "q073",
    "sentence": "___ ist heute hier.",
    "choices": [
      "diese Lehrerinnen",
      "diesen Lehrerinnen",
      "den Lehrerinnen"
    ],
    "answer": "diese Lehrerinnen",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerinnen",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "diese Lehrerinnen",
      "acc": "diese Lehrerinnen",
      "dat": "diesen Lehrerinnen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "demonstrative",
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q074",
    "sentence": "Ich sehe ___.",
    "choices": [
      "jener kleine Computer",
      "jenen kleinen Computer",
      "jenem kleinen Computer"
    ],
    "answer": "jenen kleinen Computer",
    "case": "Accusative",
    "noun": {
      "word": "Computer",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "klein",
    "forms": {
      "nom": "jener kleine Computer",
      "acc": "jenen kleinen Computer",
      "dat": "jenem kleinen Computer"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative"
    ]
  },
  {
    "id": "q075",
    "sentence": "Ich helfe ___.",
    "choices": [
      "welcher nette Vater",
      "welchen netten Vater",
      "welchem netten Vater"
    ],
    "answer": "welchem netten Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "nett",
    "forms": {
      "nom": "welcher nette Vater",
      "acc": "welchen netten Vater",
      "dat": "welchem netten Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative"
    ]
  },
  {
    "id": "q076",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Frau",
      "keiner Frau",
      "den Frau"
    ],
    "answer": "keine Frau",
    "case": "Nominative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Frau",
      "acc": "keine Frau",
      "dat": "keiner Frau"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative"
    ]
  },
  {
    "id": "q077",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein teurer Student",
      "keinen teuren Studenten",
      "keinem teuren Studenten"
    ],
    "answer": "keinen teuren Studenten",
    "case": "Accusative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "teuer",
    "forms": {
      "nom": "kein teurer Student",
      "acc": "keinen teuren Studenten",
      "dat": "keinem teuren Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q078",
    "sentence": "Ich helfe ___.",
    "choices": [
      "keine lange Schwester",
      "keiner langen Schwester",
      "den lange Schwester"
    ],
    "answer": "keiner langen Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "lang",
    "forms": {
      "nom": "keine lange Schwester",
      "acc": "keine lange Schwester",
      "dat": "keiner langen Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q079",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Schwester",
      "keiner Schwester",
      "den Schwester"
    ],
    "answer": "keine Schwester",
    "case": "Nominative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Schwester",
      "acc": "keine Schwester",
      "dat": "keiner Schwester"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative"
    ]
  },
  {
    "id": "q080",
    "sentence": "Ich sehe ___.",
    "choices": [
      "keine moderne Antwort",
      "keiner modernen Antwort",
      "den moderne Antwort"
    ],
    "answer": "keine moderne Antwort",
    "case": "Accusative",
    "noun": {
      "word": "Antwort",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "modern",
    "forms": {
      "nom": "keine moderne Antwort",
      "acc": "keine moderne Antwort",
      "dat": "keiner modernen Antwort"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q081",
    "sentence": "Ich helfe ___.",
    "choices": [
      "kein alter Mann",
      "keinen alten Mann",
      "keinem alten Mann"
    ],
    "answer": "keinem alten Mann",
    "case": "Dative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "alt",
    "forms": {
      "nom": "kein alter Mann",
      "acc": "keinen alten Mann",
      "dat": "keinem alten Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q082",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Bücher",
      "keinen Bücher",
      "den Bücher"
    ],
    "answer": "keine Bücher",
    "case": "Nominative",
    "noun": {
      "word": "Bücher",
      "gender": "neuter",
      "number": "plural"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Bücher",
      "acc": "keine Bücher",
      "dat": "keinen Bücher"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q083",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein netter Arzt",
      "keinen netten Arzt",
      "keinem netten Arzt"
    ],
    "answer": "keinen netten Arzt",
    "case": "Accusative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "nett",
    "forms": {
      "nom": "kein netter Arzt",
      "acc": "keinen netten Arzt",
      "dat": "keinem netten Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q084",
    "sentence": "Ich helfe ___.",
    "choices": [
      "kein wichtiger Arzt",
      "keinen wichtigen Arzt",
      "keinem wichtigen Arzt"
    ],
    "answer": "keinem wichtigen Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "wichtig",
    "forms": {
      "nom": "kein wichtiger Arzt",
      "acc": "keinen wichtigen Arzt",
      "dat": "keinem wichtigen Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q085",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Frau",
      "keiner Frau",
      "den Frau"
    ],
    "answer": "keine Frau",
    "case": "Nominative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Frau",
      "acc": "keine Frau",
      "dat": "keiner Frau"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative"
    ]
  },
  {
    "id": "q086",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein langer Lehrer",
      "keinen langen Lehrer",
      "keinem langen Lehrer"
    ],
    "answer": "keinen langen Lehrer",
    "case": "Accusative",
    "noun": {
      "word": "Lehrer",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "lang",
    "forms": {
      "nom": "kein langer Lehrer",
      "acc": "keinen langen Lehrer",
      "dat": "keinem langen Lehrer"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q087",
    "sentence": "Ich helfe ___.",
    "choices": [
      "kein gutes Mädchen",
      "keinem guten Mädchen",
      "den gutes Mädchen"
    ],
    "answer": "keinem guten Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "gut",
    "forms": {
      "nom": "kein gutes Mädchen",
      "acc": "kein gutes Mädchen",
      "dat": "keinem guten Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q088",
    "sentence": "___ ist heute hier.",
    "choices": [
      "kein Junge",
      "keinen Jungen",
      "keinem Jungen"
    ],
    "answer": "kein Junge",
    "case": "Nominative",
    "noun": {
      "word": "Junge",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "kein Junge",
      "acc": "keinen Jungen",
      "dat": "keinem Jungen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative"
    ]
  },
  {
    "id": "q089",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein alter Kollege",
      "keinen alten Kollegen",
      "keinem alten Kollegen"
    ],
    "answer": "keinen alten Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "alt",
    "forms": {
      "nom": "kein alter Kollege",
      "acc": "keinen alten Kollegen",
      "dat": "keinem alten Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q090",
    "sentence": "Ich helfe ___.",
    "choices": [
      "kein kleines Mädchen",
      "keinem kleinen Mädchen",
      "den kleines Mädchen"
    ],
    "answer": "keinem kleinen Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "klein",
    "forms": {
      "nom": "kein kleines Mädchen",
      "acc": "kein kleines Mädchen",
      "dat": "keinem kleinen Mädchen"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q091",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Kunden",
      "keinen Kunden",
      "den Kunden"
    ],
    "answer": "keine Kunden",
    "case": "Nominative",
    "noun": {
      "word": "Kunden",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Kunden",
      "acc": "keine Kunden",
      "dat": "keinen Kunden"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative",
      "plural"
    ]
  },
  {
    "id": "q092",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein wichtiger Tag",
      "keinen wichtigen Tag",
      "keinem wichtigen Tag"
    ],
    "answer": "keinen wichtigen Tag",
    "case": "Accusative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "wichtig",
    "forms": {
      "nom": "kein wichtiger Tag",
      "acc": "keinen wichtigen Tag",
      "dat": "keinem wichtigen Tag"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q093",
    "sentence": "Ich helfe ___.",
    "choices": [
      "keine teure Lehrerin",
      "keiner teuren Lehrerin",
      "den teure Lehrerin"
    ],
    "answer": "keiner teuren Lehrerin",
    "case": "Dative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "teuer",
    "forms": {
      "nom": "keine teure Lehrerin",
      "acc": "keine teure Lehrerin",
      "dat": "keiner teuren Lehrerin"
    },
    "trigger": {
      "type": "verb",
      "text": "helfen always takes a Dative object."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein"
    ]
  },
  {
    "id": "q094",
    "sentence": "___ ist heute hier.",
    "choices": [
      "keine Lehrerin",
      "keiner Lehrerin",
      "den Lehrerin"
    ],
    "answer": "keine Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Lehrerin",
      "acc": "keine Lehrerin",
      "dat": "keiner Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject of the sentence."
    },
    "tags": [
      "kein",
      "nominative"
    ]
  },
  {
    "id": "q095",
    "sentence": "Ich sehe ___.",
    "choices": [
      "kein guter Vater",
      "keinen guten Vater",
      "keinem guten Vater"
    ],
    "answer": "keinen guten Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "gut",
    "forms": {
      "nom": "kein guter Vater",
      "acc": "keinen guten Vater",
      "dat": "keinem guten Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "sehen takes a direct object in the Accusative."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein"
    ]
  },
  {
    "id": "q096",
    "sentence": "Ich komme aus ___",
    "choices": [
      "die neuen Parks",
      "den neuen Parks",
      "dem neuen Parks"
    ],
    "answer": "den neuen Parks",
    "case": "Dative",
    "noun": {
      "word": "Parks",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": "neu",
    "forms": {
      "nom": "die neuen Parks",
      "acc": "die neuen Parks",
      "dat": "den neuen Parks"
    },
    "trigger": {
      "type": "preposition",
      "text": "aus always requires the Dative."
    },
    "tags": [
      "adjective",
      "aus",
      "dative",
      "plural",
      "preposition"
    ]
  },
  {
    "id": "q097",
    "sentence": "Ich bin heute bei ___",
    "choices": [
      "der Vater",
      "den Vater",
      "dem Vater"
    ],
    "answer": "dem Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Vater",
      "acc": "den Vater",
      "dat": "dem Vater"
    },
    "trigger": {
      "type": "preposition",
      "text": "bei always requires the Dative."
    },
    "tags": [
      "bei",
      "dative",
      "preposition"
    ]
  },
  {
    "id": "q098",
    "sentence": "Ich fahre mit ___",
    "choices": [
      "der große Kollege",
      "den großen Kollegen",
      "dem großen Kollegen"
    ],
    "answer": "dem großen Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "groß",
    "forms": {
      "nom": "der große Kollege",
      "acc": "den großen Kollegen",
      "dat": "dem großen Kollegen"
    },
    "trigger": {
      "type": "preposition",
      "text": "mit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "mit",
      "preposition"
    ]
  },
  {
    "id": "q099",
    "sentence": "Nach ___ gehe ich nach Hause.",
    "choices": [
      "der Arzt",
      "den Arzt",
      "dem Arzt"
    ],
    "answer": "dem Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Arzt",
      "acc": "den Arzt",
      "dat": "dem Arzt"
    },
    "trigger": {
      "type": "preposition",
      "text": "nach requires the Dative when it means “after”, as in nach dem Essen."
    },
    "tags": [
      "dative",
      "nach",
      "preposition"
    ]
  },
  {
    "id": "q100",
    "sentence": "Seit ___ lerne ich Deutsch.",
    "choices": [
      "der junge Tag",
      "den jungen Tag",
      "dem jungen Tag"
    ],
    "answer": "dem jungen Tag",
    "case": "Dative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "jung",
    "forms": {
      "nom": "der junge Tag",
      "acc": "den jungen Tag",
      "dat": "dem jungen Tag"
    },
    "trigger": {
      "type": "preposition",
      "text": "seit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "preposition",
      "seit"
    ]
  },
  {
    "id": "q101",
    "sentence": "Das Geschenk ist von ___",
    "choices": [
      "der Kunde",
      "den Kunden",
      "dem Kunden"
    ],
    "answer": "dem Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Kunde",
      "acc": "den Kunden",
      "dat": "dem Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "von always requires the Dative."
    },
    "tags": [
      "dative",
      "preposition",
      "von"
    ]
  },
  {
    "id": "q102",
    "sentence": "Ich gehe zu ___",
    "choices": [
      "die interessante Frau",
      "der interessanten Frau",
      "den interessante Frau"
    ],
    "answer": "der interessanten Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "interessant",
    "forms": {
      "nom": "die interessante Frau",
      "acc": "die interessante Frau",
      "dat": "der interessanten Frau"
    },
    "trigger": {
      "type": "preposition",
      "text": "zu always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "preposition",
      "zu"
    ]
  },
  {
    "id": "q103",
    "sentence": "Das Geschenk ist für ___",
    "choices": [
      "die Schwester",
      "der Schwester",
      "den Schwester"
    ],
    "answer": "die Schwester",
    "case": "Accusative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Schwester",
      "acc": "die Schwester",
      "dat": "der Schwester"
    },
    "trigger": {
      "type": "preposition",
      "text": "für always requires the Accusative."
    },
    "tags": [
      "accusative",
      "für",
      "preposition"
    ]
  },
  {
    "id": "q104",
    "sentence": "Wir gehen durch ___",
    "choices": [
      "der schöne Kunde",
      "den schönen Kunden",
      "dem schönen Kunden"
    ],
    "answer": "den schönen Kunden",
    "case": "Accusative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "schön",
    "forms": {
      "nom": "der schöne Kunde",
      "acc": "den schönen Kunden",
      "dat": "dem schönen Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "durch always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "durch",
      "preposition"
    ]
  },
  {
    "id": "q105",
    "sentence": "Wir spielen gegen ___",
    "choices": [
      "das Mädchen",
      "dem Mädchen",
      "den Mädchen"
    ],
    "answer": "das Mädchen",
    "case": "Accusative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "das Mädchen",
      "acc": "das Mädchen",
      "dat": "dem Mädchen"
    },
    "trigger": {
      "type": "preposition",
      "text": "gegen always requires the Accusative."
    },
    "tags": [
      "accusative",
      "gegen",
      "preposition"
    ]
  },
  {
    "id": "q106",
    "sentence": "Ich gehe ohne ___",
    "choices": [
      "der kurze Wagen",
      "den kurzen Wagen",
      "dem kurzen Wagen"
    ],
    "answer": "den kurzen Wagen",
    "case": "Accusative",
    "noun": {
      "word": "Wagen",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "kurz",
    "forms": {
      "nom": "der kurze Wagen",
      "acc": "den kurzen Wagen",
      "dat": "dem kurzen Wagen"
    },
    "trigger": {
      "type": "preposition",
      "text": "ohne always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "ohne",
      "preposition"
    ]
  },
  {
    "id": "q107",
    "sentence": "Wir laufen um ___",
    "choices": [
      "die Parks",
      "den Parks",
      "dem Parks"
    ],
    "answer": "die Parks",
    "case": "Accusative",
    "noun": {
      "word": "Parks",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Parks",
      "acc": "die Parks",
      "dat": "den Parks"
    },
    "trigger": {
      "type": "preposition",
      "text": "um always requires the Accusative."
    },
    "tags": [
      "accusative",
      "plural",
      "preposition",
      "um"
    ]
  },
  {
    "id": "q108",
    "sentence": "Ich komme aus ___",
    "choices": [
      "der freundliche Stuhl",
      "den freundlichen Stuhl",
      "dem freundlichen Stuhl"
    ],
    "answer": "dem freundlichen Stuhl",
    "case": "Dative",
    "noun": {
      "word": "Stuhl",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "freundlich",
    "forms": {
      "nom": "der freundliche Stuhl",
      "acc": "den freundlichen Stuhl",
      "dat": "dem freundlichen Stuhl"
    },
    "trigger": {
      "type": "preposition",
      "text": "aus always requires the Dative."
    },
    "tags": [
      "adjective",
      "aus",
      "dative",
      "preposition"
    ]
  },
  {
    "id": "q109",
    "sentence": "Ich bin heute bei ___",
    "choices": [
      "der Arzt",
      "den Arzt",
      "dem Arzt"
    ],
    "answer": "dem Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Arzt",
      "acc": "den Arzt",
      "dat": "dem Arzt"
    },
    "trigger": {
      "type": "preposition",
      "text": "bei always requires the Dative."
    },
    "tags": [
      "bei",
      "dative",
      "preposition"
    ]
  },
  {
    "id": "q110",
    "sentence": "Ich fahre mit ___",
    "choices": [
      "die ruhige Freundin",
      "der ruhigen Freundin",
      "den ruhige Freundin"
    ],
    "answer": "der ruhigen Freundin",
    "case": "Dative",
    "noun": {
      "word": "Freundin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "ruhig",
    "forms": {
      "nom": "die ruhige Freundin",
      "acc": "die ruhige Freundin",
      "dat": "der ruhigen Freundin"
    },
    "trigger": {
      "type": "preposition",
      "text": "mit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "mit",
      "preposition"
    ]
  },
  {
    "id": "q111",
    "sentence": "Nach ___ gehe ich nach Hause.",
    "choices": [
      "eine Wohnung",
      "einer Wohnung",
      "den Wohnung"
    ],
    "answer": "einer Wohnung",
    "case": "Dative",
    "noun": {
      "word": "Wohnung",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "eine Wohnung",
      "acc": "eine Wohnung",
      "dat": "einer Wohnung"
    },
    "trigger": {
      "type": "preposition",
      "text": "nach requires the Dative when it means “after”, as in nach dem Essen."
    },
    "tags": [
      "dative",
      "indefinite-article",
      "nach",
      "preposition"
    ]
  },
  {
    "id": "q112",
    "sentence": "Seit ___ lerne ich Deutsch.",
    "choices": [
      "ein neuer Tag",
      "einen neuen Tag",
      "einem neuen Tag"
    ],
    "answer": "einem neuen Tag",
    "case": "Dative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "neu",
    "forms": {
      "nom": "ein neuer Tag",
      "acc": "einen neuen Tag",
      "dat": "einem neuen Tag"
    },
    "trigger": {
      "type": "preposition",
      "text": "seit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "indefinite-article",
      "preposition",
      "seit"
    ]
  },
  {
    "id": "q113",
    "sentence": "Das Geschenk ist von ___",
    "choices": [
      "der Schlüssel",
      "den Schlüssel",
      "dem Schlüssel"
    ],
    "answer": "dem Schlüssel",
    "case": "Dative",
    "noun": {
      "word": "Schlüssel",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Schlüssel",
      "acc": "den Schlüssel",
      "dat": "dem Schlüssel"
    },
    "trigger": {
      "type": "preposition",
      "text": "von always requires the Dative."
    },
    "tags": [
      "dative",
      "preposition",
      "von"
    ]
  },
  {
    "id": "q114",
    "sentence": "Ich gehe zu ___",
    "choices": [
      "ein großer Kunde",
      "einen großen Kunden",
      "einem großen Kunden"
    ],
    "answer": "einem großen Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "groß",
    "forms": {
      "nom": "ein großer Kunde",
      "acc": "einen großen Kunden",
      "dat": "einem großen Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "zu always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "indefinite-article",
      "preposition",
      "zu"
    ]
  },
  {
    "id": "q115",
    "sentence": "Das Geschenk ist für ___",
    "choices": [
      "ein Stuhl",
      "einen Stuhl",
      "einem Stuhl"
    ],
    "answer": "einen Stuhl",
    "case": "Accusative",
    "noun": {
      "word": "Stuhl",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Stuhl",
      "acc": "einen Stuhl",
      "dat": "einem Stuhl"
    },
    "trigger": {
      "type": "preposition",
      "text": "für always requires the Accusative."
    },
    "tags": [
      "accusative",
      "für",
      "indefinite-article",
      "preposition"
    ]
  },
  {
    "id": "q116",
    "sentence": "Wir gehen durch ___",
    "choices": [
      "eine junge Schule",
      "einer jungen Schule",
      "den junge Schule"
    ],
    "answer": "eine junge Schule",
    "case": "Accusative",
    "noun": {
      "word": "Schule",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "jung",
    "forms": {
      "nom": "eine junge Schule",
      "acc": "eine junge Schule",
      "dat": "einer jungen Schule"
    },
    "trigger": {
      "type": "preposition",
      "text": "durch always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "durch",
      "indefinite-article",
      "preposition"
    ]
  },
  {
    "id": "q117",
    "sentence": "Wir spielen gegen ___",
    "choices": [
      "ein Vater",
      "einen Vater",
      "einem Vater"
    ],
    "answer": "einen Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Vater",
      "acc": "einen Vater",
      "dat": "einem Vater"
    },
    "trigger": {
      "type": "preposition",
      "text": "gegen always requires the Accusative."
    },
    "tags": [
      "accusative",
      "gegen",
      "indefinite-article",
      "preposition"
    ]
  },
  {
    "id": "q118",
    "sentence": "Ich gehe ohne ___",
    "choices": [
      "die interessanten Autos",
      "den interessanten Autos",
      "dem interessanten Autos"
    ],
    "answer": "die interessanten Autos",
    "case": "Accusative",
    "noun": {
      "word": "Autos",
      "gender": "neuter",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": "interessant",
    "forms": {
      "nom": "die interessanten Autos",
      "acc": "die interessanten Autos",
      "dat": "den interessanten Autos"
    },
    "trigger": {
      "type": "preposition",
      "text": "ohne always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "ohne",
      "plural",
      "preposition"
    ]
  },
  {
    "id": "q119",
    "sentence": "Wir laufen um ___",
    "choices": [
      "ein Kind",
      "einem Kind",
      "den Kind"
    ],
    "answer": "ein Kind",
    "case": "Accusative",
    "noun": {
      "word": "Kind",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Kind",
      "acc": "ein Kind",
      "dat": "einem Kind"
    },
    "trigger": {
      "type": "preposition",
      "text": "um always requires the Accusative."
    },
    "tags": [
      "accusative",
      "indefinite-article",
      "preposition",
      "um"
    ]
  },
  {
    "id": "q120",
    "sentence": "Ich komme aus ___",
    "choices": [
      "ein schönes Baby",
      "einem schönen Baby",
      "den schönes Baby"
    ],
    "answer": "einem schönen Baby",
    "case": "Dative",
    "noun": {
      "word": "Baby",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "schön",
    "forms": {
      "nom": "ein schönes Baby",
      "acc": "ein schönes Baby",
      "dat": "einem schönen Baby"
    },
    "trigger": {
      "type": "preposition",
      "text": "aus always requires the Dative."
    },
    "tags": [
      "adjective",
      "aus",
      "dative",
      "indefinite-article",
      "preposition"
    ]
  },
  {
    "id": "q121",
    "sentence": "Ich bin heute bei ___",
    "choices": [
      "mein Kunde",
      "meinen Kunden",
      "meinem Kunden"
    ],
    "answer": "meinem Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "mein Kunde",
      "acc": "meinen Kunden",
      "dat": "meinem Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "bei always requires the Dative."
    },
    "tags": [
      "bei",
      "dative",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q122",
    "sentence": "Ich fahre mit ___",
    "choices": [
      "dein kurzer Vater",
      "deinen kurzen Vater",
      "deinem kurzen Vater"
    ],
    "answer": "deinem kurzen Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "kurz",
    "forms": {
      "nom": "dein kurzer Vater",
      "acc": "deinen kurzen Vater",
      "dat": "deinem kurzen Vater"
    },
    "trigger": {
      "type": "preposition",
      "text": "mit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "mit",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q123",
    "sentence": "Nach ___ gehe ich nach Hause.",
    "choices": [
      "sein Kollege",
      "seinen Kollegen",
      "seinem Kollegen"
    ],
    "answer": "seinem Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "sein Kollege",
      "acc": "seinen Kollegen",
      "dat": "seinem Kollegen"
    },
    "trigger": {
      "type": "preposition",
      "text": "nach requires the Dative when it means “after”, as in nach dem Essen."
    },
    "tags": [
      "dative",
      "nach",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q124",
    "sentence": "Seit ___ lerne ich Deutsch.",
    "choices": [
      "ihr freundlicher Tag",
      "ihren freundlichen Tag",
      "ihrem freundlichen Tag"
    ],
    "answer": "ihrem freundlichen Tag",
    "case": "Dative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "freundlich",
    "forms": {
      "nom": "ihr freundlicher Tag",
      "acc": "ihren freundlichen Tag",
      "dat": "ihrem freundlichen Tag"
    },
    "trigger": {
      "type": "preposition",
      "text": "seit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "preposition",
      "seit"
    ]
  },
  {
    "id": "q125",
    "sentence": "Das Geschenk ist von ___",
    "choices": [
      "unsere Reise",
      "unserer Reise",
      "den Reise"
    ],
    "answer": "unserer Reise",
    "case": "Dative",
    "noun": {
      "word": "Reise",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unsere Reise",
      "acc": "unsere Reise",
      "dat": "unserer Reise"
    },
    "trigger": {
      "type": "preposition",
      "text": "von always requires the Dative."
    },
    "tags": [
      "dative",
      "possessive",
      "preposition",
      "von"
    ]
  },
  {
    "id": "q126",
    "sentence": "Ich gehe zu ___",
    "choices": [
      "euer ruhiger Student",
      "euren ruhigen Studenten",
      "eurem ruhigen Studenten"
    ],
    "answer": "eurem ruhigen Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "ruhig",
    "forms": {
      "nom": "euer ruhiger Student",
      "acc": "euren ruhigen Studenten",
      "dat": "eurem ruhigen Studenten"
    },
    "trigger": {
      "type": "preposition",
      "text": "zu always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "preposition",
      "zu"
    ]
  },
  {
    "id": "q127",
    "sentence": "Das Geschenk ist für ___",
    "choices": [
      "Ihr Baby",
      "Ihrem Baby",
      "den Baby"
    ],
    "answer": "Ihr Baby",
    "case": "Accusative",
    "noun": {
      "word": "Baby",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": null,
    "forms": {
      "nom": "Ihr Baby",
      "acc": "Ihr Baby",
      "dat": "Ihrem Baby"
    },
    "trigger": {
      "type": "preposition",
      "text": "für always requires the Accusative."
    },
    "tags": [
      "accusative",
      "für",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q128",
    "sentence": "Wir gehen durch ___",
    "choices": [
      "mein neuer Vater",
      "meinen neuen Vater",
      "meinem neuen Vater"
    ],
    "answer": "meinen neuen Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "neu",
    "forms": {
      "nom": "mein neuer Vater",
      "acc": "meinen neuen Vater",
      "dat": "meinem neuen Vater"
    },
    "trigger": {
      "type": "preposition",
      "text": "durch always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "durch",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q129",
    "sentence": "Wir spielen gegen ___",
    "choices": [
      "dein Arzt",
      "deinen Arzt",
      "deinem Arzt"
    ],
    "answer": "deinen Arzt",
    "case": "Accusative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "dein Arzt",
      "acc": "deinen Arzt",
      "dat": "deinem Arzt"
    },
    "trigger": {
      "type": "preposition",
      "text": "gegen always requires the Accusative."
    },
    "tags": [
      "accusative",
      "gegen",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q130",
    "sentence": "Ich gehe ohne ___",
    "choices": [
      "sein großes Mädchen",
      "seinem großen Mädchen",
      "den großes Mädchen"
    ],
    "answer": "sein großes Mädchen",
    "case": "Accusative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "groß",
    "forms": {
      "nom": "sein großes Mädchen",
      "acc": "sein großes Mädchen",
      "dat": "seinem großen Mädchen"
    },
    "trigger": {
      "type": "preposition",
      "text": "ohne always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "ohne",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q131",
    "sentence": "Wir laufen um ___",
    "choices": [
      "ihr Student",
      "ihren Studenten",
      "ihrem Studenten"
    ],
    "answer": "ihren Studenten",
    "case": "Accusative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": null,
    "forms": {
      "nom": "ihr Student",
      "acc": "ihren Studenten",
      "dat": "ihrem Studenten"
    },
    "trigger": {
      "type": "preposition",
      "text": "um always requires the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "preposition",
      "um"
    ]
  },
  {
    "id": "q132",
    "sentence": "Ich komme aus ___",
    "choices": [
      "unser junger Kunde",
      "unseren jungen Kunden",
      "unserem jungen Kunden"
    ],
    "answer": "unserem jungen Kunden",
    "case": "Dative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "jung",
    "forms": {
      "nom": "unser junger Kunde",
      "acc": "unseren jungen Kunden",
      "dat": "unserem jungen Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "aus always requires the Dative."
    },
    "tags": [
      "adjective",
      "aus",
      "dative",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q133",
    "sentence": "Ich bin heute bei ___",
    "choices": [
      "eure Schwester",
      "eurer Schwester",
      "den Schwester"
    ],
    "answer": "eurer Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": null,
    "forms": {
      "nom": "eure Schwester",
      "acc": "eure Schwester",
      "dat": "eurer Schwester"
    },
    "trigger": {
      "type": "preposition",
      "text": "bei always requires the Dative."
    },
    "tags": [
      "bei",
      "dative",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q134",
    "sentence": "Ich fahre mit ___",
    "choices": [
      "Ihre interessante Mutter",
      "Ihrer interessanten Mutter",
      "den interessante Mutter"
    ],
    "answer": "Ihrer interessanten Mutter",
    "case": "Dative",
    "noun": {
      "word": "Mutter",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "interessant",
    "forms": {
      "nom": "Ihre interessante Mutter",
      "acc": "Ihre interessante Mutter",
      "dat": "Ihrer interessanten Mutter"
    },
    "trigger": {
      "type": "preposition",
      "text": "mit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "mit",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q135",
    "sentence": "Nach ___ gehe ich nach Hause.",
    "choices": [
      "meine Freundin",
      "meiner Freundin",
      "den Freundin"
    ],
    "answer": "meiner Freundin",
    "case": "Dative",
    "noun": {
      "word": "Freundin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "meine Freundin",
      "acc": "meine Freundin",
      "dat": "meiner Freundin"
    },
    "trigger": {
      "type": "preposition",
      "text": "nach requires the Dative when it means “after”, as in nach dem Essen."
    },
    "tags": [
      "dative",
      "nach",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q136",
    "sentence": "Seit ___ lerne ich Deutsch.",
    "choices": [
      "dein schöner Tag",
      "deinen schönen Tag",
      "deinem schönen Tag"
    ],
    "answer": "deinem schönen Tag",
    "case": "Dative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "schön",
    "forms": {
      "nom": "dein schöner Tag",
      "acc": "deinen schönen Tag",
      "dat": "deinem schönen Tag"
    },
    "trigger": {
      "type": "preposition",
      "text": "seit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "preposition",
      "seit"
    ]
  },
  {
    "id": "q137",
    "sentence": "Das Geschenk ist von ___",
    "choices": [
      "seine Frau",
      "seiner Frau",
      "den Frau"
    ],
    "answer": "seiner Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "seine Frau",
      "acc": "seine Frau",
      "dat": "seiner Frau"
    },
    "trigger": {
      "type": "preposition",
      "text": "von always requires the Dative."
    },
    "tags": [
      "dative",
      "possessive",
      "preposition",
      "von"
    ]
  },
  {
    "id": "q138",
    "sentence": "Ich gehe zu ___",
    "choices": [
      "ihr kurzer Arzt",
      "ihren kurzen Arzt",
      "ihrem kurzen Arzt"
    ],
    "answer": "ihrem kurzen Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "kurz",
    "forms": {
      "nom": "ihr kurzer Arzt",
      "acc": "ihren kurzen Arzt",
      "dat": "ihrem kurzen Arzt"
    },
    "trigger": {
      "type": "preposition",
      "text": "zu always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "preposition",
      "zu"
    ]
  },
  {
    "id": "q139",
    "sentence": "Das Geschenk ist für ___",
    "choices": [
      "unsere Lehrerin",
      "unserer Lehrerin",
      "den Lehrerin"
    ],
    "answer": "unsere Lehrerin",
    "case": "Accusative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unsere Lehrerin",
      "acc": "unsere Lehrerin",
      "dat": "unserer Lehrerin"
    },
    "trigger": {
      "type": "preposition",
      "text": "für always requires the Accusative."
    },
    "tags": [
      "accusative",
      "für",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q140",
    "sentence": "Wir gehen durch ___",
    "choices": [
      "euer freundlichen Mütter",
      "euren freundlichen Mütter",
      "den freundlichen Mütter"
    ],
    "answer": "euer freundlichen Mütter",
    "case": "Accusative",
    "noun": {
      "word": "Mütter",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "euer",
    "adjective": "freundlich",
    "forms": {
      "nom": "euer freundlichen Mütter",
      "acc": "euer freundlichen Mütter",
      "dat": "euren freundlichen Mütter"
    },
    "trigger": {
      "type": "preposition",
      "text": "durch always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "durch",
      "plural",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q141",
    "sentence": "Wir spielen gegen ___",
    "choices": [
      "Ihr Kunde",
      "Ihren Kunden",
      "Ihrem Kunden"
    ],
    "answer": "Ihren Kunden",
    "case": "Accusative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": null,
    "forms": {
      "nom": "Ihr Kunde",
      "acc": "Ihren Kunden",
      "dat": "Ihrem Kunden"
    },
    "trigger": {
      "type": "preposition",
      "text": "gegen always requires the Accusative."
    },
    "tags": [
      "accusative",
      "gegen",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q142",
    "sentence": "Ich gehe ohne ___",
    "choices": [
      "mein ruhiger Koffer",
      "meinen ruhigen Koffer",
      "meinem ruhigen Koffer"
    ],
    "answer": "meinen ruhigen Koffer",
    "case": "Accusative",
    "noun": {
      "word": "Koffer",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "ruhig",
    "forms": {
      "nom": "mein ruhiger Koffer",
      "acc": "meinen ruhigen Koffer",
      "dat": "meinem ruhigen Koffer"
    },
    "trigger": {
      "type": "preposition",
      "text": "ohne always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "ohne",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q143",
    "sentence": "Wir laufen um ___",
    "choices": [
      "deine Tasche",
      "deiner Tasche",
      "den Tasche"
    ],
    "answer": "deine Tasche",
    "case": "Accusative",
    "noun": {
      "word": "Tasche",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "deine Tasche",
      "acc": "deine Tasche",
      "dat": "deiner Tasche"
    },
    "trigger": {
      "type": "preposition",
      "text": "um always requires the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "preposition",
      "um"
    ]
  },
  {
    "id": "q144",
    "sentence": "Ich komme aus ___",
    "choices": [
      "seine neue Schule",
      "seiner neuen Schule",
      "den neue Schule"
    ],
    "answer": "seiner neuen Schule",
    "case": "Dative",
    "noun": {
      "word": "Schule",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "neu",
    "forms": {
      "nom": "seine neue Schule",
      "acc": "seine neue Schule",
      "dat": "seiner neuen Schule"
    },
    "trigger": {
      "type": "preposition",
      "text": "aus always requires the Dative."
    },
    "tags": [
      "adjective",
      "aus",
      "dative",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q145",
    "sentence": "Ich bin heute bei ___",
    "choices": [
      "ihr Mädchen",
      "ihrem Mädchen",
      "den Mädchen"
    ],
    "answer": "ihrem Mädchen",
    "case": "Dative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": null,
    "forms": {
      "nom": "ihr Mädchen",
      "acc": "ihr Mädchen",
      "dat": "ihrem Mädchen"
    },
    "trigger": {
      "type": "preposition",
      "text": "bei always requires the Dative."
    },
    "tags": [
      "bei",
      "dative",
      "possessive",
      "preposition"
    ]
  },
  {
    "id": "q146",
    "sentence": "Ich fahre mit ___",
    "choices": [
      "dieser große Mann",
      "diesen großen Mann",
      "diesem großen Mann"
    ],
    "answer": "diesem großen Mann",
    "case": "Dative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": "groß",
    "forms": {
      "nom": "dieser große Mann",
      "acc": "diesen großen Mann",
      "dat": "diesem großen Mann"
    },
    "trigger": {
      "type": "preposition",
      "text": "mit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "mit",
      "preposition"
    ]
  },
  {
    "id": "q147",
    "sentence": "Nach ___ gehe ich nach Hause.",
    "choices": [
      "jener Vater",
      "jenen Vater",
      "jenem Vater"
    ],
    "answer": "jenem Vater",
    "case": "Dative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": null,
    "forms": {
      "nom": "jener Vater",
      "acc": "jenen Vater",
      "dat": "jenem Vater"
    },
    "trigger": {
      "type": "preposition",
      "text": "nach requires the Dative when it means “after”, as in nach dem Essen."
    },
    "tags": [
      "dative",
      "demonstrative",
      "nach",
      "preposition"
    ]
  },
  {
    "id": "q148",
    "sentence": "Seit ___ lerne ich Deutsch.",
    "choices": [
      "welcher junge Tag",
      "welchen jungen Tag",
      "welchem jungen Tag"
    ],
    "answer": "welchem jungen Tag",
    "case": "Dative",
    "noun": {
      "word": "Tag",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "jung",
    "forms": {
      "nom": "welcher junge Tag",
      "acc": "welchen jungen Tag",
      "dat": "welchem jungen Tag"
    },
    "trigger": {
      "type": "preposition",
      "text": "seit always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "preposition",
      "seit"
    ]
  },
  {
    "id": "q149",
    "sentence": "Das Geschenk ist von ___",
    "choices": [
      "dieser Park",
      "diesen Park",
      "diesem Park"
    ],
    "answer": "diesem Park",
    "case": "Dative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Park",
      "acc": "diesen Park",
      "dat": "diesem Park"
    },
    "trigger": {
      "type": "preposition",
      "text": "von always requires the Dative."
    },
    "tags": [
      "dative",
      "demonstrative",
      "preposition",
      "von"
    ]
  },
  {
    "id": "q150",
    "sentence": "Ich gehe zu ___",
    "choices": [
      "jener interessante Kollege",
      "jenen interessanten Kollegen",
      "jenem interessanten Kollegen"
    ],
    "answer": "jenem interessanten Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "interessant",
    "forms": {
      "nom": "jener interessante Kollege",
      "acc": "jenen interessanten Kollegen",
      "dat": "jenem interessanten Kollegen"
    },
    "trigger": {
      "type": "preposition",
      "text": "zu always requires the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "preposition",
      "zu"
    ]
  },
  {
    "id": "q151",
    "sentence": "Das Geschenk ist für ___",
    "choices": [
      "keine Wagen",
      "keinen Wagen",
      "den Wagen"
    ],
    "answer": "keine Wagen",
    "case": "Accusative",
    "noun": {
      "word": "Wagen",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Wagen",
      "acc": "keine Wagen",
      "dat": "keinen Wagen"
    },
    "trigger": {
      "type": "preposition",
      "text": "für always requires the Accusative."
    },
    "tags": [
      "accusative",
      "für",
      "kein",
      "plural",
      "preposition"
    ]
  },
  {
    "id": "q152",
    "sentence": "Wir gehen durch ___",
    "choices": [
      "kein schöner Park",
      "keinen schönen Park",
      "keinem schönen Park"
    ],
    "answer": "keinen schönen Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "schön",
    "forms": {
      "nom": "kein schöner Park",
      "acc": "keinen schönen Park",
      "dat": "keinem schönen Park"
    },
    "trigger": {
      "type": "preposition",
      "text": "durch always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "durch",
      "kein",
      "preposition"
    ]
  },
  {
    "id": "q153",
    "sentence": "Wir spielen gegen ___",
    "choices": [
      "keine Schwester",
      "keiner Schwester",
      "den Schwester"
    ],
    "answer": "keine Schwester",
    "case": "Accusative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Schwester",
      "acc": "keine Schwester",
      "dat": "keiner Schwester"
    },
    "trigger": {
      "type": "preposition",
      "text": "gegen always requires the Accusative."
    },
    "tags": [
      "accusative",
      "gegen",
      "kein",
      "preposition"
    ]
  },
  {
    "id": "q154",
    "sentence": "Ich gehe ohne ___",
    "choices": [
      "kein kurzes Zimmer",
      "keinem kurzen Zimmer",
      "den kurzes Zimmer"
    ],
    "answer": "kein kurzes Zimmer",
    "case": "Accusative",
    "noun": {
      "word": "Zimmer",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "kurz",
    "forms": {
      "nom": "kein kurzes Zimmer",
      "acc": "kein kurzes Zimmer",
      "dat": "keinem kurzen Zimmer"
    },
    "trigger": {
      "type": "preposition",
      "text": "ohne always requires the Accusative."
    },
    "tags": [
      "accusative",
      "adjective",
      "kein",
      "ohne",
      "preposition"
    ]
  },
  {
    "id": "q155",
    "sentence": "Wir laufen um ___",
    "choices": [
      "kein Mann",
      "keinen Mann",
      "keinem Mann"
    ],
    "answer": "keinen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "kein Mann",
      "acc": "keinen Mann",
      "dat": "keinem Mann"
    },
    "trigger": {
      "type": "preposition",
      "text": "um always requires the Accusative."
    },
    "tags": [
      "accusative",
      "kein",
      "preposition",
      "um"
    ]
  },
  {
    "id": "q156",
    "sentence": "Das Buch liegt auf ___.",
    "choices": [
      "die großen Tische",
      "den großen Tische",
      "dem großen Tische"
    ],
    "answer": "den großen Tische",
    "case": "Dative",
    "noun": {
      "word": "Tische",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": "groß",
    "forms": {
      "nom": "die großen Tische",
      "acc": "die großen Tische",
      "dat": "den großen Tische"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "plural",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q157",
    "sentence": "Ich lege das Buch auf ___.",
    "choices": [
      "der Tisch",
      "den Tisch",
      "dem Tisch"
    ],
    "answer": "den Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Tisch",
      "acc": "den Tisch",
      "dat": "dem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q158",
    "sentence": "Das Kind ist in ___.",
    "choices": [
      "das junge Haus",
      "dem jungen Haus",
      "den junge Haus"
    ],
    "answer": "dem jungen Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "jung",
    "forms": {
      "nom": "das junge Haus",
      "acc": "das junge Haus",
      "dat": "dem jungen Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q159",
    "sentence": "Ich gehe in ___.",
    "choices": [
      "der Park",
      "den Park",
      "dem Park"
    ],
    "answer": "den Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Park",
      "acc": "den Park",
      "dat": "dem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q160",
    "sentence": "Das Bild hängt an ___.",
    "choices": [
      "die interessante Tür",
      "der interessanten Tür",
      "den interessante Tür"
    ],
    "answer": "der interessanten Tür",
    "case": "Dative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "interessant",
    "forms": {
      "nom": "die interessante Tür",
      "acc": "die interessante Tür",
      "dat": "der interessanten Tür"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q161",
    "sentence": "Ich hänge das Bild an ___.",
    "choices": [
      "die Tür",
      "der Tür",
      "den Tür"
    ],
    "answer": "die Tür",
    "case": "Accusative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Tür",
      "acc": "die Tür",
      "dat": "der Tür"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q162",
    "sentence": "Der Hund liegt unter ___.",
    "choices": [
      "der schöne Tisch",
      "den schönen Tisch",
      "dem schönen Tisch"
    ],
    "answer": "dem schönen Tisch",
    "case": "Dative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "schön",
    "forms": {
      "nom": "der schöne Tisch",
      "acc": "den schönen Tisch",
      "dat": "dem schönen Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "unter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q163",
    "sentence": "Der Hund läuft unter ___.",
    "choices": [
      "der Tisch",
      "den Tisch",
      "dem Tisch"
    ],
    "answer": "den Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Tisch",
      "acc": "den Tisch",
      "dat": "dem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "under is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q164",
    "sentence": "Das Auto steht vor ___.",
    "choices": [
      "die kurzen Häuser",
      "den kurzen Häuser",
      "dem kurzen Häuser"
    ],
    "answer": "den kurzen Häuser",
    "case": "Dative",
    "noun": {
      "word": "Häuser",
      "gender": "neuter",
      "number": "plural"
    },
    "determiner": "definite",
    "adjective": "kurz",
    "forms": {
      "nom": "die kurzen Häuser",
      "acc": "die kurzen Häuser",
      "dat": "den kurzen Häuser"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "plural",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q165",
    "sentence": "Ich stelle das Auto vor ___.",
    "choices": [
      "der Park",
      "den Park",
      "dem Park"
    ],
    "answer": "den Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Park",
      "acc": "den Park",
      "dat": "dem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q166",
    "sentence": "Der Ball liegt hinter ___.",
    "choices": [
      "der freundliche Schlüssel",
      "den freundlichen Schlüssel",
      "dem freundlichen Schlüssel"
    ],
    "answer": "dem freundlichen Schlüssel",
    "case": "Dative",
    "noun": {
      "word": "Schlüssel",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "freundlich",
    "forms": {
      "nom": "der freundliche Schlüssel",
      "acc": "den freundlichen Schlüssel",
      "dat": "dem freundlichen Schlüssel"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q167",
    "sentence": "Ich stelle den Ball hinter ___.",
    "choices": [
      "ein Park",
      "einen Park",
      "einem Park"
    ],
    "answer": "einen Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Park",
      "acc": "einen Park",
      "dat": "einem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "indefinite-article",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q168",
    "sentence": "Der Stuhl steht neben ___.",
    "choices": [
      "ein ruhiger Stuhl",
      "einen ruhigen Stuhl",
      "einem ruhigen Stuhl"
    ],
    "answer": "einem ruhigen Stuhl",
    "case": "Dative",
    "noun": {
      "word": "Stuhl",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "ruhig",
    "forms": {
      "nom": "ein ruhiger Stuhl",
      "acc": "einen ruhigen Stuhl",
      "dat": "einem ruhigen Stuhl"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "indefinite-article",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q169",
    "sentence": "Ich stelle den Stuhl neben ___.",
    "choices": [
      "der Wagen",
      "den Wagen",
      "dem Wagen"
    ],
    "answer": "den Wagen",
    "case": "Accusative",
    "noun": {
      "word": "Wagen",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Wagen",
      "acc": "den Wagen",
      "dat": "dem Wagen"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q170",
    "sentence": "Die Lampe hängt über ___.",
    "choices": [
      "der neue Koffer",
      "den neuen Koffer",
      "dem neuen Koffer"
    ],
    "answer": "dem neuen Koffer",
    "case": "Dative",
    "noun": {
      "word": "Koffer",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "neu",
    "forms": {
      "nom": "der neue Koffer",
      "acc": "den neuen Koffer",
      "dat": "dem neuen Koffer"
    },
    "trigger": {
      "type": "subject",
      "text": "über is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q171",
    "sentence": "Ich hänge die Lampe über ___.",
    "choices": [
      "mein Monat",
      "meinen Monat",
      "meinem Monat"
    ],
    "answer": "meinen Monat",
    "case": "Accusative",
    "noun": {
      "word": "Monat",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "mein Monat",
      "acc": "meinen Monat",
      "dat": "meinem Monat"
    },
    "trigger": {
      "type": "subject",
      "text": "über is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q172",
    "sentence": "Der Tisch steht zwischen ___.",
    "choices": [
      "dein großen Mütter",
      "deinen großen Mütter",
      "den großen Mütter"
    ],
    "answer": "deinen großen Mütter",
    "case": "Dative",
    "noun": {
      "word": "Mütter",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "dein",
    "adjective": "groß",
    "forms": {
      "nom": "dein großen Mütter",
      "acc": "dein großen Mütter",
      "dat": "deinen großen Mütter"
    },
    "trigger": {
      "type": "subject",
      "text": "zwischen is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "plural",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q173",
    "sentence": "Ich stelle den Tisch zwischen ___.",
    "choices": [
      "seine Freundin",
      "seiner Freundin",
      "den Freundin"
    ],
    "answer": "seine Freundin",
    "case": "Accusative",
    "noun": {
      "word": "Freundin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "seine Freundin",
      "acc": "seine Freundin",
      "dat": "seiner Freundin"
    },
    "trigger": {
      "type": "subject",
      "text": "zwischen is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q174",
    "sentence": "Das Buch liegt auf ___.",
    "choices": [
      "ihr junger Tisch",
      "ihren jungen Tisch",
      "ihrem jungen Tisch"
    ],
    "answer": "ihrem jungen Tisch",
    "case": "Dative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "jung",
    "forms": {
      "nom": "ihr junger Tisch",
      "acc": "ihren jungen Tisch",
      "dat": "ihrem jungen Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q175",
    "sentence": "Ich lege das Buch auf ___.",
    "choices": [
      "unser Tisch",
      "unseren Tisch",
      "unserem Tisch"
    ],
    "answer": "unseren Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unser Tisch",
      "acc": "unseren Tisch",
      "dat": "unserem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q176",
    "sentence": "Das Kind ist in ___.",
    "choices": [
      "euer interessantes Haus",
      "eurem interessanten Haus",
      "den interessantes Haus"
    ],
    "answer": "eurem interessanten Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "interessant",
    "forms": {
      "nom": "euer interessantes Haus",
      "acc": "euer interessantes Haus",
      "dat": "eurem interessanten Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q177",
    "sentence": "Ich gehe in ___.",
    "choices": [
      "Ihr Park",
      "Ihren Park",
      "Ihrem Park"
    ],
    "answer": "Ihren Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": null,
    "forms": {
      "nom": "Ihr Park",
      "acc": "Ihren Park",
      "dat": "Ihrem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q178",
    "sentence": "Das Bild hängt an ___.",
    "choices": [
      "meine schöne Tür",
      "meiner schönen Tür",
      "den schöne Tür"
    ],
    "answer": "meiner schönen Tür",
    "case": "Dative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "schön",
    "forms": {
      "nom": "meine schöne Tür",
      "acc": "meine schöne Tür",
      "dat": "meiner schönen Tür"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q179",
    "sentence": "Ich hänge das Bild an ___.",
    "choices": [
      "deine Tür",
      "deiner Tür",
      "den Tür"
    ],
    "answer": "deine Tür",
    "case": "Accusative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "deine Tür",
      "acc": "deine Tür",
      "dat": "deiner Tür"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q180",
    "sentence": "Der Hund liegt unter ___.",
    "choices": [
      "sein kurzen Tische",
      "seinen kurzen Tische",
      "den kurzen Tische"
    ],
    "answer": "seinen kurzen Tische",
    "case": "Dative",
    "noun": {
      "word": "Tische",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "sein",
    "adjective": "kurz",
    "forms": {
      "nom": "sein kurzen Tische",
      "acc": "sein kurzen Tische",
      "dat": "seinen kurzen Tische"
    },
    "trigger": {
      "type": "subject",
      "text": "unter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "plural",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q181",
    "sentence": "Der Hund läuft unter ___.",
    "choices": [
      "ihr Tisch",
      "ihren Tisch",
      "ihrem Tisch"
    ],
    "answer": "ihren Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": null,
    "forms": {
      "nom": "ihr Tisch",
      "acc": "ihren Tisch",
      "dat": "ihrem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "under is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q182",
    "sentence": "Das Auto steht vor ___.",
    "choices": [
      "unser freundliches Haus",
      "unserem freundlichen Haus",
      "den freundliches Haus"
    ],
    "answer": "unserem freundlichen Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "freundlich",
    "forms": {
      "nom": "unser freundliches Haus",
      "acc": "unser freundliches Haus",
      "dat": "unserem freundlichen Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q183",
    "sentence": "Ich stelle das Auto vor ___.",
    "choices": [
      "euer Park",
      "euren Park",
      "eurem Park"
    ],
    "answer": "euren Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": null,
    "forms": {
      "nom": "euer Park",
      "acc": "euren Park",
      "dat": "eurem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q184",
    "sentence": "Der Ball liegt hinter ___.",
    "choices": [
      "Ihr ruhiger Park",
      "Ihren ruhigen Park",
      "Ihrem ruhigen Park"
    ],
    "answer": "Ihrem ruhigen Park",
    "case": "Dative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "ruhig",
    "forms": {
      "nom": "Ihr ruhiger Park",
      "acc": "Ihren ruhigen Park",
      "dat": "Ihrem ruhigen Park"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q185",
    "sentence": "Ich stelle den Ball hinter ___.",
    "choices": [
      "meine Stadt",
      "meiner Stadt",
      "den Stadt"
    ],
    "answer": "meine Stadt",
    "case": "Accusative",
    "noun": {
      "word": "Stadt",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "meine Stadt",
      "acc": "meine Stadt",
      "dat": "meiner Stadt"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q186",
    "sentence": "Der Stuhl steht neben ___.",
    "choices": [
      "dein neues Haus",
      "deinem neuen Haus",
      "den neues Haus"
    ],
    "answer": "deinem neuen Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "neu",
    "forms": {
      "nom": "dein neues Haus",
      "acc": "dein neues Haus",
      "dat": "deinem neuen Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q187",
    "sentence": "Ich stelle den Stuhl neben ___.",
    "choices": [
      "sein Mann",
      "seinen Mann",
      "seinem Mann"
    ],
    "answer": "seinen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "sein Mann",
      "acc": "seinen Mann",
      "dat": "seinem Mann"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q188",
    "sentence": "Die Lampe hängt über ___.",
    "choices": [
      "ihr großen Väter",
      "ihren großen Väter",
      "den großen Väter"
    ],
    "answer": "ihren großen Väter",
    "case": "Dative",
    "noun": {
      "word": "Väter",
      "gender": "masculine",
      "number": "plural"
    },
    "determiner": "ihr",
    "adjective": "groß",
    "forms": {
      "nom": "ihr großen Väter",
      "acc": "ihr großen Väter",
      "dat": "ihren großen Väter"
    },
    "trigger": {
      "type": "subject",
      "text": "über is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "plural",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q189",
    "sentence": "Ich hänge die Lampe über ___.",
    "choices": [
      "unser Kollege",
      "unseren Kollegen",
      "unserem Kollegen"
    ],
    "answer": "unseren Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unser Kollege",
      "acc": "unseren Kollegen",
      "dat": "unserem Kollegen"
    },
    "trigger": {
      "type": "subject",
      "text": "über is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "possessive",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q190",
    "sentence": "Der Tisch steht zwischen ___.",
    "choices": [
      "euer junger Arzt",
      "euren jungen Arzt",
      "eurem jungen Arzt"
    ],
    "answer": "eurem jungen Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "jung",
    "forms": {
      "nom": "euer junger Arzt",
      "acc": "euren jungen Arzt",
      "dat": "eurem jungen Arzt"
    },
    "trigger": {
      "type": "subject",
      "text": "zwischen is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "possessive",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q191",
    "sentence": "Ich stelle den Tisch zwischen ___.",
    "choices": [
      "dieser Student",
      "diesen Studenten",
      "diesem Studenten"
    ],
    "answer": "diesen Studenten",
    "case": "Accusative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Student",
      "acc": "diesen Studenten",
      "dat": "diesem Studenten"
    },
    "trigger": {
      "type": "subject",
      "text": "zwischen is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "demonstrative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q192",
    "sentence": "Das Buch liegt auf ___.",
    "choices": [
      "jener interessante Tisch",
      "jenen interessanten Tisch",
      "jenem interessanten Tisch"
    ],
    "answer": "jenem interessanten Tisch",
    "case": "Dative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "interessant",
    "forms": {
      "nom": "jener interessante Tisch",
      "acc": "jenen interessanten Tisch",
      "dat": "jenem interessanten Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q193",
    "sentence": "Ich lege das Buch auf ___.",
    "choices": [
      "welcher Tisch",
      "welchen Tisch",
      "welchem Tisch"
    ],
    "answer": "welchen Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": null,
    "forms": {
      "nom": "welcher Tisch",
      "acc": "welchen Tisch",
      "dat": "welchem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "auf is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "demonstrative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q194",
    "sentence": "Das Kind ist in ___.",
    "choices": [
      "dieses schöne Haus",
      "diesem schönen Haus",
      "den schöne Haus"
    ],
    "answer": "diesem schönen Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": "schön",
    "forms": {
      "nom": "dieses schöne Haus",
      "acc": "dieses schöne Haus",
      "dat": "diesem schönen Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q195",
    "sentence": "Ich gehe in ___.",
    "choices": [
      "jener Park",
      "jenen Park",
      "jenem Park"
    ],
    "answer": "jenen Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": null,
    "forms": {
      "nom": "jener Park",
      "acc": "jenen Park",
      "dat": "jenem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "in is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "demonstrative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q196",
    "sentence": "Das Bild hängt an ___.",
    "choices": [
      "welche kurzen Türen",
      "welchen kurzen Türen",
      "den kurzen Türen"
    ],
    "answer": "welchen kurzen Türen",
    "case": "Dative",
    "noun": {
      "word": "Türen",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "welcher",
    "adjective": "kurz",
    "forms": {
      "nom": "welche kurzen Türen",
      "acc": "welche kurzen Türen",
      "dat": "welchen kurzen Türen"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "plural",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q197",
    "sentence": "Ich hänge das Bild an ___.",
    "choices": [
      "diese Tür",
      "dieser Tür",
      "den Tür"
    ],
    "answer": "diese Tür",
    "case": "Accusative",
    "noun": {
      "word": "Tür",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "diese Tür",
      "acc": "diese Tür",
      "dat": "dieser Tür"
    },
    "trigger": {
      "type": "subject",
      "text": "an is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "demonstrative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q198",
    "sentence": "Der Hund liegt unter ___.",
    "choices": [
      "jener freundliche Tisch",
      "jenen freundlichen Tisch",
      "jenem freundlichen Tisch"
    ],
    "answer": "jenem freundlichen Tisch",
    "case": "Dative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "freundlich",
    "forms": {
      "nom": "jener freundliche Tisch",
      "acc": "jenen freundlichen Tisch",
      "dat": "jenem freundlichen Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "unter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q199",
    "sentence": "Der Hund läuft unter ___.",
    "choices": [
      "welcher Tisch",
      "welchen Tisch",
      "welchem Tisch"
    ],
    "answer": "welchen Tisch",
    "case": "Accusative",
    "noun": {
      "word": "Tisch",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": null,
    "forms": {
      "nom": "welcher Tisch",
      "acc": "welchen Tisch",
      "dat": "welchem Tisch"
    },
    "trigger": {
      "type": "subject",
      "text": "under is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "demonstrative",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q200",
    "sentence": "Das Auto steht vor ___.",
    "choices": [
      "dieses ruhige Haus",
      "diesem ruhigen Haus",
      "den ruhige Haus"
    ],
    "answer": "diesem ruhigen Haus",
    "case": "Dative",
    "noun": {
      "word": "Haus",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": "ruhig",
    "forms": {
      "nom": "dieses ruhige Haus",
      "acc": "dieses ruhige Haus",
      "dat": "diesem ruhigen Haus"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "demonstrative",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q201",
    "sentence": "Ich stelle das Auto vor ___.",
    "choices": [
      "kein Park",
      "keinen Park",
      "keinem Park"
    ],
    "answer": "keinen Park",
    "case": "Accusative",
    "noun": {
      "word": "Park",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "kein Park",
      "acc": "keinen Park",
      "dat": "keinem Park"
    },
    "trigger": {
      "type": "subject",
      "text": "vor is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "kein",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q202",
    "sentence": "Der Ball liegt hinter ___.",
    "choices": [
      "keine neue Wohnung",
      "keiner neuen Wohnung",
      "den neue Wohnung"
    ],
    "answer": "keiner neuen Wohnung",
    "case": "Dative",
    "noun": {
      "word": "Wohnung",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "neu",
    "forms": {
      "nom": "keine neue Wohnung",
      "acc": "keine neue Wohnung",
      "dat": "keiner neuen Wohnung"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "kein",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q203",
    "sentence": "Ich stelle den Ball hinter ___.",
    "choices": [
      "keine Tasche",
      "keiner Tasche",
      "den Tasche"
    ],
    "answer": "keine Tasche",
    "case": "Accusative",
    "noun": {
      "word": "Tasche",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Tasche",
      "acc": "keine Tasche",
      "dat": "keiner Tasche"
    },
    "trigger": {
      "type": "subject",
      "text": "hinter is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "kein",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q204",
    "sentence": "Der Stuhl steht neben ___.",
    "choices": [
      "keine großen Schulen",
      "keinen großen Schulen",
      "den großen Schulen"
    ],
    "answer": "keinen großen Schulen",
    "case": "Dative",
    "noun": {
      "word": "Schulen",
      "gender": "feminine",
      "number": "plural"
    },
    "determiner": "kein",
    "adjective": "groß",
    "forms": {
      "nom": "keine großen Schulen",
      "acc": "keine großen Schulen",
      "dat": "keinen großen Schulen"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes a location (Wo?), so it takes the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "kein",
      "plural",
      "two-way-preposition",
      "wo"
    ]
  },
  {
    "id": "q205",
    "sentence": "Ich stelle den Stuhl neben ___.",
    "choices": [
      "keine Frage",
      "keiner Frage",
      "den Frage"
    ],
    "answer": "keine Frage",
    "case": "Accusative",
    "noun": {
      "word": "Frage",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Frage",
      "acc": "keine Frage",
      "dat": "keiner Frage"
    },
    "trigger": {
      "type": "subject",
      "text": "neben is a two-way preposition. Here it describes movement to a destination (Wohin?), so it takes the Accusative."
    },
    "tags": [
      "accusative",
      "kein",
      "two-way-preposition",
      "wohin"
    ]
  },
  {
    "id": "q206",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "der Mann",
      "den Mann",
      "dem Mann"
    ],
    "answer": "den Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Mann",
      "acc": "den Mann",
      "dat": "dem Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "perfect"
    ]
  },
  {
    "id": "q207",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "der wichtige Vater",
      "den wichtigen Vater",
      "dem wichtigen Vater"
    ],
    "answer": "den wichtigen Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "wichtig",
    "forms": {
      "nom": "der wichtige Vater",
      "acc": "den wichtigen Vater",
      "dat": "dem wichtigen Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "perfect"
    ]
  },
  {
    "id": "q208",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "der Student",
      "den Studenten",
      "dem Studenten"
    ],
    "answer": "dem Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Student",
      "acc": "den Studenten",
      "dat": "dem Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "dative",
      "dative-verb",
      "perfect"
    ]
  },
  {
    "id": "q209",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "die teure Frau",
      "der teuren Frau",
      "den teure Frau"
    ],
    "answer": "der teuren Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "teuer",
    "forms": {
      "nom": "die teure Frau",
      "acc": "die teure Frau",
      "dat": "der teuren Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "perfect"
    ]
  },
  {
    "id": "q210",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "der Student",
      "den Studenten",
      "dem Studenten"
    ],
    "answer": "der Student",
    "case": "Nominative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Student",
      "acc": "den Studenten",
      "dat": "dem Studenten"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "nominative",
      "perfect"
    ]
  },
  {
    "id": "q211",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "der lange Mann",
      "den langen Mann",
      "dem langen Mann"
    ],
    "answer": "den langen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "lang",
    "forms": {
      "nom": "der lange Mann",
      "acc": "den langen Mann",
      "dat": "dem langen Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "perfect"
    ]
  },
  {
    "id": "q212",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "der Kollege",
      "den Kollegen",
      "dem Kollegen"
    ],
    "answer": "den Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "der Kollege",
      "acc": "den Kollegen",
      "dat": "dem Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "perfect"
    ]
  },
  {
    "id": "q213",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "die gute Schwester",
      "der guten Schwester",
      "den gute Schwester"
    ],
    "answer": "der guten Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "gut",
    "forms": {
      "nom": "die gute Schwester",
      "acc": "die gute Schwester",
      "dat": "der guten Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "perfect"
    ]
  },
  {
    "id": "q214",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "die Frau",
      "der Frau",
      "den Frau"
    ],
    "answer": "der Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": null,
    "forms": {
      "nom": "die Frau",
      "acc": "die Frau",
      "dat": "der Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "dative",
      "dative-verb",
      "perfect"
    ]
  },
  {
    "id": "q215",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "die moderne Lehrerin",
      "der modernen Lehrerin",
      "den moderne Lehrerin"
    ],
    "answer": "die moderne Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "definite",
    "adjective": "modern",
    "forms": {
      "nom": "die moderne Lehrerin",
      "acc": "die moderne Lehrerin",
      "dat": "der modernen Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "adjective",
      "nominative",
      "perfect"
    ]
  },
  {
    "id": "q216",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "ein Mann",
      "einen Mann",
      "einem Mann"
    ],
    "answer": "einen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Mann",
      "acc": "einen Mann",
      "dat": "einem Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "indefinite-article",
      "perfect"
    ]
  },
  {
    "id": "q217",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "ein alter Kollege",
      "einen alten Kollegen",
      "einem alten Kollegen"
    ],
    "answer": "einen alten Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "alt",
    "forms": {
      "nom": "ein alter Kollege",
      "acc": "einen alten Kollegen",
      "dat": "einem alten Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "indefinite-article",
      "perfect"
    ]
  },
  {
    "id": "q218",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "ein Student",
      "einen Studenten",
      "einem Studenten"
    ],
    "answer": "einem Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "ein Student",
      "acc": "einen Studenten",
      "dat": "einem Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "dative",
      "dative-verb",
      "indefinite-article",
      "perfect"
    ]
  },
  {
    "id": "q219",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "ein kleiner Arzt",
      "einen kleinen Arzt",
      "einem kleinen Arzt"
    ],
    "answer": "einem kleinen Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": "klein",
    "forms": {
      "nom": "ein kleiner Arzt",
      "acc": "einen kleinen Arzt",
      "dat": "einem kleinen Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "indefinite-article",
      "perfect"
    ]
  },
  {
    "id": "q220",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "eine Lehrerin",
      "einer Lehrerin",
      "den Lehrerin"
    ],
    "answer": "eine Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "indefinite",
    "adjective": null,
    "forms": {
      "nom": "eine Lehrerin",
      "acc": "eine Lehrerin",
      "dat": "einer Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "indefinite-article",
      "nominative",
      "perfect"
    ]
  },
  {
    "id": "q221",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "mein netter Mann",
      "meinen netten Mann",
      "meinem netten Mann"
    ],
    "answer": "meinen netten Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "nett",
    "forms": {
      "nom": "mein netter Mann",
      "acc": "meinen netten Mann",
      "dat": "meinem netten Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q222",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "deine Frau",
      "deiner Frau",
      "den Frau"
    ],
    "answer": "deine Frau",
    "case": "Accusative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": null,
    "forms": {
      "nom": "deine Frau",
      "acc": "deine Frau",
      "dat": "deiner Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q223",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "sein wichtiger Student",
      "seinen wichtigen Studenten",
      "seinem wichtigen Studenten"
    ],
    "answer": "seinem wichtigen Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": "wichtig",
    "forms": {
      "nom": "sein wichtiger Student",
      "acc": "seinen wichtigen Studenten",
      "dat": "seinem wichtigen Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q224",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "ihre Frau",
      "ihrer Frau",
      "den Frau"
    ],
    "answer": "ihrer Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": null,
    "forms": {
      "nom": "ihre Frau",
      "acc": "ihre Frau",
      "dat": "ihrer Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q225",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "unser teures Mädchen",
      "unserem teuren Mädchen",
      "den teures Mädchen"
    ],
    "answer": "unser teures Mädchen",
    "case": "Nominative",
    "noun": {
      "word": "Mädchen",
      "gender": "neuter",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": "teuer",
    "forms": {
      "nom": "unser teures Mädchen",
      "acc": "unser teures Mädchen",
      "dat": "unserem teuren Mädchen"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "adjective",
      "nominative",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q226",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "euer Mann",
      "euren Mann",
      "eurem Mann"
    ],
    "answer": "euren Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": null,
    "forms": {
      "nom": "euer Mann",
      "acc": "euren Mann",
      "dat": "eurem Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q227",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "Ihr langer Kollege",
      "Ihren langen Kollegen",
      "Ihrem langen Kollegen"
    ],
    "answer": "Ihren langen Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": "lang",
    "forms": {
      "nom": "Ihr langer Kollege",
      "acc": "Ihren langen Kollegen",
      "dat": "Ihrem langen Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q228",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "mein Kollege",
      "meinen Kollegen",
      "meinem Kollegen"
    ],
    "answer": "meinem Kollegen",
    "case": "Dative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": null,
    "forms": {
      "nom": "mein Kollege",
      "acc": "meinen Kollegen",
      "dat": "meinem Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q229",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "deine gute Frau",
      "deiner guten Frau",
      "den gute Frau"
    ],
    "answer": "deiner guten Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dein",
    "adjective": "gut",
    "forms": {
      "nom": "deine gute Frau",
      "acc": "deine gute Frau",
      "dat": "deiner guten Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q230",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "seine Lehrerin",
      "seiner Lehrerin",
      "den Lehrerin"
    ],
    "answer": "seine Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "sein",
    "adjective": null,
    "forms": {
      "nom": "seine Lehrerin",
      "acc": "seine Lehrerin",
      "dat": "seiner Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "nominative",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q231",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "ihr moderner Kunde",
      "ihren modernen Kunden",
      "ihrem modernen Kunden"
    ],
    "answer": "ihren modernen Kunden",
    "case": "Accusative",
    "noun": {
      "word": "Kunde",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "ihr",
    "adjective": "modern",
    "forms": {
      "nom": "ihr moderner Kunde",
      "acc": "ihren modernen Kunden",
      "dat": "ihrem modernen Kunden"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q232",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "unser Kollege",
      "unseren Kollegen",
      "unserem Kollegen"
    ],
    "answer": "unseren Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "unser",
    "adjective": null,
    "forms": {
      "nom": "unser Kollege",
      "acc": "unseren Kollegen",
      "dat": "unserem Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q233",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "euer alter Student",
      "euren alten Studenten",
      "eurem alten Studenten"
    ],
    "answer": "eurem alten Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "euer",
    "adjective": "alt",
    "forms": {
      "nom": "euer alter Student",
      "acc": "euren alten Studenten",
      "dat": "eurem alten Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q234",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "Ihre Lehrerin",
      "Ihrer Lehrerin",
      "den Lehrerin"
    ],
    "answer": "Ihrer Lehrerin",
    "case": "Dative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "Ihr",
    "adjective": null,
    "forms": {
      "nom": "Ihre Lehrerin",
      "acc": "Ihre Lehrerin",
      "dat": "Ihrer Lehrerin"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "dative",
      "dative-verb",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q235",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "meine kleine Lehrerin",
      "meiner kleinen Lehrerin",
      "den kleine Lehrerin"
    ],
    "answer": "meine kleine Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "mein",
    "adjective": "klein",
    "forms": {
      "nom": "meine kleine Lehrerin",
      "acc": "meine kleine Lehrerin",
      "dat": "meiner kleinen Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "adjective",
      "nominative",
      "perfect",
      "possessive"
    ]
  },
  {
    "id": "q236",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "dieser Mann",
      "diesen Mann",
      "diesem Mann"
    ],
    "answer": "diesen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Mann",
      "acc": "diesen Mann",
      "dat": "diesem Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q237",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "jener nette Vater",
      "jenen netten Vater",
      "jenem netten Vater"
    ],
    "answer": "jenen netten Vater",
    "case": "Accusative",
    "noun": {
      "word": "Vater",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "nett",
    "forms": {
      "nom": "jener nette Vater",
      "acc": "jenen netten Vater",
      "dat": "jenem netten Vater"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q238",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "welcher Student",
      "welchen Studenten",
      "welchem Studenten"
    ],
    "answer": "welchem Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": null,
    "forms": {
      "nom": "welcher Student",
      "acc": "welchen Studenten",
      "dat": "welchem Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "dative",
      "dative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q239",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "diese wichtige Frau",
      "dieser wichtigen Frau",
      "den wichtige Frau"
    ],
    "answer": "dieser wichtigen Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": "wichtig",
    "forms": {
      "nom": "diese wichtige Frau",
      "acc": "diese wichtige Frau",
      "dat": "dieser wichtigen Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q240",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "jener Student",
      "jenen Studenten",
      "jenem Studenten"
    ],
    "answer": "jener Student",
    "case": "Nominative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": null,
    "forms": {
      "nom": "jener Student",
      "acc": "jenen Studenten",
      "dat": "jenem Studenten"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "demonstrative",
      "nominative",
      "perfect"
    ]
  },
  {
    "id": "q241",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "welcher teure Mann",
      "welchen teuren Mann",
      "welchem teuren Mann"
    ],
    "answer": "welchen teuren Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": "teuer",
    "forms": {
      "nom": "welcher teure Mann",
      "acc": "welchen teuren Mann",
      "dat": "welchem teuren Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q242",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "dieser Kollege",
      "diesen Kollegen",
      "diesem Kollegen"
    ],
    "answer": "diesen Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": null,
    "forms": {
      "nom": "dieser Kollege",
      "acc": "diesen Kollegen",
      "dat": "diesem Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q243",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "jene lange Schwester",
      "jener langen Schwester",
      "den lange Schwester"
    ],
    "answer": "jener langen Schwester",
    "case": "Dative",
    "noun": {
      "word": "Schwester",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "jener",
    "adjective": "lang",
    "forms": {
      "nom": "jene lange Schwester",
      "acc": "jene lange Schwester",
      "dat": "jener langen Schwester"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q244",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "welche Frau",
      "welcher Frau",
      "den Frau"
    ],
    "answer": "welcher Frau",
    "case": "Dative",
    "noun": {
      "word": "Frau",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "welcher",
    "adjective": null,
    "forms": {
      "nom": "welche Frau",
      "acc": "welche Frau",
      "dat": "welcher Frau"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "dative",
      "dative-verb",
      "demonstrative",
      "perfect"
    ]
  },
  {
    "id": "q245",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "diese gute Lehrerin",
      "dieser guten Lehrerin",
      "den gute Lehrerin"
    ],
    "answer": "diese gute Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "dieser",
    "adjective": "gut",
    "forms": {
      "nom": "diese gute Lehrerin",
      "acc": "diese gute Lehrerin",
      "dat": "dieser guten Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "adjective",
      "demonstrative",
      "nominative",
      "perfect"
    ]
  },
  {
    "id": "q246",
    "sentence": "Ich habe gestern ___ angerufen.",
    "choices": [
      "kein Mann",
      "keinen Mann",
      "keinem Mann"
    ],
    "answer": "keinen Mann",
    "case": "Accusative",
    "noun": {
      "word": "Mann",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "kein Mann",
      "acc": "keinen Mann",
      "dat": "keinem Mann"
    },
    "trigger": {
      "type": "verb",
      "text": "anrufen takes an Accusative object. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "kein",
      "perfect"
    ]
  },
  {
    "id": "q247",
    "sentence": "Ich habe ___ getroffen.",
    "choices": [
      "kein moderner Kollege",
      "keinen modernen Kollegen",
      "keinem modernen Kollegen"
    ],
    "answer": "keinen modernen Kollegen",
    "case": "Accusative",
    "noun": {
      "word": "Kollege",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "modern",
    "forms": {
      "nom": "kein moderner Kollege",
      "acc": "keinen modernen Kollegen",
      "dat": "keinem modernen Kollegen"
    },
    "trigger": {
      "type": "verb",
      "text": "treffen takes a direct object in the Accusative. The Perfekt tense does not change the case."
    },
    "tags": [
      "accusative",
      "accusative-verb",
      "adjective",
      "kein",
      "perfect"
    ]
  },
  {
    "id": "q248",
    "sentence": "Ich habe ___ eine Nachricht geschickt.",
    "choices": [
      "kein Student",
      "keinen Studenten",
      "keinem Studenten"
    ],
    "answer": "keinem Studenten",
    "case": "Dative",
    "noun": {
      "word": "Student",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "kein Student",
      "acc": "keinen Studenten",
      "dat": "keinem Studenten"
    },
    "trigger": {
      "type": "verb",
      "text": "schicken can take a Dative recipient: the person receiving the message is in the Dative."
    },
    "tags": [
      "dative",
      "dative-verb",
      "kein",
      "perfect"
    ]
  },
  {
    "id": "q249",
    "sentence": "Ich habe ___ geantwortet.",
    "choices": [
      "kein alter Arzt",
      "keinen alten Arzt",
      "keinem alten Arzt"
    ],
    "answer": "keinem alten Arzt",
    "case": "Dative",
    "noun": {
      "word": "Arzt",
      "gender": "masculine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": "alt",
    "forms": {
      "nom": "kein alter Arzt",
      "acc": "keinen alten Arzt",
      "dat": "keinem alten Arzt"
    },
    "trigger": {
      "type": "verb",
      "text": "antworten takes a Dative person."
    },
    "tags": [
      "adjective",
      "dative",
      "dative-verb",
      "kein",
      "perfect"
    ]
  },
  {
    "id": "q250",
    "sentence": "___ hat mir gestern geholfen.",
    "choices": [
      "keine Lehrerin",
      "keiner Lehrerin",
      "den Lehrerin"
    ],
    "answer": "keine Lehrerin",
    "case": "Nominative",
    "noun": {
      "word": "Lehrerin",
      "gender": "feminine",
      "number": "singular"
    },
    "determiner": "kein",
    "adjective": null,
    "forms": {
      "nom": "keine Lehrerin",
      "acc": "keine Lehrerin",
      "dat": "keiner Lehrerin"
    },
    "trigger": {
      "type": "subject",
      "text": "The missing noun is the subject, so it is in the Nominative."
    },
    "tags": [
      "kein",
      "nominative",
      "perfect"
    ]
  }
];
