let btnLogin = document.querySelector(".btn-search");
let btn = document.querySelector(".search");

btnLogin.addEventListener("click", () => {
    btn.classList.toggle("btn-click");
});

let menu = document.querySelector(".menu-items");
let menubtn = document.querySelector(".menu");

menubtn.addEventListener("click", ()=> {
    menu.classList.toggle("active-menu");
    menubtn.classList.toggle("btn-menu-active")
});


// theme-switcher
document.getElementById('theme-toggle').addEventListener('click', function () {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Toggle between sun and star icons
    if (themeIcon.src.includes('assets/icons/sun.svg')) {
        themeIcon.src = 'assets/icons/star.svg';  // Switch to dark mode icon (star)
        body.classList.add('dark-mode');  // Add dark mode class to body

    } else {
        themeIcon.src = 'assets/icons/sun.svg';  // Switch back to light mode icon (sun)
        body.classList.remove('dark-mode');  // Remove dark mode class from body
    }
});


//trigger for profile drop down menu

let profileBtn = document.querySelector(".profile-btn");
let profileClass = document.querySelector(".profile");
let profileDropdown = document.querySelector(".profile-dropdown");

profileBtn.addEventListener("click", ()=> {
    profileClass.classList.toggle("active-profile");
    profileDropdown.classList.toggle("active-dropdown");
});


