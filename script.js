function createSlideshow(slideshowId, prevId, nextId) {
  const slides = document.getElementById(slideshowId);
  let index = 0;

  document.getElementById(nextId).addEventListener("click", () => {
    index = (index + 1) % slides.children.length;
    slides.style.transform = `translateX(-${index * 200}px)`;
  });

  document.getElementById(prevId).addEventListener("click", () => {
    index = (index - 1 + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${index * 200}px)`;
  });
}

// Initialize slideshows
createSlideshow("programming-slides", "prev-programming", "next-programming");
createSlideshow("cloud-slides", "prev-cloud", "next-cloud");
createSlideshow("tools-slides", "prev-tools", "next-tools");
