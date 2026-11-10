// Mercury page: "Read more" sections.
// Each button shows or hides the text box right after it,
// and swaps its little sign between + and -.

const moreButtons = document.querySelectorAll(".more-btn");

moreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const text = document.getElementById(button.getAttribute("aria-controls"));
    const sign = button.querySelector(".sign");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    text.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
    sign.textContent = isOpen ? "+" : "-";
  });
});
