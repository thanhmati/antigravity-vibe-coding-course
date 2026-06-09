document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  
  // Update slide display and progress bar
  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    // Update progress bar
    const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
  
  // Navigation functions
  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      updateSlides();
    }
  }
  
  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlides();
    }
  }
  
  // Button click listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Keyboard listeners
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    }
  });
  
  // Touch gestures for mobile/tablet
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    const swipeThreshold = 50; // pixels
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide(); // swipe left -> next
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide(); // swipe right -> prev
    }
  }
  
  // Mouse wheel listener with debounce
  let lastWheelTime = 0;
  document.addEventListener('wheel', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastWheelTime < 800) {
      return; // prevent rapid scroll skipping
    }
    lastWheelTime = currentTime;
    
    if (e.deltaY > 0) {
      nextSlide();
    } else if (e.deltaY < 0) {
      prevSlide();
    }
  });
  
  // Fullscreen toggle
  fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        fullscreenBtn.textContent = '内'; // Exit icon placeholder
      }).catch(err => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        fullscreenBtn.textContent = '⛶';
      });
    }
  });
  
  // Listen for fullscreen change events to update button icon
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      fullscreenBtn.textContent = '内';
    } else {
      fullscreenBtn.textContent = '⛶';
    }
  });
  
  // Initial slide load
  updateSlides();
});
