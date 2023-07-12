const quizData = [{
  question: "What is the full form of HTML?",
  options: ["Hyper-text Module Load", "Hyper-text Markup Language", "Hello To My World", "Hyper-Link Markup Language"],
  answer: 1
},{
  question: "What is the full form of CSS?",
  options: ["Cascading Style Sheet", "Cascading Service Sheet", "Corresponding Style Sheet", "Corresponding Service Sheet"],
  answer: 0
},{
  question: "What is the full form of DOM",
  options: ["Document Object Machine", "Document Object Model", "Data Object Model", "Document Opposite Machine"],
  answer: 1
},{
  question: "In which year javascript was introduced?",
  options: ["1990", "1992", "1994", "1995"],
  answer: 3
},{
  question: "What was the old name of Javascript?",
  options: ["ECMAScript", "LiveSheet", "LiveScript", "JQuery"],
  answer: 2
}];



let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");
const leaderboardElement = document.getElementById("leaderboard");
const resultElement = document.getElementById("result");

// Initialize the quiz
function initializeQuiz() {
  loadQuestion();
  submitButton.addEventListener("click", submitAnswer);
}

// Load the current question and options
function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.innerHTML = currentQuiz.question;

  optionsElement.innerHTML = "";
  currentQuiz.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.innerHTML = option;
    optionElement.dataset.index = index; // Store the index as a data attribute
    optionElement.addEventListener("click", () => selectOption(index));
    optionsElement.appendChild(optionElement);
  });
}

// Select an option
function selectOption(index) {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("selected"));
  options[index].classList.add("selected");
  options[index].style.backgroundColor = "#50DBB4";
  options[index].style.color = "#000";
}

// Submit the selected answer
function submitAnswer() {
  const selectedOption = document.querySelector(".option.selected");
  
  
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const selectedAnswer = parseInt(selectedOption.dataset.index);
  const currentQuiz = quizData[currentQuestion];

  if (selectedAnswer === currentQuiz.answer) {
    correctAnswers++;
    showPopup(true);
  } else {
    incorrectAnswers++;
    showPopup(false);
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showLeaderboard();
  }
}

// Show popup for right/wrong answers
function showPopup(isCorrect) {
  popup.innerHTML = isCorrect ? "Correct!" : "Wrong!";
  popupContainer.style.display = "flex";

  setTimeout(() => {
    popupContainer.style.display = "none";
  }, 1000);
}

// Generate leaderboard
function showLeaderboard() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";

  leaderboardElement.innerHTML = "";
  quizData.forEach((quiz) => {
    const questionResult = document.createElement("div");
    questionResult.classList.add("question-result");
    questionResult.innerHTML = quiz.question + " - ";
    if (quiz.answer === 1) {
      questionResult.innerHTML += "Correct";
    } else {
      questionResult.innerHTML += "Incorrect";
    }
    leaderboardElement.appendChild(questionResult);
  });

  resultElement.innerHTML = `Correct Answers: ${correctAnswers}<br>Incorrect Answers: ${incorrectAnswers}`;
  resultElement.style.display = "block";
}

// Initialize the quiz when the page loads
initializeQuiz();
