export function showLoadingScreen(location) {
  const screen = document.getElementById("loading-screen");
  const message = document.getElementById("loadingScreen__message");
  const spinner = document.getElementById("loadingScreen__spinner");
  screen.style.display = "flex";
  message.textContent = `Die Wetterdaten werden für ${location} geladen...`;
  spinner.style.display = "flex";
}

export function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
}
