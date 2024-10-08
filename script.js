
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    if (name === '' || review === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your review, ' + name + '!');
    }

    // Optionally, clear the form after submission
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});
