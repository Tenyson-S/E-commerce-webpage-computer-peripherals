// Function to load navbar and footer
function loadComponents() {
    // Load Navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });

    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Call the function to load the components
document.addEventListener("DOMContentLoaded", loadComponents);
