document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading upon form submission
    
    const name = document.getElementById('name').value.trim();
    const review = document.getElementById('review').value.trim();
    
    // Check for empty fields and alert if necessary
    if (name === '' || review === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your review, ' + name + '!');
        
        // Clear the form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
    }
});
