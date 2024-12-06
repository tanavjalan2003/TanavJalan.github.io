let currentIndex = 0;

function scrollSkills(direction) {
  const skillWrapper = document.querySelector('.skills-grid-wrapper');
  const totalSkills = document.querySelectorAll('.skills-grid div').length;
  const skillWidth = document.querySelector('.skills-grid div').offsetWidth + 20; // accounting for gap
  
  if (direction === 'right') {
    if (currentIndex < totalSkills - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the beginning
    }
  } else if (direction === 'left') {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSkills - 1; // Loop to the end
    }
  }

  // Move the grid to show the right skills
  skillWrapper.style.transform = `translateX(-${currentIndex * skillWidth}px)`;
}
