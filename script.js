// script.js
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    
    logo.addEventListener('click', function() {
        this.querySelector('img').classList.toggle('rotate');
    });
});
