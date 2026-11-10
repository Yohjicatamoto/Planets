// Venus page: temperature comparison with a unit switch.
// Every bar and label stores its temperature in Celsius (data-c).
// The radio buttons pick which unit to show, and the bars are
// sized compared to the hottest value (the surface of Venus).

const unitRadios = document.querySelectorAll('input[name="unit"]');
const bars = document.querySelectorAll(".bar-fill");
const values = document.querySelectorAll(".temp-value");

const HOTTEST_C = 464;

function convert(celsius, unit) {
  if (unit === "F") return celsius * 9 / 5 + 32;
  if (unit === "K") return celsius + 273.15;
  return celsius;
}

function getUnit() {
  return document.querySelector('input[name="unit"]:checked').value;
}

function updateTemperatures() {
  const unit = getUnit();
  const symbol = unit === "K" ? " K" : " °" + unit;

  values.forEach(function (label) {
    const celsius = Number(label.dataset.c);
    label.textContent = Math.round(convert(celsius, unit)) + symbol;
  });

  bars.forEach(function (bar) {
    const celsius = Number(bar.dataset.c);
    // compare in the chosen unit so the bars change too
    const percent = (convert(celsius, unit) / convert(HOTTEST_C, unit)) * 100;
    bar.style.width = percent + "%";
  });
}

unitRadios.forEach(function (radio) {
  radio.addEventListener("change", updateTemperatures);
});

updateTemperatures();
