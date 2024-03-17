// Add event listener to the contact form for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get values from form fields
    const name = document.getElementById('name').value; // Retrieve name input value
    const email = document.getElementById('email').value; // Retrieve email input value
    const message = document.getElementById('message').value; // Retrieve message input value
    
    // Log form data to the console for demonstration
    console.log('Name:', name); // Log name value
    console.log('Email:', email); // Log email value
    console.log('Message:', message); // Log message value
});
