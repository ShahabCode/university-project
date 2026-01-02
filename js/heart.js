const hearts = document.querySelectorAll('#heart');

hearts.forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('.icon');
    if(icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid'); // قلب پر
      icon.style.color = 'var(--md-sys-color-error)'; // رنگ قرمز
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular'); // قلب توخالی
      icon.style.color = 'var(--md-sys-color-on-surface)'; // رنگ اولیه
    }
  });
});
