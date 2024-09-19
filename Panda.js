// LOADING SCREEN
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-screen');
    loader.classList.add('fade-out');

    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

// SCROLL TO TOP FUNCTION
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// SHOW SCROLL-TO-TOP BUTTON WHEN SCROLLED DOWN
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-to-top');
    
    if (window.scrollY > 300) { // Show button when scrolled down 300px or more
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// CHECK IF COOKIES ARE ALREADY ACCEPTED
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-notification').style.display = 'block';
    }

    // ACCEPT COOKIES FUNCTION
    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-notification').style.display = 'none';
    });
});

// TOGGLE MOBILE MENU
function toggleMobileMenu() {
    const mobileMenuItems = document.getElementById('mobile-menu-items');
    mobileMenuItems.classList.toggle('active');
}

// DISCORD OVERLAY
document.addEventListener('DOMContentLoaded', () => {
    const discordButton = document.getElementById('discord-button');
    const extraContainer = document.getElementById('extra-container');
    const closeContainer = document.getElementById('close-container');
    const overlay = document.querySelector('.overlay');

    discordButton.addEventListener('click', (event) => {
        event.preventDefault();
        extraContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    closeContainer.addEventListener('click', () => {
        extraContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        extraContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});

// LEFT SIDE NAV
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    
    // Show the menu on mouse hover
    sidebar.addEventListener('mouseenter', () => {
        sidebar.style.width = '250px';
        sidebar.style.opacity = '1';
    });
    
    // Hide the menu on mouse leave
    sidebar.addEventListener('mouseleave', () => {
        sidebar.style.width = '80px';
        sidebar.style.opacity = '0.7';
    });

    // Optional: Hide the menu when clicking outside (for better UX)
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !sidebar.matches(':hover')) {
            sidebar.style.width = '80px';
            sidebar.style.opacity = '0.7';
        }
    });
});
