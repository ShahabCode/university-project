document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});
