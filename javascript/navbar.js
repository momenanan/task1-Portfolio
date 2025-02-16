document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
        <nav class="navbar">
            <a href="main.html">Home</a>
            <a href="About.html">About</a>
            <a href="Projects.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
    `;
    
    document.getElementById("navbar-container").innerHTML = navbarHTML;
});
