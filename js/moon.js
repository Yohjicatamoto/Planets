// Moon page: phase viewer.
// The slider goes from day 0 to day 29.5 of the lunar cycle.
// A dark circle slides across the bright Moon to make the phase:
//   day 0      -> dark circle covers the Moon (new Moon)
//   day 14.75  -> dark circle fully moved off (full Moon)
//   day 29.5   -> dark circle back over the Moon from the other side

const CYCLE = 29.5;

const slider = document.getElementById("phase-slider");
const shadow = document.getElementById("moon-shadow");
const dayLabel = document.getElementById("day-label");
const phaseName = document.getElementById("phase-name");

function getPhaseName(day) {
  if (day < 1 || day > 28.5) return "New Moon";
  if (day < 6.5) return "Waxing Crescent";
  if (day < 8.5) return "First Quarter";
  if (day < 13.75) return "Waxing Gibbous";
  if (day < 15.75) return "Full Moon";
  if (day < 21) return "Waning Gibbous";
  if (day < 23) return "Last Quarter";
  return "Waning Crescent";
}

function updatePhase() {
  const day = Number(slider.value);
  const half = CYCLE / 2;
  let offset;

  if (day <= half) {
    // waxing: shadow slides off to the left
    offset = -(day / half) * 100;
  } else {
    // waning: shadow comes back in from the right
    offset = ((CYCLE - day) / half) * 100;
  }

  shadow.style.transform = "translateX(" + offset + "%)";
  dayLabel.textContent = day;
  phaseName.textContent = getPhaseName(day);
}

slider.addEventListener("input", updatePhase);
updatePhase();
