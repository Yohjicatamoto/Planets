// Sun page: how long does sunlight take to reach each planet?
// Each <option> stores the planet's average distance in AU.
// Light covers 1 AU (about 150 million km) in about 499 seconds.

const SECONDS_PER_AU = 499;

const planetSelect = document.getElementById("planet-select");
const calcBtn = document.getElementById("calc-btn");
const output = document.getElementById("light-output");

// turn a number of seconds into "x hours y minutes" or "x minutes y seconds"
function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.round(totalSeconds % 60);

  if (hours > 0) {
    return hours + " h " + minutes + " min";
  }
  return minutes + " min " + seconds + " s";
}

function showLightTime() {
  const distanceAU = Number(planetSelect.value);
  const planetName = planetSelect.options[planetSelect.selectedIndex].text;
  const seconds = distanceAU * SECONDS_PER_AU;
  const km = Math.round(distanceAU * 149.6);

  output.innerHTML =
    "Sunlight takes <strong>" + formatTime(seconds) + "</strong> to reach " +
    planetName + ", about " + km.toLocaleString() + " million km away.";
}

calcBtn.addEventListener("click", showLightTime);
planetSelect.addEventListener("change", showLightTime);
