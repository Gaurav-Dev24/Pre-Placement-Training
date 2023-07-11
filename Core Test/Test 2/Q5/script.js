const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    // Form is valid, perform further actions (e.g., submit data)
    console.log('Form submitted successfully!');
    // Add your code here to submit the form data to the server or perform other actions
  }
});

function validateForm() {
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const age = document.getElementById('age');
  const gender = document.getElementById('gender');
  const birthdate = document.getElementById('birthdate');
  const color = document.getElementById('color');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const ageError = document.getElementById('ageError');
  const genderError = document.getElementById('genderError');
  const birthdateError = document.getElementById('birthdateError');
  const colorError = document.getElementById('colorError');

  // Reset previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  ageError.textContent = '';
  genderError.textContent = '';
  birthdateError.textContent = '';
  colorError.textContent = '';

  // Name validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  // Phone validation
  if (phone.value.trim() === '') {
    phoneError.textContent = 'Phone number is required';
    isValid = false;
  } else if (!isValidPhone(phone.value.trim())) {
    phoneError.textContent = 'Invalid phone number format';
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  // Age validation
  if (age.value.trim() === '') {
    ageError.textContent = 'Age is required';
    isValid = false;
  } else if (!isValidAge(age.value.trim())) {
    ageError.textContent = 'Invalid age';
    isValid = false;
  }

  // Gender validation
  if (gender.value === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  }

  // Birthdate validation
  if (birthdate.value.trim() === '') {
    birthdateError.textContent = 'Date of birth is required';
    isValid = false;
  }

  // Color validation
  if (color.value.trim() === '') {
    colorError.textContent = 'Favorite color is required';
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // Simple email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  // Simple phone number validation regex pattern
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function isValidAge(age) {
  // Age validation: Must be a number between 18 and 100
  const parsedAge = parseInt(age, 10);
  return !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 100;
}
