export function showLoadingScreen(location) {
  const screen = document.getElementById("loading-screen");
  const message = document.getElementById("loadingScreen__message");
  screen.style.display = "flex";
  message.textContent = `Die Wetterdaten werden für ${location} geladen...`;
}

export function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
}
