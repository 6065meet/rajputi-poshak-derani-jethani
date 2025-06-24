// Simple page loader fade-out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
  }, 500); // delay for smoother experience
});
