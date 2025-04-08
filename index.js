// Select elements from the DOM
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImageIndex = -1; // To track the current image index

// Function to open the modal
function openModal(index) {
    modal.style.display = 'flex';
    modalImage.src = galleryImages[index].src;
    currentImageIndex = index;
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = 'none';
}

// Function to navigate to the previous image
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = galleryImages.length - 1; // Loop to the last image
    }
    modalImage.src = galleryImages[currentImageIndex].src;
}

// Function to navigate to the next image
function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Loop to the first image
    }
    modalImage.src = galleryImages[currentImageIndex].src;
}

// Add event listeners
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

closeModal.addEventListener('click', closeModalFunction);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close the modal if clicked outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});
