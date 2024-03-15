// NAV BURGER HERE

document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuIcon = document.querySelector('.burger-menu-icon');
    const menuArea = document.querySelector('.menu-area');


    function toggleMenu() {
        menuArea.classList.toggle('show-menu');
    }


    burgerMenuIcon.addEventListener('click', toggleMenu);
});


// CAROUSEL HERE
let currentIndex = 0;
let imageWidth = 0;

function initializeCarousel() {
    const images = document.querySelectorAll('.discover-images-container');
    const container = document.querySelector('.images-container');
    imageWidth = images[0].offsetWidth;

    container.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

function showImage(index) {
    const container = document.querySelector('.images-container');

    container.style.transition = 'transform 0.5s ease-in-out';
    container.style.transform = `translateX(-${imageWidth * index}px)`;
    currentIndex = index;
}

function prevImage() {
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    } else {
        showImage(0);
    }
}

function nextImage() {
    const images = document.querySelectorAll('.discover-images-container');
    if (currentIndex < images.length - 1) {
        showImage(currentIndex + 1);
    } else {
        showImage(0);
    }
}

function startCarousel() {
    setInterval(nextImage, 3000); 
}

function stopCarousel() {
    clearInterval(intervalId);
}

document.addEventListener("DOMContentLoaded", function() {
    initializeCarousel();
    startCarousel();
    
});

// GUEST REVIEW HERE

document.getElementById("guest-review-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var guestName = document.getElementById("guest-name").value;
    var guestReview = document.getElementById("guest-review").value;

    var reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = "<strong>" + guestName + "</strong><br>" + guestReview;


    document.getElementById("reviews").appendChild(reviewElement);

    document.getElementById("guest-name").value = "";
    document.getElementById("guest-review").value = "";
});