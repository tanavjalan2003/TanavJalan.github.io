// Programming Slideshow
const programmingSlides = document.getElementById('programming-slides');
let programmingIndex = 0;

document.getElementById('next-programming').addEventListener('click', () => {
  programmingIndex = (programmingIndex + 1) % programmingSlides.children.length;
  programmingSlides.style.transform = `translateX(-${programmingIndex * 200}px)`;
});

document.getElementById('prev-programming').addEventListener('click', () => {
  programmingIndex = (programmingIndex - 1 + programmingSlides.children.length) % programmingSlides.children.length;
  programmingSlides.style.transform = `translateX(-${programmingIndex * 200}px)`;
});

// Cloud Slideshow
const cloudSlides = document.getElementById('cloud-slides');
let cloudIndex = 0;

document.getElementById('next-cloud').addEventListener('click', () => {
  cloudIndex = (cloudIndex + 1) % cloudSlides.children.length;
  cloudSlides.style.transform = `translateX(-${cloudIndex * 200}px)`;
});

document.getElementById('prev-cloud').addEventListener('click', () => {
  cloudIndex = (cloudIndex - 1 + cloudSlides.children.length) % cloudSlides.children.length;
  cloudSlides.style.transform = `translateX(-${cloudIndex * 200}px)`;
});

// Tools Slideshow
const toolsSlides = document.getElementById('tools-slides');
let toolsIndex = 0;

document.getElementById('next-tools').addEventListener('click', () => {
  toolsIndex = (toolsIndex + 1) % toolsSlides.children.length;
  toolsSlides.style.transform = `translateX(-${toolsIndex * 200}px)`;
});

document.getElementById('prev-tools').addEventListener('click', () => {
  toolsIndex = (toolsIndex - 1 + toolsSlides.children.length) % toolsSlides.children.length;
  toolsSlides.style.transform = `translateX(-${toolsIndex * 200}px)`;
});
