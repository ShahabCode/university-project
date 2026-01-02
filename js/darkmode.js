document.addEventListener('DOMContentLoaded', () => {
  // اضافه کردن کلاس dark اگر در localStorage فعال باشد
  if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark');
  }

  // بررسی وجود سوییچ در صفحه فعلی
  const darkSwitch = document.getElementById('darkModeSwitch');
  if(darkSwitch){
    // هماهنگ کردن وضعیت سوییچ
    darkSwitch.checked = localStorage.getItem('darkMode') === 'enabled';

    // وقتی کاربر تغییر داد
    darkSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', darkSwitch.checked ? 'enabled' : 'disabled');
    });
  }
});
