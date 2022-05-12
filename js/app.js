// Navigation
const navMenu = document.getElementById('nav-menu');
const ham = document.getElementById('ham');
const content = document.getElementById('content');

// Hide the navigation menu if the user touches any area outside of nav-menu i.e, the blurred content
// Add transition to make the nav menu slide out. JS is used to add this to avoid phantom animation playing on window resize
// Rmeove the transition as soon as it has completed. Timeout will wait until the 1st event i.e, transition has completed
content.addEventListener('click', () => {
    visible = navMenu.getAttribute('toggle');

    if (visible == 'true') {
        navMenu.setAttribute('toggle', false);
        navMenu.style.transition = 'transform 200ms ease-in';
        setTimeout(() => {
            navMenu.style.removeProperty('transition');
        });
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
        navMenu.style.transition = 'transform 200ms ease-in';
        timeoutID = setTimeout(() => {
            navMenu.style.removeProperty('transition');
        });
        document.body.style.overflow = "auto";
    }
});