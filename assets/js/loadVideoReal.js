function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function loadMedia() {
  var backgroundElement = document.querySelector('.Background');

  if (isMobileDevice()) {
      backgroundElement.innerHTML = '<img src="assets/videos/realestate.gif" alt="Background Animation" class="showimg">';
  } else {

      backgroundElement.innerHTML = `
          <video width="100%" autoplay loop muted playsinline>
              <source src="assets/videos/bgHeaderv5.mp4" type="video/mp4">
          </video>
      `;
  }
}

loadMedia();