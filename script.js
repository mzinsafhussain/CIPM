const track = document.querySelector('.job-list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const cardsPerPage = 9; // 4 columns * 3 rows
const totalCards = document.querySelectorAll('.job-card').length;
const totalPages = Math.ceil(totalCards / cardsPerPage);

function updateSlider() {
    const translateX = -(currentIndex * 100); // percentage based
    track.style.transform = `translateX(${translateX}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});
