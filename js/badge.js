let count = 0;
const badge = document.getElementById("cartBadge");
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    badge.textContent = count;
  });
});
