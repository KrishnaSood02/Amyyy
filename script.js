document.getElementById('show-album').addEventListener('click', function() {
    const photoAlbum = document.getElementById('photo-album');
    photoAlbum.classList.remove('hidden');
    photoAlbum.classList.add('visible'); // Add visible class for animation
    document.getElementById('show-album').disabled = true; // Disable button after click
});

document.getElementById('close-album').addEventListener('click', function() {
    const photoAlbum = document.getElementById('photo-album');
    photoAlbum.classList.remove('visible'); // Remove visible class for animation
    setTimeout(() => {
        photoAlbum.classList.add('hidden'); // Add hidden class after animation
    }, 500); // Match the duration of the opacity transition
    document.getElementById('show-album').disabled = false; // Enable button again
});

// Add click event to memory images for zoom effect
const memoryImages = document.querySelectorAll('.memory');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

memoryImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.classList.remove('hidden'); // Show modal
        modalImage.src = this.src; // Set modal image source
        captionText.innerHTML = this.alt; // Set caption text
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
    modal.classList.add('hidden'); // Hide modal
});

// Close modal when clicking outside of the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.add('hidden'); // Hide modal
    }
});