document.addEventListener('DOMContentLoaded', () => {
  // صبر کردن تا هدر لود شود
  const headerInterval = setInterval(() => {
    const menus = document.querySelectorAll('.menu');
    if (menus.length > 0) {
      clearInterval(headerInterval);

      menus.forEach(menu => {
        const hamburger = menu.querySelector('.hamburger');
        const dropdown = menu.querySelector('.dropdown');

        hamburger.addEventListener('click', () => {
          dropdown.classList.toggle('open');
        });
      });
    }
  }, 100);
});
