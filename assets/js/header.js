// Header scroll effect

const header = document.querySelector(".header-container");
window.addEventListener("scroll", () => {
if (window.scrollY > 0) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
});


// Smooth scrolling for navigation links

document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
    top: target.offsetTop - header.offsetHeight,
    behavior: 'smooth'
    });
});
});
