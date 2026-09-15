# Kasus — German Case Trainer

A small static web app for practising **Nominative, Accusative and Dative** at approximately A2.1–A2.2 level.

## Current status

This is the first MVP scaffold. It contains the complete interaction model and 20 seed questions. The production question bank will be expanded to roughly 250 carefully reviewed questions.

## Features already implemented

- Three answer cards
- Immediate correct/incorrect feedback
- English explanations
- Automatic explanations from question metadata
- Case shown after answering
- Optional gender hint before answering
- LocalStorage progress
- Accuracy tracking
- Random / Mistakes / Unseen practice modes
- Reset progress
- Optional full declension table
- Responsive mobile layout

## Run locally

No build step is required. Because the app uses ES modules, serve the folder with a local static server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The project is intentionally static and can be hosted with GitHub Pages.

## Next steps

1. Review the interaction and visual design.
2. Finalize the question data schema and automatic grammar explanation rules.
3. Build and validate the full ~250-question bank.
4. Add stronger validation for duplicate/ambiguous answer cards.
5. Configure GitHub Pages.
