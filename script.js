// Function for scrolling each category's slideshow
function scrollSkills(category, direction) {
  const scrollWrapper = document.getElementById(category);
  const skillWidth = document.querySelector(`#${category} .skills-scroll img`).offsetWidth + 20; // includes margin
  const maxScroll = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;
  
  let newScrollPosition = scrollWrapper.scrollLeft;

  if (direction === 'right') {
    newScrollPosition += skillWidth;
    if (newScrollPosition > maxScroll) newScrollPosition = 0; // Loop back to start
  } else if (direction === 'left') {
    newScrollPosition -= skillWidth;
    if (newScrollPosition < 0) newScrollPosition = maxScroll; // Loop back to end
  }

  scrollWrapper.scrollLeft = newScrollPosition;
}
