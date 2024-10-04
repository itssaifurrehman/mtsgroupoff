function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  function loadMedia() {
    var backgroundElement = document.querySelector('.Background');
  
    if (isMobileDevice()) {
        console.log("1")
        backgroundElement.innerHTML = '<img src="assets/videos/realestate.gif" alt="Background Animation" class="showimg">';
    } else {
        console.log("2")
        backgroundElement.innerHTML = `
            <video width="100%" autoplay loop muted playsinline>
                <source src="assets/videos/realEstate.mp4" type="video/mp4">
            </video>
        `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadMedia);