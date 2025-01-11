const images = [
    "../images/result-3.jpg",
    "../images/result-4.jpg",
    "../images/result-1.jpg",
    "../images/result-2.jpg"
];

let currentIndex = 0;

const imageElement = document.getElementById('certificateImage');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    imageElement.src = images[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

// Event listeners for the buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize the image display
updateImage();