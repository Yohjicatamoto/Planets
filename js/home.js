// Home page: Start / Stop buttons for the orbit model.
// The orbits are CSS animations. Adding the "paused" class
// to the box freezes them, removing it lets them move again.

const orbitBox = document.getElementById("orbit-box");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

function startOrbits() {
  orbitBox.classList.remove("paused");
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopOrbits() {
  orbitBox.classList.add("paused");
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", startOrbits);
stopBtn.addEventListener("click", stopOrbits);
