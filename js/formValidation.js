const form = document.querySelector('.form');

const requiredFields = form.querySelectorAll('[required]');
const emailFields = form.querySelectorAll('input[type="email"]');
const passwordFields = form.querySelectorAll('input[type="password"][name="password"]');
const phoneFields = form.querySelectorAll('input[type="tel"]');
const nameFields = form.querySelectorAll('input[name="name"], input[name="fullname"]');

/* ================= BLUR EVENTS ================= */

requiredFields.forEach(field =>
  field.addEventListener('blur', () => validateRequired(field))
);

emailFields.forEach(field =>
  field.addEventListener('blur', () => validateEmail(field))
);

passwordFields.forEach(field =>
  field.addEventListener('blur', () => validatePassword(field))
);

phoneFields.forEach(field =>
  field.addEventListener('blur', () => validatePhone(field))
);

nameFields.forEach(field =>
  field.addEventListener('blur', () => validateName(field))
);

/* ================= SUBMIT ================= */

form.addEventListener('submit', (e) => {
  let hasError = false;

  requiredFields.forEach(field => {
    if (!validateRequired(field)) hasError = true;
  });

  emailFields.forEach(field => {
    if (!validateEmail(field)) hasError = true;
  });

  passwordFields.forEach(field => {
    if (!validatePassword(field)) hasError = true;
  });

  phoneFields.forEach(field => {
    if (!validatePhone(field)) hasError = true;
  });

  nameFields.forEach(field => {
    if (!validateName(field)) hasError = true;
  });

  if (hasError) {
    e.preventDefault(); // ⛔ جلوگیری از submit
  }
});

/* ================= VALIDATORS ================= */

function validateRequired(field) {
  if (field.value.trim() === '') {
    return setError(field, 'این فیلد الزامی است');
  }
  clearErrorByField(field);
  return true;
}

function validateEmail(field) {
  // اگر خالی است، required خودش رسیدگی می‌کند
  if (field.value.trim() === '') return true;

  const wrapper = field.closest('.form-field');
  const errorEl = wrapper.querySelector('.field-error');
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(field.value)) {
    wrapper.classList.add('invalid');
    errorEl.textContent = 'ایمیل وارد شده معتبر نیست';
    return false;
  }

  clearError(wrapper, errorEl);
  return true;
}


function validatePassword(field) {
  if (field.value.length < 8) {
    return setError(field, 'رمز عبور باید حداقل ۸ کاراکتر باشد');
  }
  clearErrorByField(field);
  return true;
}

function validatePhone(field) {
  // ⛔ اگر خالی است، required رسیدگی می‌کند
  if (field.value.trim() === '') return true;

  const wrapper = field.closest('.form-field');
  const errorEl = wrapper.querySelector('.field-error');

  const pattern = /^09\d{9}$/;

  if (!pattern.test(field.value)) {
    wrapper.classList.add('invalid');
    errorEl.textContent = 'شماره موبایل معتبر نیست';
    return false;
  }

  clearError(wrapper, errorEl);
  return true;
}


function validateName(field) {
  if (field.value.trim().length < 3) {
    return setError(field, 'حداقل ۳ کاراکتر وارد کنید');
  }
  clearErrorByField(field);
  return true;
}

/* ================= HELPERS ================= */

function setError(field, message) {
  const wrapper = field.closest('.form-field');
  const errorEl = wrapper.querySelector('.field-error');

  wrapper.classList.add('invalid');
  errorEl.textContent = message;
  return false;
}

function clearErrorByField(field) {
  const wrapper = field.closest('.form-field');
  const errorEl = wrapper.querySelector('.field-error');

  wrapper.classList.remove('invalid');
  errorEl.textContent = '';
}
