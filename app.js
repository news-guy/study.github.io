// DOM Elements
const flashcardElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const startButton = document.getElementById("start-btn");
const flipButton = document.getElementById("flip-btn");
const nextButton = document.getElementById("next-btn");
const incorrectButton = document.getElementById("incorrect-btn");
const correctButton = document.getElementById("correct-btn");
const ratingButtons = document.getElementById("rating-buttons");
const currentCardElement = document.getElementById("current-card");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

// App State
let currentIndex = -1;
let isStarted = false;
let correctCount = 0;
let incorrectCount = 0;
let deck = [];

// Shuffle the deck (Fisher-Yates algorithm)
function shuffleDeck(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Initialize the app
function init() {
  // Reset state
  currentIndex = -1;
  isStarted = false;
  correctCount = 0;
  incorrectCount = 0;

  // Copy the flashcards array to our deck
  deck = [...flashcards];

  // Update UI
  updateStats();

  // Reset card display
  questionElement.textContent = "Click 'Start' to begin studying!";
  answerElement.textContent = "";

  // Reset buttons
  startButton.disabled = false;
  flipButton.disabled = true;
  nextButton.disabled = true;
  ratingButtons.style.display = "none";

  // Reset card flip
  flashcardElement.classList.remove("flipped");
}

// Start the study session
function startStudy() {
  isStarted = true;
  startButton.disabled = true;
  deck = shuffleDeck([...deck]);
  currentIndex = 0;
  loadCard();
}

// Load the current card
function loadCard() {
  if (currentIndex >= 0 && currentIndex < deck.length) {
    const card = deck[currentIndex];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;

    // Reset card to question side
    flashcardElement.classList.remove("flipped");

    // Update buttons
    flipButton.disabled = false;
    nextButton.disabled = true;
    ratingButtons.style.display = "none";

    // Update stats
    updateStats();
  } else {
    // End of deck
    questionElement.textContent = "You've completed all cards!";
    answerElement.textContent = `Final Score: ${correctCount} correct, ${incorrectCount} incorrect`;
    flipButton.disabled = true;
    nextButton.disabled = true;
    startButton.disabled = false;
    startButton.textContent = "Restart";
  }
}

// Flip the card
function flipCard() {
  flashcardElement.classList.toggle("flipped");

  if (flashcardElement.classList.contains("flipped")) {
    // Card is now showing the answer
    flipButton.disabled = true;
    ratingButtons.style.display = "flex";
  } else {
    // Card is showing the question
    flipButton.disabled = false;
    nextButton.disabled = true;
    ratingButtons.style.display = "none";
  }
}

// Move to the next card
function nextCard() {
  currentIndex++;
  loadCard();
}

// Mark current card as correct
function markCorrect() {
  correctCount++;
  nextButton.disabled = false;
  ratingButtons.style.display = "none";
  updateStats();
}

// Mark current card as incorrect
function markIncorrect() {
  incorrectCount++;
  nextButton.disabled = false;
  ratingButtons.style.display = "none";
  updateStats();
}

// Update the statistics display
function updateStats() {
  currentCardElement.textContent = `Card: ${currentIndex + 1}/${deck.length}`;
  correctCountElement.textContent = `Correct: ${correctCount}`;
  incorrectCountElement.textContent = `Incorrect: ${incorrectCount}`;
}

// Event Listeners
startButton.addEventListener("click", startStudy);
flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
correctButton.addEventListener("click", markCorrect);
incorrectButton.addEventListener("click", markIncorrect);

// Initialize the app when the page loads
document.addEventListener("DOMContentLoaded", init);
