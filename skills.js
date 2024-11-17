// Slideshow functionality
function setupSlideshow(slidesId, prevId, nextId) {
  const slides = document.getElementById(slidesId);
  const images = slides.getElementsByTagName("img");
  let currentIndex = 0;

  // Show the current slide
  function showSlide(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translateX(${(i - index) * 100}%)`;
    }
  }

  // Move to the previous slide
  document.getElementById(prevId).addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  });

  // Move to the next slide
  document.getElementById(nextId).addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  });

  // Initialize the slideshow
  showSlide(currentIndex);
}

// Initialize all slideshows
document.addEventListener("DOMContentLoaded", () => {
  setupSlideshow("programming-slides", "prev-programming", "next-programming");
  setupSlideshow("cloud-slides", "prev-cloud", "next-cloud");
  setupSlideshow("tools-slides", "prev-tools", "next-tools");
});
