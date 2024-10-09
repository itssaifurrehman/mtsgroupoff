document.addEventListener('DOMContentLoaded', function() {
    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return regex.test(email);
    }

    // Function to validate input length
    function isValidLength(value, minLength, maxLength) {
        return value.trim().length >= minLength && value.trim().length <= maxLength;
    }

    // Function to validate the entire form
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const fullName = document.querySelector('input[name="fullName"]').value;
        const address = document.querySelector('input[name="address"]').value;
        const city = document.querySelector('input[name="city"]').value;
        const state = document.querySelector('input[name="state"]').value;
        const zipCode = document.querySelector('input[name="zipCode"]').value;
        const country = document.querySelector('input[name="country"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const contactNumber = document.querySelector('input[name="contactNumber"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Define minimum and maximum lengths
        const minLength = 3; // Set a minimum length for input fields
        const maxLength = 25; // Set a maximum length for input fields
        const maxMessageLength = 200; // Set a maximum length for message

        // Validation flags
        let isValid = true;
        let errors = [];

        // Validate each input
        if (!isValidLength(fullName, minLength, maxLength)) {
            isValid = false;
            errors.push('Full Name must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(address, minLength, maxLength)) {
            isValid = false;
            errors.push('Address must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(city, minLength, maxLength)) {
            isValid = false;
            errors.push('City must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(state, minLength, maxLength)) {
            isValid = false;
            errors.push('State must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(zipCode, minLength, maxLength)) {
            isValid = false;
            errors.push('Zip Code must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(country, minLength, maxLength)) {
            isValid = false;
            errors.push('Country must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidEmail(email)) {
            isValid = false;
            errors.push('Email is not valid.');
        }
        if (!isValidLength(contactNumber, minLength, maxLength)) {
            isValid = false;
            errors.push('Contact Number must be between ' + minLength + ' and ' + maxLength + ' characters long.');
        }
        if (!isValidLength(message, 0, maxMessageLength)) {
            isValid = false;
            errors.push('Message must not exceed ' + maxMessageLength + ' characters.');
        }

        // Show errors or submit the form
        if (isValid) {
            // Submit the form (you can integrate your email sending function here)
            // alert('Form submitted successfully!');
            document.getElementById('contactForm').reset(); // Reset the form after submission
        } else {
            // Display error messages
            alert(errors.join('\n'));
        }
    }

    // Attach the validateForm function to the form submission
    document.getElementById('contactForm').addEventListener('submit', validateForm);
});
