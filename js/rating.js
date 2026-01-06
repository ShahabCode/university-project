document.addEventListener('DOMContentLoaded', () => {
  // همه rating div ها
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');

    stars.forEach((star, idx) => {
      star.addEventListener('click', () => {
        // حذف کلاس active از همه
        stars.forEach(s => s.classList.remove('active'));

        // اضافه کردن active به این ستاره و قبل از آن
        for (let i = 0; i <= idx; i++) {
          stars[i].classList.add('active');
        }
      });
    });
  });
});
