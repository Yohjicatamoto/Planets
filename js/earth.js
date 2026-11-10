// Earth page: a pop-up message box with fun facts.
// "Show fun facts..." opens it, "Next fact" cycles through the list,
// and "OK", the x button or the Escape key closes it.

const funFacts = [
  "Earth is the densest planet in the solar system.",
  "Earth is not a perfect sphere. It bulges a little at the equator because it spins.",
  "Earth travels around the Sun at about 30 km every second.",
  "The highest point on Earth is Mount Everest at 8,849 m. The deepest is the Challenger Deep in the Pacific, nearly 11,000 m down.",
  "Earth's magnetic field shields us from the solar wind. It also causes the northern and southern lights.",
  "Earth's spin is very slowly getting slower, so days are getting longer by a tiny amount over time.",
  "Earth is the only planet not named after a Greek or Roman god."
];

let current = 0;

const overlay = document.getElementById("facts-overlay");
const factText = document.getElementById("fact-text");
const factCount = document.getElementById("fact-count");
const openBtn = document.getElementById("open-facts");
const nextBtn = document.getElementById("next-fact");
const okBtn = document.getElementById("close-facts");
const closeX = document.getElementById("close-x");

function showFact() {
  factText.textContent = funFacts[current];
  factCount.textContent = "Fact " + (current + 1) + " of " + funFacts.length;
}

function openDialog() {
  showFact();
  overlay.hidden = false;
  okBtn.focus();
}

function closeDialog() {
  overlay.hidden = true;
  openBtn.focus();
}

function nextFact() {
  // go to the next fact, and back to the first one after the last
  current = (current + 1) % funFacts.length;
  showFact();
}

openBtn.addEventListener("click", openDialog);
nextBtn.addEventListener("click", nextFact);
okBtn.addEventListener("click", closeDialog);
closeX.addEventListener("click", closeDialog);
closeX.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    closeDialog();
  }
});

// close with the keyboard too
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !overlay.hidden) {
    closeDialog();
  }
});

// clicking the dark area outside the box also closes it
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    closeDialog();
  }
});
