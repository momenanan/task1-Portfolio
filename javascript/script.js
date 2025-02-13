document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert('Your message has been sent successfully!');
    } else {
        alert('Please fill in all the fields!');
    }
});
function toggleMenu() {
    let navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}


