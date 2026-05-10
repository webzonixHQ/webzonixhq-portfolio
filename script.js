// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
        document.body.classList.remove("loading");
    }, 1500);
});


// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileDrawer = document.getElementById("mobile-drawer");
const mobileOverlay = document.getElementById("mobile-overlay");
const drawerClose = document.getElementById("drawer-close");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileDrawer.classList.toggle("open");
    mobileOverlay.classList.toggle("open");
});

drawerClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    mobileDrawer.classList.remove("open");
    mobileOverlay.classList.remove("open");
}


// NAVBAR SCROLL
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// SKILL BAR ANIMATION
const skillFills = document.querySelectorAll(".skill-fill");

const animateSkills = () => {
    skillFills.forEach(fill => {
        fill.style.width = fill.dataset.width + "%";
    });
};

window.addEventListener("load", animateSkills);

// AOS INIT
AOS.init({
    duration: 1000,
    once: true
});