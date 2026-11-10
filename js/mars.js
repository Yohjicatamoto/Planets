// Mars page: "What would you weigh on Mars?"
// Mars gravity is about 38% of Earth's, so weight on Mars = weight x 0.38

const MARS_GRAVITY = 0.38;

const weightInput = document.getElementById("weight-input");
const unitSelect = document.getElementById("weight-unit");
const weighBtn = document.getElementById("weigh-btn");
const output = document.getElementById("weight-output");

function calculateWeight() {
  const earthWeight = Number(weightInput.value);
  const unit = unitSelect.value;

  // check the input before doing any math
  if (weightInput.value === "" || earthWeight <= 0) {
    output.textContent = "> please enter a weight above 0_";
    return;
  }

  const marsWeight = (earthWeight * MARS_GRAVITY).toFixed(1);
  const lighter = (earthWeight - marsWeight).toFixed(1);

  output.textContent =
    "> on Mars you would weigh " + marsWeight + " " + unit +
    " (" + lighter + " " + unit + " lighter)_";
}

weighBtn.addEventListener("click", calculateWeight);

// pressing Enter in the box works too
weightInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateWeight();
  }
});
