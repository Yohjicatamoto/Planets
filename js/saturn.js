// Saturn page: tabs, like an old properties dialog.
// Clicking a tab shows its panel and hides the others.

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

function openTab(clickedTab) {
  // reset every tab and hide every panel
  tabs.forEach(function (tab) {
    tab.classList.remove("selected");
    tab.setAttribute("aria-selected", "false");
  });
  panels.forEach(function (panel) {
    panel.hidden = true;
  });

  // then show only the one that was clicked
  clickedTab.classList.add("selected");
  clickedTab.setAttribute("aria-selected", "true");
  document.getElementById(clickedTab.dataset.tab).hidden = false;
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    openTab(tab);
  });
});
