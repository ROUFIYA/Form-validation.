const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');
const errorMessages1 = document.getElementById('errorMessages1');
const errorMessages2 = document.getElementById('errorMessages2');
const errorMessages3 = document.getElementById('errorMessages3');
const errorMessages4 = document.getElementById('errorMessages4');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

  

    if (name === '' || name <= 5) {
        document.getElementById('errorMessages').innerHTML='Please enter your name atleast 5 character';
    }else{
        document.getElementById('errorMessages').innerHTML='';
    }

    if (email === '') {
        document.getElementById('errorMessages1').innerHTML='Please enter your email address';
    }  if (!validateEmail(email)) {
        document.getElementById('errorMessages1').innerHTML='Please enter a valid email address';
    }else{
        document.getElementById('errorMessages1').innerHTML='';
    }

    if (phone === '') {
        document.getElementById('errorMessages2').innerHTML='Please enter your phone number';
    }  if (!validatePhone(phone)) {
        document.getElementById('errorMessages2').innerHTML='Please enter a valid phone number';
    }else{
        document.getElementById('errorMessages2').innerHTML='';
    }

    if (password === '') {
        document.getElementById('errorMessages3').innerHTML='Please enter your password';
    }  if (password.length < 8) {
       document.getElementById('errorMessages3').innerHTML='Password must be at least 8 characters long';
    }else{
        document.getElementById('errorMessages3').innerHTML='';
    }

    if (confirmPassword === '') {
        document.getElementById('errorMessages4').innerHTML='Please confirm your password';
    }  if (confirmPassword !== password) {
        document.getElementById('errorMessages4').innerHTML='Passwords do not match';
    }else{
        document.getElementById('errorMessages4').innerHTML='';
    }

    if (errors.length > 0) {
        errorMessages.innerText = errors.join('\n');
    } else {
        // Form is valid, you can submit it to the server
        console.log('Form is valid');
    }
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}
