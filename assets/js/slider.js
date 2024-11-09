const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;
const cardWidth = testimonialCards[0].offsetWidth + 30; // Card width + margin
const visibleArea = document.querySelector('.testimonial-slider').offsetWidth;
const maxOffset = (testimonialCards.length * cardWidth) - visibleArea; // Prevent moving past the last card

function updateSliderPosition() {
  const offset = currentSlide * cardWidth;
  
  // Prevent scrolling past the last card
  if (offset > maxOffset) {
    testimonialWrapper.style.transform = `translateX(-${maxOffset}px)`;
  } else {
    testimonialWrapper.style.transform = `translateX(-${offset}px)`;
  }
}

function updateButtonState() {
  // Disable Prev button if on the first slide
  prevBtn.disabled = currentSlide === 0;
  
  // Disable Next button if at the last visible card (no blank space after)
  nextBtn.disabled = (currentSlide * cardWidth) >= maxOffset;
}

document.getElementById('next').addEventListener('click', () => {
  if ((currentSlide * cardWidth) < maxOffset) {
    currentSlide++;
    updateSliderPosition();
    updateButtonState();
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
    updateButtonState();
  }
});

// Initial state of buttons
updateButtonState();
