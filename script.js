// No JavaScript needed with pure CSS animation 🚀
console.log("Slider is working!");
// ===== Lightbox Functionality =====
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// ===== Filter Functionality =====
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
// ======= Image Slider =======
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto Slide (Optional)
setInterval(() => moveSlide(1), 5000);
