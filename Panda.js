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

// Project Categories

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectTiles = document.querySelectorAll('.project-tile');
    const projectGrid = document.querySelector('.project-grid');
    const logoOverlay = document.getElementById('logo-overlay');

    let isFirstLoad = true; // Flag to check if this is the first load

    // Function to handle filtering projects with animation
    function filterProjects(selectedCategory) {
        if (!isFirstLoad) {
            // Show logo overlay
            logoOverlay.classList.add('show');

            // Add fade-out class to trigger animation
            projectGrid.classList.add('fade-out');
        }

        // Wait for animation to finish before changing content
        setTimeout(() => {
            projectTiles.forEach(tile => {
                const tileCategory = tile.getAttribute('data-category');
                if (selectedCategory === 'all' || tileCategory === selectedCategory) {
                    tile.style.display = 'block';
                } else {
                    tile.style.display = 'none';
                }
            });

            // Remove fade-out class to make it ready for next animation
            projectGrid.classList.remove('fade-out');

            if (!isFirstLoad) {
                // Hide logo overlay
                logoOverlay.classList.remove('show');
            }

            // Set flag to false after the first load
            isFirstLoad = false;
        }, 500); // Duration should match the CSS transition time
    }

    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to clicked button
            button.classList.add('active');

            // Get selected category
            const selectedCategory = button.getAttribute('data-category');

            // Filter projects based on selected category
            filterProjects(selectedCategory);
        });
    });

    // Set default category to 'all' and trigger filtering
    const defaultCategory = 'all';
    const defaultButton = document.querySelector(`.category-btn[data-category="${defaultCategory}"]`);
    if (defaultButton) {
        defaultButton.classList.add('active');
    }
    filterProjects(defaultCategory);
});


