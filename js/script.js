// 1. To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove();
    list.appendChild(li);
    input.value = "";
  }
}

// 2. Stopwatch
let stopwatchInterval;
let [seconds, minutes, hours] = [0, 0, 0];
function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("stopwatch").textContent =
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
function startWatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}
function stopWatch() {
  clearInterval(stopwatchInterval);
}
function resetWatch() {
  clearInterval(stopwatchInterval);
  [seconds, minutes, hours] = [0, 0, 0];
  document.getElementById("stopwatch").textContent = "00:00:00";
}

// 3. Background Color Changer
function changeColor() {
  const hex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  document.body.style.backgroundColor = hex;
  document.getElementById("colorCode").textContent = hex.toUpperCase();
}

// 4. Password Generator
function generatePassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  document.getElementById("passwordDisplay").value = password;
}

// 5. Calculator
function calcPress(val) {
  document.getElementById("calcDisplay").value += val;
}
function calculate() {
  try {
    document.getElementById("calcDisplay").value = eval(
      document.getElementById("calcDisplay").value
    );
  } catch {
    document.getElementById("calcDisplay").value = "Error";
  }
}
function clearCalc() {
  document.getElementById("calcDisplay").value = "";
}

// 6. Quiz App
const quizData = [
  { q: "What is 2 + 2?", o: ["3", "4", "5"], a: 1 },
  { q: "Capital of France?", o: ["London", "Berlin", "Paris"], a: 2 },
];
let currentQuiz = 0;
function loadQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML =
    `<p>${quizData[currentQuiz].q}</p>` +
    quizData[currentQuiz].o
      .map(
        (opt, i) =>
          `<button onclick="checkAnswer(${i})">${opt}</button>`
      )
      .join(" ");
}
function checkAnswer(i) {
  if (i === quizData[currentQuiz].a) alert("Correct!");
  else alert("Wrong!");
}
function nextQuestion() {
  currentQuiz = (currentQuiz + 1) % quizData.length;
  loadQuiz();
}
window.onload = loadQuiz;

// 7. Typing Speed Test
let startTime;
function checkTyping() {
  const original = document.getElementById("textDisplay").textContent;
  const typed = document.getElementById("typingArea").value;
  if (typed.length === 1) startTime = new Date();
  if (typed === original) {
    const timeTaken = (new Date() - startTime) / 1000;
    const wpm = Math.round((typed.length / 5) / (timeTaken / 60));
    document.getElementById("speedResult").textContent = `Your speed: ${wpm} WPM`;
  }
}

// 8. Clock
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}, 1000);

// 9. Weather App (dummy data)
function getWeather() {
  const city = document.getElementById("cityInput").value;
  document.getElementById("weatherResult").textContent = `${city}: 30°C (Sunny)`;
}

// 10. Note App
function saveNote() {
  const input = document.getElementById("noteInput");
  const list = document.getElementById("noteList");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}

// Explanation texts
const explainText = {
  todo: "To-Do List uses input field to add items. Click to remove.",
  stopwatch: "Stopwatch uses setInterval to count time every second.",
  color: "Generates HEX color and applies it to body background.",
  password: "Password built using random charset characters.",
  calculator: "Calculator uses eval() to solve arithmetic input.",
  quiz: "Quiz app checks selected answer and gives feedback.",
  typing: "Typing test compares typed text and calculates WPM.",
  clock: "Clock updates current time using setInterval.",
  weather: "Fake weather fetch, displays city and static weather.",
  note: "Note app saves typed notes in a list dynamically."
};

function showExplanation(key) {
  alert(explainText[key]);
}
