// LOADING SCREEN
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-screen');
    loader.classList.add('fade-out');

    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
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

// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Ensure slides exist
    if (slides.length === 0) {
        console.error("No slides found! Make sure the slides exist in the HTML.");
        return; // Stop if no slides
    }

    if (dots.length === 0) {
        console.error("No dots found! Make sure the dots exist in the HTML.");
        return; // Stop if no dots
    }

    // Show the first slide initially
    showSlide(currentSlideIndex);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove active class from all slides
            slide.style.transform = `translateX(-${index * 100}%)`; // Move slide into view
        });
        slides[index].classList.add('active'); // Add active class to the current slide for fade-in effect
        dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
        dots[index].classList.add('active'); // Add active class to the current dot
    }

    // Automatically change slides every 3 seconds
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Update index to show next slide
        showSlide(currentSlideIndex);
    }

    // Declare slideInterval variable to allow restarting
    let slideInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds

    // Reset the auto slide interval
    function resetSlideInterval() {
        clearInterval(slideInterval); // Clear the previous interval
        slideInterval = setInterval(nextSlide, 3000); // Restart interval
    }

    // Event delegation for dots
    document.querySelector('.slider-dots').addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('dot')) {
            const index = Array.from(dots).indexOf(target);
            showSlide(index);
            currentSlideIndex = index;
            resetSlideInterval();  // Restart auto slide change after manual interaction
        }
    });
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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const moreInfo = this.nextElementSibling; // Następny element to .more-info
            if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
                moreInfo.style.display = "block"; // Pokazuje dodatkowe informacje
                this.textContent = "Show Less"; // Zmiana tekstu przycisku
            } else {
                moreInfo.style.display = "none"; // Ukrywa dodatkowe informacje
                this.textContent = "Show More"; // Zmiana tekstu przycisku
            }
        });
    });
});


// VTacker Install
function copyCommands() {
    const commands = document.getElementById('install-commands');
    const range = document.createRange();
    range.selectNode(commands);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range); // Select the text
    document.execCommand('copy'); // Copy the selected text
    window.getSelection().removeAllRanges(); // Deselect
    alert('Commands copied to clipboard!'); // Optional: feedback to user
}


AOS.init({
    duration: 1000,  // Czas trwania animacji (w milisekundach)
    easing: 'ease-out-back',  // Typ animacji (np. 'ease', 'ease-out', 'ease-in', 'ease-out-back')
    once: true,  // Animacja zostanie uruchomiona tylko raz, po przejściu przez element
    offset: 200,  // Jak daleko od ekranu element musi być widoczny, aby rozpocząć animację
});


