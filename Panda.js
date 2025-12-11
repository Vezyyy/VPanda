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

    if (window.scrollY > 300) {
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

    // Check if the user has accepted cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    } else {
        cookiesNotification.style.display = 'block';
        cookiesOverlay.style.display = 'block';
    }

    // Handling the "Accept" button   
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    });

    // Handling the "Deny" button
    denyBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookiesNotification.style.display = 'none';
        cookiesOverlay.style.display = 'none';
    });
});

// ================== Testimonials Counter ==================

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const testimonialCount = testimonials.length;
    document.getElementById("testimonialCount").textContent = testimonialCount;
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

// Menu open/close function
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu-items');
    mobileMenu.classList.toggle('active');
}

// Close the menu when clicking a link in the mobile menu
const menuLinks = document.querySelectorAll('.mobile-menu-items a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Close the menu after the expanded menu is outside the area
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
        event.preventDefault();
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
            projectGrid.classList.add('fade-out'); 
            logoOverlay.classList.add('show'); 
        }

        setTimeout(() => {
            projectTiles.forEach(tile => {
                const tileCategory = tile.getAttribute('data-category');
                tile.style.display = (selectedCategory === 'all' || tileCategory === selectedCategory) ? 'block' : 'none';
            });

            projectGrid.classList.remove('fade-out');
            logoOverlay.classList.remove('show'); 
            isFirstLoad = false; 
        }, 500); 
    }

    // Adds click event to category buttons.
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active')); 
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');
            filterProjects(selectedCategory); 
        });
    });

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

// ================== Forest Of Rituals Download Button ==================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ForestOfRitualsDownload").addEventListener("click", function() {
        window.open(
            "https://drive.google.com/drive/folders/1yCv2FgSMThc0jI-XDDZYtTDORcB7Owx_?usp=drive_link",
            "_blank"
        );
    });
});

// ================== Logo Replay Mechanic ==================

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("logoTrack");
  if (!track) return;

  const slider = track.parentElement;
  let x = 0;
  let speed = 0.5;
  let direction = -1;

  sliderWidth = 100

  function animate() {
    const sliderWidth = slider.offsetWidth;
    const trackWidth = track.scrollWidth;

    const maxLeft = -(trackWidth - slider.offsetWidth);
    const maxRight = 0;

    x += speed * direction;

    if (x <= maxLeft) {
      x = maxLeft;
      direction = 1;
    }

    if (x >= maxRight) {
      x = maxRight;
      direction = -1;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

// ================== Project Search Bar ==================

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("projectSearch");
    const projects = document.querySelectorAll(".project-card");

    searchInput.addEventListener("input", function() {
        const filter = searchInput.value.toLowerCase();

        projects.forEach(project => {
            const title = project.querySelector("h3").textContent.toLowerCase();
            const description = project.querySelector("p").textContent.toLowerCase();
            if (title.includes(filter) || description.includes(filter)) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        });
    });
});

