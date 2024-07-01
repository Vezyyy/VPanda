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

// Menu / Navigation

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.toggle');
    const menuItems = document.querySelector('.menu-items');

    toggle.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Discord Overlay

document.addEventListener('DOMContentLoaded', function () {
    const discordButton = document.getElementById('discord-button');
    const extraContainer = document.getElementById('extra-container');
    const closeContainer = document.getElementById('close-container');
    const overlay = document.querySelector('.overlay');

    discordButton.addEventListener('click', function (event) {
        event.preventDefault();
        extraContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    closeContainer.addEventListener('click', function () {
        extraContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', function () {
        extraContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});