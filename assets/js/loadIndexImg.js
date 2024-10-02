document.addEventListener("DOMContentLoaded", function () {
  function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
  }

  function loadImage() {
      var container = document.createElement('div'); // Create a container for the image

      if (isMobileDevice()) {
          // If it's a mobile device, load the 'frbg.png' image
          var mobileImg = document.createElement('img');
          mobileImg.alt = "";
          mobileImg.className = "zoom-image-head__bg2 isMobileScreen mobileSetting"; // Add your mobile-specific classes
          mobileImg.src = 'assets/img/frbg.png'; // Set the source for mobile
          container.appendChild(mobileImg); // Append to the container
      } else {
          // If it's a desktop device, load 'zoom-image-head-bg1vv1.png'
          var desktopImg = document.createElement('img');
          desktopImg.alt = "";
          desktopImg.className = "zoom-image-head__bg2 isMobileScreen2"; // Add your desktop-specific classes
          desktopImg.src = 'assets/img/zoom-image-head-bg1vv1.png'; // Set the source for desktop
          container.appendChild(desktopImg); // Append to the container
      }

      // Append the container to the body or a specific section of your HTML
      document.body.appendChild(container); // Adjust to append to the desired parent element
  }

  // Call the function to load the appropriate image
  loadImage();
});
