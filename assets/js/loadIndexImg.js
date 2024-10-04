document.addEventListener("DOMContentLoaded", function () {
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function toggleImages() {
        const mobileImg = document.querySelector('.isMobileScreen');
        const desktopImg = document.querySelector('.isMobileScreen2');

        if (isMobileDevice()) {
            mobileImg.src = 'assets/img/frbg.webp';
            mobileImg.style.display = 'block';
            desktopImg.style.display = 'none';
        } else {
            desktopImg.src = 'assets/img/zoom-image-head-bg1vv11.webp';
            mobileImg.style.display = 'none'; 
            desktopImg.style.display = 'block';
        }
    }
    toggleImages();
});