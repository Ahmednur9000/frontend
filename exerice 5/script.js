document.addEventListener("DOMContentLoaded" , function() {
    document.getElementById("contactForm").addEventListener("submit" , function(event) {
        event.preventDefault();

        //get input values
        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();
        let password = document.getElementById("password").value.trim();

        // Get error message elements
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let ageError = document.getElementById("ageError");
        let passwordError = document.getElementById("passwordError");

        // Reset previous error messages
        nameError.innerText = "";
        emailError.innerText = "";
        ageError.innerText = "";
        passwordError.innerText = "";

        let isValid = true;

        // Full Name validation (should not be empty)
        if (fullName === "" || !isNaN(fullName)) {
            nameError.innerText = "Please enter a valid name.";
            isValid = false;
        }

        // Email validation (should contain "@" and ".")
        if (!email.includes("@") || !email.includes(".")) {
            emailError.innerText = "Please enter a valid email.";
            isValid = false;
        }

        // Age validation (should be a positive number)
        if (isNaN(age) || age <= 0) {
            ageError.innerText = "Please enter a valid age.";
            isValid = false;
        }

        // Password validation (minimum 8 characters)
        if (password.length < 8) {
            passwordError.innerText = "Password must be at least 8 characters.";
            isValid = false;
        }

        // Submit form if all fields are valid
        if (isValid) {
            alert("Form submitted successfully!");
            this.submit(); // Only submit if all validations pass
        }
    });
})