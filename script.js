function toggleDarkMode() {
  if (document.body.style.cssText.includes("rgba(0, 0, 0, 0.75)")) {
    document.body.style.setProperty("--color2", "rgba(72, 169, 166, 1)");
    document.body.style.setProperty("--color3", "rgba(228, 223, 218, 1)");
  }
  else {
    document.body.style.setProperty("--color2", "rgba(0, 0, 0, 0.75)");
    document.body.style.setProperty("--color3", "rgba(0, 0, 0, 0.5)")
  }
}