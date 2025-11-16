// ================== LOADING SCREEN ==================
// Waits for the window to load, then fades out the loading screen.
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-screen');
    loader.classList.add('fade-out'); // Adds fade-out animation.

    setTimeout(() => {
        loader.style.display = 'none'; // Hides loader after fade-out.
    }, 500); // Matches the CSS fade-out duration.
});

// ================== SCROLL TO TOP BUTTON ==================
// Smoothly scrolls to the top of the page when called.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Shows or hides the scroll-to-top button based on scroll position.
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-to-top');

    if (window.scrollY > 300) { // If scrolled 300px or more, show the button.
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    if (slides.length === 0 || dots.length === 0) {
        console.error("Slides or dots are missing! Please check the HTML.");
        return;
    }

    // Show the first slide
    showSlide(currentSlideIndex);

    // Function to display the slide at the specified index
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Automatically go to the next slide every 3 seconds
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    let slideInterval = setInterval(nextSlide, 3000);

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Event listeners for arrow buttons
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            nextSlide();
            resetSlideInterval();
        });
    } else {
        console.error('Next arrow button not found');
    }

    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            prevSlide();
            resetSlideInterval();
        });
    } else {
        console.error('Previous arrow button not found');
    }

    // Dot navigation click handling
    document.querySelector('.slider-dots').addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('dot')) {
            const index = Array.from(dots).indexOf(target);
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
            resetSlideInterval();
        }
    });
});


// ================== COOKIE NOTIFICATION ==================

document.addEventListener('DOMContentLoaded', function() {
    const cookiesNotification = document.getElementById('cookiesNotification');
    const cookiesOverlay = document.getElementById('cookiesOverlay');
    const acceptBtn = document.getElementById('acceptCookies');
    const denyBtn = document.getElementById('denyCookies');

    // Sprawdź, czy użytkownik zaakceptował cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    } else {
        cookiesNotification.style.display = 'block';
        cookiesOverlay.style.display = 'block';
    }

    // Obsługa przycisku "Accept"
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    });

    // Obsługa przycisku "Deny"
    denyBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    });
});

// ================== Testimonials Counter ==================

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial"); // Pobierz wszystkie testimoniale
    const testimonialCount = testimonials.length; // Zlicz ilość elementów
    document.getElementById("testimonialCount").textContent = testimonialCount; // Wyświetl liczbę
});


// ================== Discord Copy Our ID ==================

// Function to copy Discord ID to clipboard
function copyDiscordID(discordID) {
    const textarea = document.createElement('textarea');
    textarea.value = discordID;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert(`Discord ID ${discordID} copied to clipboard!`);
}


// ================== Navigation ==================

// Funkcja otwierania/zakrywania menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu-items');
    mobileMenu.classList.toggle('active');
}

// Zamknij menu po kliknięciu linka w menu mobilnym
const menuLinks = document.querySelectorAll('.mobile-menu-items a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Zamknij menu po kliknięciu poza obszarem menu
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu-items');
    const toggleButton = document.getElementById('mobileMenuToggle');

    if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
        menu.classList.remove('active');
    }
});


// ================== DISCORD OVERLAY ==================
// Manages showing and hiding the Discord overlay.
document.addEventListener('DOMContentLoaded', () => {
    const discordButton = document.getElementById('discord-button');
    const extraContainer = document.getElementById('extra-container');
    const closeContainer = document.getElementById('close-container');
    const overlay = document.querySelector('.overlay');

    // Shows the overlay when the Discord button is clicked.
    discordButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents default link behavior.
        extraContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    // Hides the overlay when the close button or overlay background is clicked.
    const hideOverlay = () => {
        extraContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    closeContainer.addEventListener('click', hideOverlay);
    overlay.addEventListener('click', hideOverlay);
});

// ================== LEFT SIDE NAV ==================
// Expands or collapses the sidebar on hover.
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');

    // Expands the sidebar when hovered.
    sidebar.addEventListener('mouseenter', () => {
        sidebar.style.width = '250px';
        sidebar.style.opacity = '1';
    });

    // Collapses the sidebar when the mouse leaves.
    sidebar.addEventListener('mouseleave', () => {
        sidebar.style.width = '80px';
        sidebar.style.opacity = '0.7';
    });
});

// ================== PROJECT CATEGORY FILTER ==================
// Filters projects based on the selected category.
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectTiles = document.querySelectorAll('.project-tile');
    const projectGrid = document.querySelector('.project-grid');
    const logoOverlay = document.getElementById('logo-overlay');

    let isFirstLoad = true; // Tracks the first load state.

    // Filters projects with a fade animation.
    function filterProjects(selectedCategory) {
        if (!isFirstLoad) {
            projectGrid.classList.add('fade-out'); // Triggers fade-out animation.
            logoOverlay.classList.add('show'); // Shows overlay.
        }

        setTimeout(() => {
            projectTiles.forEach(tile => {
                const tileCategory = tile.getAttribute('data-category');
                tile.style.display = (selectedCategory === 'all' || tileCategory === selectedCategory) ? 'block' : 'none';
            });

            projectGrid.classList.remove('fade-out'); // Resets animation.
            logoOverlay.classList.remove('show'); // Hides overlay.
            isFirstLoad = false; // Marks as no longer first load.
        }, 500); // Matches CSS animation duration.
    }

    // Adds click event to category buttons.
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active')); // Deactivates all buttons.
            button.classList.add('active'); // Activates the clicked button.

            const selectedCategory = button.getAttribute('data-category');
            filterProjects(selectedCategory); // Filters by the selected category.
        });
    });

    // Sets the default category on load.
    filterProjects('all');
});

// ================== Gallery LightBox ==================
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// =================== FOR LightBox ==================
function openForLightbox(src) {
    const lightbox = document.getElementById('for-lightbox');
    const lightboxImg = document.getElementById('for-lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeForLightbox() {
    document.getElementById('for-lightbox').style.display = 'none';
}

// ================== PandOS Commands ==================
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.commands-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });
});

// ================== Toggle Articles ==================

document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".article-card");

    articles.forEach(article => {
        article.addEventListener("click", () => {
            const isOpen = article.classList.contains("expanded");

            articles.forEach(a => a.classList.remove("expanded"));
            
            if (!isOpen) {
                article.classList.add("expanded");
            }
        });
    });
});

// ================== Load GitHub Code with Syntax Highlighting ==================

    const githubUrl = "https://raw.githubusercontent.com/Vezyyy/PandOS/main/PandOS.py";

    fetch(githubUrl)
    .then(res => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.text();
    })
    .then(text => {
        const codeElement = document.getElementById("github-code-view");
        codeElement.textContent = text;
        Prism.highlightElement(codeElement);
    })
    .catch(err => {
        document.getElementById("github-code-view").textContent =
        "Failed to load code: " + err.message;
    });

// ================== Toggle Reviews ==================
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleReviewsBtn");
    const hiddenReviews = document.querySelectorAll(".hidden-review");
    const wrapper = document.querySelector(".reviews-container-wrapper");
    const gradient = document.querySelector(".bottom-gradient");

    let isExpanded = false;

    btn.addEventListener("click", () => {
        if (!isExpanded) {
            hiddenReviews.forEach(r => r.style.display = "block");
            wrapper.style.maxHeight = "2000px";
            gradient.style.display = "none";
            btn.textContent = "Show less";
            console.log("Expanded reviews");
        } else {
            hiddenReviews.forEach(r => r.style.display = "none");
            wrapper.style.maxHeight = "600px";
            gradient.style.display = "block";
            btn.textContent = "Show more reviews";
        }

        isExpanded = !isExpanded;
    });
});
