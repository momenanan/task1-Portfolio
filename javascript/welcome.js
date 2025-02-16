function toggleMenu() {
    let navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}


document.getElementById('profile-img').addEventListener('click', function() {
    window.location.href = 'files/CV (1).pdf';
});
