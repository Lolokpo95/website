document.querySelector(".menu-btn").addEventListener("click", () => {
	document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".cartas", { delay: 500 });
ScrollReveal().reveal(".cards-banner", { delay: 500 });
