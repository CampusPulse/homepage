//  JS for the "show" feature

document.addEventListener('DOMContentLoaded', () => {
  const queryParams = new URLSearchParams(window.location.search);
  const highlightedId = queryParams.get('show'); // Get the 'show' parameter from the URL

  if (highlightedId) {
    // Find all menu buttons
    const menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach((button) => {
      // Check if the data-id matches the highlightedId
      if (button.id === highlightedId) {
        button.classList.add('highlighted'); // Add the 'highlighted' class
      } else {
        button.classList.remove('highlighted'); // Remove the class if not matching
      }
    });
  }
});
