// Uranus page: true or false quiz.
// Each question stores its answer in data-answer. When a button is
// clicked we check it, show Correct / Wrong, lock that question,
// and update the score.

const questions = document.querySelectorAll(".question");
const scoreText = document.getElementById("score");
const resetBtn = document.getElementById("reset-quiz");

let score = 0;
let answered = 0;

function updateScore() {
  scoreText.textContent = "Score: " + score + " / " + questions.length;
  if (answered === questions.length) {
    scoreText.textContent += score === questions.length ? " - perfect!" : " - done";
  }
}

questions.forEach(function (question) {
  const buttons = question.querySelectorAll("button");
  const feedback = question.querySelector(".feedback");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const isRight = button.dataset.choice === question.dataset.answer;

      feedback.textContent = isRight ? "Correct" : "Wrong";
      feedback.className = "feedback " + (isRight ? "right" : "wrong");

      // lock the question so it can only be answered once
      buttons.forEach(function (b) {
        b.disabled = true;
      });
      button.classList.add("pressed");

      if (isRight) score++;
      answered++;
      updateScore();
    });
  });
});

// put everything back to the start
resetBtn.addEventListener("click", function () {
  questions.forEach(function (question) {
    question.querySelectorAll("button").forEach(function (b) {
      b.disabled = false;
      b.classList.remove("pressed");
    });
    const feedback = question.querySelector(".feedback");
    feedback.textContent = "";
    feedback.className = "feedback";
  });
  score = 0;
  answered = 0;
  updateScore();
});
