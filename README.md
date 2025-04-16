# Super Simple Flashcards

A lightweight web application for studying flashcards from "Robbins Basic Pathology 10th Edition".

## Features

- Simple, clean interface
- Flip cards to reveal answers
- Track correct and incorrect responses
- Randomized card order for better learning
- No installation required, runs in any browser

## How to Use

1. Open `index.html` in your web browser
2. Click the "Start" button to begin studying
3. Read the question on the front of the card
4. Click "Flip Card" to reveal the answer
5. Honestly assess your knowledge by clicking either:
   - "Correct" if you knew the answer
   - "Incorrect" if you didn't know or were partially right
6. Click "Next Card" to move to the next question
7. Continue until you've gone through all the cards
8. See your final score and click "Restart" to begin again

## Technical Details

This application is built using:

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

All data is stored in memory and will reset when you refresh the page.

## Customization

To add or modify flashcards, edit the `flashcards.js` file. Each card follows this format:

```javascript
{
  "question": "Your question here?",
  "answer": "The answer to the question."
}
```

## License

This project is open source and available for personal educational use.
