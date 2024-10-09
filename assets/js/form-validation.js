// Initialize EmailJS
(function() {
    emailjs.init("vxhrtAXNgLQLhUKYi"); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Form fields
    const fullName = this.fullName.value.trim();
    const address = this.address.value.trim();
    const city = this.city.value.trim();
    const state = this.state.value.trim();
    const zipCode = this.zipCode.value.trim();
    const country = this.country.value.trim();
    const email = this.email.value.trim();
    const contactNumber = this.contactNumber.value.trim();
    const message = this.message.value.trim();

    // Error messages array
    const errorMessages = [];

    // Validation checks
    if (fullName.length < 3 || fullName.length > 25) {
        errorMessages.push("Full Name must be between 3 and 25 characters.");
    }
    if (address.length < 3 || address.length > 25) {
        errorMessages.push("Address must be between 3 and 25 characters.");
    }
    if (city.length < 3 || city.length > 25) {
        errorMessages.push("City must be between 3 and 25 characters.");
    }
    if (state.length < 3 || state.length > 25) {
        errorMessages.push("State must be between 3 and 25 characters.");
    }
    if (zipCode.length < 3 || zipCode.length > 25) {
        errorMessages.push("Zip Code must be between 3 and 25 characters.");
    }
    if (country.length < 3 || country.length > 25) {
        errorMessages.push("Country must be between 3 and 25 characters.");
    }
    if (!validateEmail(email)) {
        errorMessages.push("Email is invalid.");
    }
    if (contactNumber.length < 3 || contactNumber.length > 25) {
        errorMessages.push("Contact Number must be between 3 and 25 characters.");
    }
    if (message.length < 3 || message.length > 200) {
        errorMessages.push("Message must be between 3 and 200 characters.");
    }

    // Check if there are any error messages
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n")); // Show all error messages
        return; // Stop form submission
    }

    // If all validations pass, send the email
    const serviceID = 'service_e0ux73n'; // Replace with your Service ID
    const templateID = 'template_4t6hsce'; // Replace with your Template ID

    // Send the email
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent!'); // Notify the user
            document.getElementById('contactForm').reset(); // Reset the form
        }, (err) => {
            alert(JSON.stringify(err)); // Show error
        });
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
