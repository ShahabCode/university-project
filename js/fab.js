const goTopBtn = document.getElementById("goTopBtn");

if (goTopBtn) {
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
