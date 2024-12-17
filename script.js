// Open the lightbox with the clicked image and caption
function openLightbox(imageElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    // Ensure the data-caption attribute exists and is valid
    if (imageElement.dataset.caption) {
        lightboxCaption.textContent = imageElement.dataset.caption;
    } else {
        lightboxCaption.textContent = "No caption available.";
    }

    // Set the image source
    lightboxImg.src = imageElement.src;

    // Show the lightbox
    lightbox.style.display = "flex";
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}