function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  function loadMedia() {
    var backgroundElement = document.querySelector('.studio-intro-slideConstructionCon .Background');
  
    if (isMobileDevice()) {
        console.log("1")  
        backgroundElement.innerHTML = '<img src="assets/videos/construction.gif" alt="Background Animation" class="showimg">';
    } else {
        console.log("2")
        backgroundElement.innerHTML = `
            <video width="100%" autoplay loop muted playsinline>
                <source src="assets/videos/bgHeaderCrane.mp4" type="video/mp4">
            </video>
        `;
        console.log('Desktop detected: Rendering MP4 video only');
    }
  }
  
  loadMedia();