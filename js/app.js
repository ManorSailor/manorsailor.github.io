const navMenu = document.getElementById('nav-menu');
const ham = document.getElementById('ham');
const content = document.getElementById('content');

visible = navMenu.getAttribute('toggle');

// Hide the navigation menu if the user touches any area outside of nav-menu i.e, the blurred content
content.addEventListener('touchstart', () => {
    if (visible == 'true') {
        navMenu.setAttribute('toggle', false);
        document.body.style.overflow = "auto";
    }
});

// Add functionality to the hamburger for hiding & unhiding the navigation
// Setting the appropriate overflow property on the body to lock scrolling when menu is open
ham.addEventListener('touchstart', () => {
    if (visible == 'false') {
        navMenu.setAttribute('toggle', true);
        document.body.style.overflow = "hidden";
    } else {
        navMenu.setAttribute('toggle', false);
        document.body.style.overflow = "auto";
    }
});