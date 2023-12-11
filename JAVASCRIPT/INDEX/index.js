let signupBtn = document.getElementById('signup-button');

signupBtn.addEventListener('click', function () {
    let signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        // flag for preventDefault
        let hasErrors = false;  
        // Input fields and error prompts
        let firstname = document.getElementById('firstname');
        let lastname = document.getElementById('lastname');
        let address = document.getElementById('address');
        let username = document.getElementById('username');
        let password = document.getElementById('password');

        let usernameError = document.getElementById('username-error');
        let firstnameError = document.getElementById('firstname-error');
        let lastnameError = document.getElementById('lastname-error');
        let passwordError = document.getElementById('password-error');
        let addressError = document.getElementById('address-error');

        // Patterns constraints
        let numberPattern = /^\D+$/;
        let passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

        // Error prompts effects and message
        function errorPrompt(input, errorElement, errorStatement) {
            let styleInput = input.style.boxShadow = "0 0 4px red";
            styleInput += "; " + (input.style.outline = "none");

            let displayMessage = errorElement.textContent = errorStatement;

            hasErrors = true;  // Set flag to indicate errors

            return { styleInput, displayMessage };
        }

        // Remove error prompts effects and message
        function removeErrorPrompt(input, errorElement) {
            let styleInput = input.style.boxShadow = "0 0 1px rgb(0, 0, 0)";
            styleInput += "; " + (input.style.outline = "");

            let displayMessage = errorElement.textContent = "";

            return { styleInput, displayMessage };
        }

        // Validation logic for each field
        if (username.value === "") {
            errorPrompt(username, usernameError, "Username must not be empty");
        } else if (username.value.length < 4) {
            errorPrompt(username, usernameError, "Username must contain at least 4 characters.");
        } else {
            removeErrorPrompt(username, usernameError);
        }

        if (password.value === "") {
            errorPrompt(password, passwordError, "Password must not be empty.");
        } else if (!passwordPattern.test(password.value)) {
            errorPrompt(password, passwordError, "Password must contain at least one special character, one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.");
        } else {
            removeErrorPrompt(password, passwordError);
        }

        if (firstname.value === "") {
            errorPrompt(firstname, firstnameError, "Firstname must not be empty.");
        } else if (!numberPattern.test(firstname.value)) {
            errorPrompt(firstname, firstnameError, "Firstname must not contain numbers.");
        } else if (specialCharacterPattern.test(firstname.value)) {
            errorPrompt(firstname, firstnameError, "Firstname must not contain special characters.");
        } else {
            removeErrorPrompt(firstname, firstnameError);
        }

        if (lastname.value === "") {
            errorPrompt(lastname, lastnameError, "Lastname must not be empty.");
        } else if (specialCharacterPattern.test(lastname.value)) {
            errorPrompt(lastname, lastnameError, "Lastname must not contain special characters.");
        } else if (!numberPattern.test(lastname.value)) {
            errorPrompt(lastname, lastnameError, "Last must not contain numbers.");
        } else {
            removeErrorPrompt(lastname, lastnameError);
        }

        if (address.value === "") {
            errorPrompt(address, addressError, "Address must not be empty.");
        } else {
            removeErrorPrompt(address, addressError);
        }

        if (hasErrors) {
            event.preventDefault();
        } else {
          hasErrors = false;
        }
    });
});

let peekPassword = document.getElementById('toggle-password');
let password = document.getElementById('password');
let passwordImg = document.getElementById('password-image');

peekPassword.addEventListener('click', function () {
    if (password.type === 'password') {
        password.type = 'text';
        passwordImg.src = 'IMAGES/INDEX/close-eye.png';
    } else {
        password.type = 'password';
        passwordImg.src = 'IMAGES/INDEX/peek-password.png';
    }
});
