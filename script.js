// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });

            // Close mobile menu if open
            const navLinks = document.querySelector(".nav-links");
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            }
        }
    });
});

// Mobile menu toggle
// Seletor do botão hamburger e menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Alternar menu ao clicar no hamburger
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fechar menu ao clicar fora ou em um link
document.addEventListener("click", (e) => {
    if (
        !e.target.closest(".hamburger") &&
        !e.target.closest(".nav-links") &&
        navLinks.classList.contains("active")
    ) {
        navLinks.classList.remove("active");
    }
});
