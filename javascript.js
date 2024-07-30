document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the email input value
    const emailInput = document.getElementById('inputEmail4');
    const emailValue = emailInput.value;
    const emailError = document.getElementById('emailError');

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.style.display = 'none';
    emailError.textContent = '';

    // Validate email
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
    } else {
      alert('Form submitted successfully!');
    }
  });
  function sign() {
    alert("Form submitted successfully");
  }