function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function loadMedia() {
    var backgroundElement = document.querySelector('.Background1');
    if (!backgroundElement) {
        console.error("Element with class 'Background1' not found!");
        return;
    }

    if (isMobileDevice()) {
        backgroundElement.innerHTML = '<img src="assets/videos/construction.gif" alt="Background Animation" class="showimg">';
    } else {
        backgroundElement.innerHTML = `
            <video width="100%" autoplay loop muted playsinline>
                <source src="assets/videos/bgHeaderCrane.mp4" type="video/mp4">
            </video>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadMedia();
});
