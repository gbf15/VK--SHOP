 // script.js
 function switchImage(imageSrc) {
    const mainImage = document.getElementById("mainProductImage");
    mainImage.style.opacity = "0"; // Start fading out

    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = "1"; // Fade in with new image
    }, 300);

    // Update active thumbnail
    document.querySelectorAll(".thumbnails img").forEach(thumbnail => {
        thumbnail.classList.remove("active");
    });
    event.target.classList.add("active");
}
