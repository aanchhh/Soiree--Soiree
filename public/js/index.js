// fetch ("https://apis.google.com/js/platform.js?onload=renderButton");

// function onSuccess(googleUser) {
//     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   }
//   function onFailure(error) {
//     console.log(error);
//   }
//   function renderButton() {
//     gapi.signin2.render('my-signin2', {
//       'scope': 'profile email',
//       'width': 240,
//       'height': 50,
//       'longtitle': true,
//       'theme': 'dark',
//       'onsuccess': onSuccess,
//       'onfailure': onFailure
//     });
//   }
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.registration-form input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.previousElementSibling.classList.remove('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Form submission for registration
    const registrationForm = document.querySelector('.registration-form');

    registrationForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            username,
            email,
            password
        };

        try {
            // Send registration data to the backend API (assuming the URL is '/api/register')
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            // Check if registration was successful
            if (response.ok) {
                const data = await response.json();
                alert('Registration successful!');
                // Optionally, redirect to another page or update UI
                window.location.href = './you.html'; // Redirect to "You" page after registration
            } else {
                // Handle errors if the registration fails
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            // Handle network errors or other unexpected issues
            console.error('Error occurred during registration:', error);
            alert('An error occurred during registration. Please try again.');
        }
    });
});
