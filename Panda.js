// LOADING SCREEN 
window.addEventListener('load', function () {
    const loader = document.querySelector('.loading-screen');
    loader.classList.add('fade-out');

    setTimeout(function () {
        loader.style.display = 'none';
    }, 1000);
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Check if cookies are already accepted
window.addEventListener('DOMContentLoaded', (event) => {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-notification').style.display = 'block';
    }

    // Accept cookies function
    document.getElementById('accept-cookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-notification').style.display = 'none';
    });
});
