document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Gather form data
    const formData = new FormData(this);

    // Example of form data handling
    console.log('Form Data:', Object.fromEntries(formData.entries()));

    // Normally you would send this data to the server here
    alert('Form submitted successfully!');

    // Redirect to payment gateway or perform additional steps here
});
