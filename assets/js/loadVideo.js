function isMobileDevice(){return/Mobi|Android/i.test(navigator.userAgent)}function loadMedia(){var i=document.querySelector(".studio-intro-slideConstructionCon .Background");isMobileDevice()?i.innerHTML='<img src="assets/videos/construction.gif" alt="Background Animation" class="showimg">':i.innerHTML='\n          <video width="100%" autoplay loop muted playsinline>\n              <source src="assets/videos/bgHeaderCrane.mp4" type="video/mp4">\n          </video>\n      '}loadMedia();