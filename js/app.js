// Disable all transitions & animations while the window is being resized. This helps in avoiding phantom animations
// Timeout of 0.5s, just for a little breathing room if the user resizes their window like a maniac
// Store the last timeout in a variable & clear it when another timeout is set. This isn't required, just a good practice to clear what you've initialized.
let oldTimeout;

window.addEventListener('resize', () => {
    document.body.classList.add('no-animations');

    clearTimeout(oldTimeout);

    oldTimeout = setTimeout(() => {
        document.body.classList.remove('no-animations');
    }, 500);
});

// Navigation
const navMenu = document.getElementById('nav-menu');
const ham = document.getElementById('ham');
const content = document.getElementById('content');

// Hide the navigation menu if the user touches any area outside of nav-menu i.e, the blurred content
content.addEventListener('click', () => {
    visible = navMenu.getAttribute('toggle');

    if (visible == 'true') {
        navMenu.setAttribute('toggle', false);
        document.body.style.overflow = "auto";
    }
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