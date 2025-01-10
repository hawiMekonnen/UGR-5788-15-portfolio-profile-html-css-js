let currentIndex = 0;

function getMaxWidth() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        return 2; // Mobile Portrait
    } else {
        return 3; // Desktop and larger devices
    }
}

function updateDisplay() {
    const techItems = document.querySelectorAll('.image-group .image-item');
    const maxWidth = getMaxWidth();

    // Reset currentIndex if it exceeds the total number of items
    if (currentIndex >= techItems.length) {
        currentIndex = Math.max(0, techItems.length - maxWidth); // Ensure currentIndex doesn't exceed bounds
    }

    // Hide all items
    for (let item of techItems) {
        item.style.display = 'none';
    }

    // Show the appropriate range of items
    for (let i = currentIndex; i < currentIndex + maxWidth && i < techItems.length; i++) {
        techItems[i].style.display = 'block';
    }
}

function NextButton() {
    const techItems = document.querySelectorAll('.image-group .image-item');
    const maxWidth = getMaxWidth();

    currentIndex += maxWidth;

    updateDisplay();
}

function PreviousButton() {
    const techItems = document.querySelectorAll('.image-group .image-item');
    const maxWidth = getMaxWidth();

    currentIndex -= maxWidth;

    updateDisplay();
}


updateDisplay(); 

// Add event listener to handle window resizing
window.addEventListener('resize', () => {
    currentIndex = 0; 
    updateDisplay(); 
});