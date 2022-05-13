/* ================= Variables/Constants ================= */
let oldTimeout;

/* ================= Navbar Constants ================= */
const navMenu = document.getElementById('nav-menu');
const ham = document.getElementById('ham');
const content = document.getElementById('content');

/* ================== Global ==================== */

// Disable transitions & animations globally while the window is being resized. This helps in avoiding phantom animations
window.addEventListener('resize', () => {
    document.body.classList.add('no-animations');

    // If width is greater than 768px, force close the navbar
    if (window.innerWidth > 768) {
        navMenu.setAttribute('toggle', false);
    }

    // Clear the oldtimeout. Not required, just a good practice to clear what you've initialized
    clearTimeout(oldTimeout);
    
    // Timeout of 0.5s, just for a little breathing room if the user resizes their window like a maniac
    oldTimeout = setTimeout(() => {
        document.body.classList.remove('no-animations');
    }, 500);
});

/* ================= Navigation ================= */

// Hide the navigation menu if the user touches any area outside of nav-menu i.e, the blurred content
['click', 'touchmove'].forEach(eve => {
    content.addEventListener(eve, () => {
        visible = navMenu.getAttribute('toggle');
    
        if (visible == 'true') {
            navMenu.setAttribute('toggle', false);
            document.body.style.overflow = "auto";
        }
    });
});

// Add functionality to the hamburger for hiding & unhiding the navigation
// Setting the appropriate overflow property on the body to lock scrolling when menu is open
ham.addEventListener('click', () => {
    visible = navMenu.getAttribute('toggle');

    if (visible == 'false') {
        navMenu.setAttribute('toggle', true);
        document.body.style.overflow = "hidden";
    } else {
        navMenu.setAttribute('toggle', false);
        document.body.style.overflow = "auto";
    }
});