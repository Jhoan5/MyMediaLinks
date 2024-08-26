document.addEventListener("click", (event) => {
  if (event.target.matches("li, li div")) {
    const url = event.target.dataset.url;
    if (url) {
      window.open(url, "_blank");
    }
  }
});
document.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
