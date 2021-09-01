/* toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

/* navbar Active */
document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {
            navToggler.classList.add("hide");
            if (e.target.classList.contains("nav-item")) {
                toggleNavbar();
            } else {
                hideSection();
                document.body.classList.add("hide-scrolling");
            }
            setTimeout(() => {
                document.querySelector("section.active").classList.remove("active", "fade-out");
                document.querySelector(e.target.hash).classList.add("active");
                window.scrollTo(0, 0);
                document.body.classList.remove("hide-scrolling");
                navToggler.classList.remove("hide");
            }, 500);
        }
    })
    /* About Tabs */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})

/* Portfolio item details popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling")
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside the box
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();

    }

});


function portfolioItemDetails(portFolioItem) {

    document.querySelector(".pp-thumbnail .img-1").src =
        portFolioItem.querySelector(".portfolio-item-thumbnail .img-1").src;
    document.querySelector(".pp-thumbnail .img-2").src =
        portFolioItem.querySelector(".portfolio-item-thumbnail .img-2").src;
    document.querySelector(".pp-thumbnail .img-3").src =
        portFolioItem.querySelector(".portfolio-item-thumbnail .img-3").src;

    document.querySelector(".pp-header h3").innerHTML =
        portFolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
        portFolioItem.querySelector(".portfolio-item-details").innerHTML;

}







var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.querySelector(".pp-thumbnail").getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}