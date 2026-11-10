// Jupiter page: age converter.
// One Jupiter year is about 11.86 Earth years.

const JUPITER_YEAR = 11.86;

const ageInput = document.getElementById("age-input");
const ageBtn = document.getElementById("age-btn");
const output = document.getElementById("age-output");

function convertAge() {
  const earthAge = Number(ageInput.value);

  if (ageInput.value === "" || earthAge < 0) {
    output.textContent = "Please enter your age in Earth years.";
    return;
  }

  const jupiterAge = earthAge / JUPITER_YEAR;

  // how long until the next birthday on Jupiter?
  const nextBirthday = Math.ceil(jupiterAge + 0.0001);
  const yearsToWait = (nextBirthday * JUPITER_YEAR - earthAge).toFixed(1);

  output.innerHTML =
    '<span class="age-big">' + jupiterAge.toFixed(2) + " Jupiter years old</span><br>" +
    "Your next Jupiter birthday (number " + nextBirthday + ") is in about " +
    yearsToWait + " Earth years.";
}

ageBtn.addEventListener("click", convertAge);

ageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertAge();
  }
});
