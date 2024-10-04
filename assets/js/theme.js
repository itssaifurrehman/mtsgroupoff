(function ($) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".js-counter");
    const speed = 1500;
    
    function animateCounter(counter) {
      const target = +counter.getAttribute("data-counter-value");
      const increment = target / (speed / 16); 
      let count = 0;
  
      function updateCounter() {
        count += increment;
        if (count >= target) {
          counter.textContent = target.toLocaleString("en-IN") + "+";
        } else {
          counter.textContent = Math.ceil(count).toLocaleString("en-IN") + "+";
          requestAnimationFrame(updateCounter);
        }
      }
      requestAnimationFrame(updateCounter);
    }
  
    function checkCounters() {
      counters.forEach(counter => {
        if (!counter.classList.contains("animated") && isInViewport(counter)) {
          counter.classList.add("animated");
          animateCounter(counter);
        }
      });
    }
  
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
  
    let ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          checkCounters();
          ticking = false;
        });
        ticking = true;
      }
    });
      checkCounters();
  });


  function throttle(func, ms) {
    var isThrottled = false;
    var savedArgs;
    var savedThis;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);
      isThrottled = true;
      setTimeout(function () {
        isThrottled = false;

        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }


  const inputFields = document.querySelectorAll(".contact-block__input-text");

  inputFields.forEach(function (inputField) {
    inputField.addEventListener("input", function () {
      inputField.classList.add("typing");
    });

    inputField.addEventListener("blur", function () {
      inputField.classList.remove("typing");
    });
  });

  window.addEventListener("scroll", function () {
    var card = document.querySelector(".zoom-counter__card");
    var rect = card.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      card.classList.add("animate");
    } else {
      card.classList.remove("animate");
    }
  });

  window.addEventListener("scroll", function () {
    var images = document.querySelectorAll(".zoom-services-item-image");

    images.forEach(function (image) {
      var rect = image.getBoundingClientRect();
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        image.classList.add("animate");
      } else {
        image.classList.remove("animate");
      }
    });
  });

  window.addEventListener("scroll", function () {
    var images = document.querySelectorAll(".single-post__image");

    images.forEach(function (image) {
      var rect = image.getBoundingClientRect();
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        image.classList.add("animate");
      } else {
        image.classList.remove("animate");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll(".top-menu__menu-link");
    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (path === href) {
        link.classList.add("top-menu__menu-link_active");
      }
    });
  });
  

  window.addEventListener("scroll", function () {
    var images = document.querySelectorAll(".masonry-item__image");

    images.forEach(function (image) {
      var rect = image.getBoundingClientRect();
      var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        image.classList.add("animate");
      } else {
        image.classList.remove("animate");
      }
    });
  });

  const header = document.querySelector(".header");
  let lastScrollPosition = 0;

  window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    if (
      currentScrollPosition > 0 &&
      currentScrollPosition > lastScrollPosition
    ) {
      header.style.display = "none";
    } else if (currentScrollPosition === 0) {
      header.style.display = "block";
    }

    lastScrollPosition = currentScrollPosition;
  });

  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 200,
    outDuration: 200,
    linkElement: 'a:not([target="_blank"]):not([href^="#"])',
    loading: true,
    loadingParentElement: "body",
    loadingClass: "animsition-loading2",
    loadingInner:
      '<div class="spinner">\n<div class="double-bounce1"></div>\n<div class="double-bounce2"></div>\n</div>',
    timeout: false,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    transition: function transition(url) {
      window.location.href = url;
    }
  });

  (function () {
    var element = document.querySelector(".faded-block");

    if (element) {
      $(window).on("scroll", function () {
        var pixs = element.getBoundingClientRect().top;
        pixs = pixs / -50;
        $(element).css({ filter: "blur(" + pixs + "px)" });
      });
    }
  })();

  window.onload = function () {
    if (window.innerWidth <= 768) {
      const currentUrl = window.location.pathname;
      let lines = [];
      if (currentUrl.includes("/real-estate.html")) {
        lines = [
          "MTS Group where UAE and Pakistan’s real estate markets",
          "converge. Explore our diverse portfolio of luxury real",
          "estate and great investment opportunities with",
          " our tailored solutions and seamless service.",
        ];
      } else if (currentUrl.includes("/construction.html")) {
        lines = [
          "Combining the strength of 150+ experienced professionals",
          "with advanced machinery, MTS GROUP excels in delivering",
          "high quality results across the UAE and Pakistan. Experience",
          "excellence through our unwavering commitment to timely",
          "delivery and superior workmanship, backed by our",
          "expertise and innovation.",
        ];
      }

      if (lines.length > 0) {
        var element = document.querySelector(".studio-intro-slide__text");
        var newContent = "";
        lines.forEach(function (line, index) {
          var fontSize = 13 - index - 1;
          newContent +=
            '<span style="display:block; font-size:' +
            fontSize +
            'px;">' +
            line +
            "</span>";
        });
        element.innerHTML = newContent;
      }
    }
  };      
  (function () {
    const isMobile = window.innerWidth < 768;
    const bodyWrapper = document.querySelector(".zoom-image-head");
    const body = document.querySelector(".zoom-image-head__body");
    const bg = document.querySelector(".zoom-image-head__bg");
    const bg2 = isMobile
      ? document.querySelector(".mobileSetting")
      : document.querySelector(".zoom-image-head__bg2");
    const content = document.querySelector(".zoom-image-head__content");
    const counterBlock = document.querySelector(".zoom-counter__card");
    const counterTitle = document.querySelector(".zoom-counter__title");
    const counterText = document.querySelector(".zoom-counter__text");
    const counterLink = document.querySelector(".zoom-counter__read-more");
    let contentIsVisible = false;
    let ticking = false;
    let height = bodyWrapper.offsetHeight;
  
    // Precalculate values to avoid recalculating on every scroll
    const maxTranslateBgX = isMobile ? -5 : -8;  // Decreased translation values for faster animations
    const maxTranslateBgY = isMobile ? -4 : -6;
    const maxTranslateBg2X = isMobile ? 1 : 2;
    const maxTranslateBg2Y = isMobile ? 4 : 8;
    const maxTranslateContentY = -8;  // Faster content movement
  
    // Scroll position check and transformation handler
    const checkPosition = () => {
      const scroll = window.scrollY || window.pageYOffset;
  
      if (scroll > height && !contentIsVisible) {
        showCounterContent();
      }
  
      body.style.display = scroll > height ? "none" : "";
  
      const scrollRatio = Math.min(scroll / (height / 2), 1);  // Making animation finish faster by reducing height threshold
      updateTransforms(scrollRatio);
    };
    const updateTransforms = (scrollRatio) => {
      const opacity = Math.max(1 - scrollRatio, 0);
      const scale = 1 + scrollRatio * 0.3;  // Reduced scale factor for faster animation
  
      const translateBgX = (scrollRatio * maxTranslateBgX).toFixed(2);
      const translateBgY = (scrollRatio * maxTranslateBgY).toFixed(2);
      const translateBg2X = (scrollRatio * maxTranslateBg2X).toFixed(2);
      const translateBg2Y = (scrollRatio * maxTranslateBg2Y).toFixed(2);
      const translateContentY = (scrollRatio * maxTranslateContentY).toFixed(2);
  
      bg.style.opacity = (opacity * 2).toFixed(2);
      bg.style.transform = `scale(${scale.toFixed(2)}) translate(${translateBgX}%, ${translateBgY}%)`;
  
      bg2.style.opacity = Math.max(1 - scrollRatio * 2, 0).toFixed(2);
      bg2.style.transform = `scale(${scale.toFixed(2)}) translate(${translateBg2X}%, ${translateBg2Y}%)`;
  
      content.style.opacity = Math.max(1 - scrollRatio * 1.5, 0).toFixed(2);
      content.style.transform = `translateY(${translateContentY}%)`;
    };
  
    const showCounterContent = () => {
      contentIsVisible = true;
      counterBlock.classList.add("visible");
      counterTitle.classList.add("visible");
      counterText.classList.add("visible");
      counterLink.classList.add("visible");
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    // Set the page to the top and lock the body position
    const setInitialStyles = () => {
      window.scrollTo(0, 0);
      body.style.position = "fixed";
    };
    // Handle window resize with debounced recalculation
    let resizeTimeout;
    const recalculateHeight = () => {
      height = bodyWrapper.offsetHeight;
    };
  
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(recalculateHeight, 100);
    });
    // Initialize everything
    setInitialStyles();
    window.addEventListener("scroll", onScroll);
  })();
})(jQuery);