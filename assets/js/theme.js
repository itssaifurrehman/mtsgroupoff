(function ($) {
  "use strict";

  // window.addEventListener('beforeunload', function() {
  //   document.body.classList.add('fade-out');
  // });

  // const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
  // links.forEach(link => {
  //   link.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     document.getElementById('loading').classList.add('active'); // Show loading animation
  //     document.body.classList.add('fade-out'); // Trigger fade-out animation
  //     setTimeout(() => {
  //       window.location.href = this.href; // Navigate after fade-out
  //     }, 500); // Match duration of the fade-out transition
  //   });
  // });


  function getScrollBarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar";

    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth;

    outer.style.overflow = "scroll";

    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth;

    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }

  function detectElementScrollbarY(element) {
    return element.scrollHeight > element.offsetHeight;
  }

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

  var detectBrowser = {
    isOpera:
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0,
    isFirefox: typeof InstallTrigger !== "undefined",
    isSafari:
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor),
    isIE: false || !!document.documentMode,
    isEdge:
      !function () {
        this.isIE;
      } && !!window.StyleMedia,
    isChrome: !!window.chrome && !!window.chrome.webstore,
    isBlink:
      (function () {
        this.isChrome;
      } ||
        function () {
          this.isOpera;
        }) &&
      !!window.CSS,
  };

  var detectMobile = {
    isMobile:
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
  };

  if (detectMobile.isMobile) {
    $("html").addClass("mobile");
  } else {
    $("body").addClass("no-mobile");
  }

  // var svgAnimation = throttle(function () {
  //   $(".js-motion-svg:in-viewport").each(function () {
  //     if (!$(this).hasClass("animated")) {
  //       $(this).addClass("animated");
  //       var myVivus = new Vivus(this, {
  //         duration: 150,
  //       });
  //     }
  //   });
  // }, 40);

  var counter = throttle(function () {
    if (typeof $.fn.jQuerySimpleCounter !== "undefined") {
      $(".js-counter:in-viewport").each(function () {
        if (!$(this).hasClass("animated")) {
          $(this).addClass("animated");
          var thisElement = $(this);
          $({
            count: 0,
          }).animate(
            {
              count: $(this).attr("data-counter-value"),
            },
            {
              duration: 2500,
              easing: "swing",
              step: function step() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(
                  mathCount.toLocaleString("en-IN", {
                    maximumSignificantDigits: 3,
                  }) + "+"
                );
              },
            }
          );
        }
      });
    }
  }, 40);

  if ($(".js-counter").length) {
    counter();
  }
  $(window).scroll(function () {
    if ($(".js-counter").length) {
      counter();
    }
  });

  // if (!detectMobile.isMobile) {
  //   if ($(".js-motion-svg").length) {
  //     svgAnimation();
  //   }
  //   $(window).scroll(function () {
  //     if ($(".js-motion-svg").length) {
  //       svgAnimation();
  //     }
  //   });
  // }

  // $(".popup-video").magnificPopup({
  //   disableOn: 700,
  //   type: "iframe",
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: false,
  //   mainClass: "my-mfp-slide-bottom",
  // });

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

  $(document).ready(function () {
    var path = window.location.pathname.split("/").pop();
    $(".top-menu__menu-link").each(function () {
      var href = $(this).attr("href");
      if (path === href) {
        $(this).addClass("top-menu__menu-link_active");
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


  // $(".animsition").animsition({
  //   inClass: "fade-in",
  //   outClass: "fade-out",
  //   inDuration: 500,
  //   outDuration: 500,
  //   linkElement: 'a:not([target="_blank"]):not([href^="#"])',
  //   loading: true,
  //   loadingParentElement: "body",

  //   loadingClass: "animsition-loading2",
  //   loadingInner:
  //     '<div class="spinner">\n        <div class="double-bounce1"></div>\n      <div class="double-bounce2"></div>\n      </div>',
  //   timeout: false,
  //   timeoutCountdown: 5000,
  //   onLoadEvent: true,
  //   browser: ["animation-duration", "-webkit-animation-duration"],

  //   overlay: false,
  //   overlayClass: "animsition-overlay-slide",
  //   overlayParentElement: "body",
  //   transition: function transition(url) {
  //     window.location.href = url;
  //   },
  // });

  // svg4everybody();

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
    var bodyElement = document.querySelector("body");
    var footerElement = document.querySelector(".footer");

    if (footerElement) {
      var setPadding = function setPadding() {
        bodyElement.style.paddingBottom = "".concat(
          footerElement.offsetHeight,
          "px"
        );
      };

      var onWindowResize = function onWindowResize() {
        setPadding();
      };

      footerElement.classList.add("footer_fixed");
      setPadding();
      window.addEventListener("resize", onWindowResize);
    }
  })();


  // (function () {
  //   const isMobile = window.innerWidth < 768;
  //   const bodyWrapper = document.querySelector(".zoom-image-head");
  //   const bg = document.querySelector(".zoom-image-head__bg");
  //   const bg2 = isMobile
  //     ? document.querySelector(".mobileSetting")
  //     : document.querySelector(".zoom-image-head__bg2");
  //   const content = document.querySelector(".zoom-image-head__content");
  //   const counterBlock = document.querySelector(".zoom-counter__card");
  //   const counterTitle = document.querySelector(".zoom-counter__title");
  //   const counterText = document.querySelector(".zoom-counter__text");
  //   const counterLink = document.querySelector(".zoom-counter__read-more");

  //   let contentIsVisible = false;
  //   let ticking = false;
  //   let height = bodyWrapper.offsetHeight;

  //   // Apply will-change to optimize animations
  //   bg.style.willChange = "opacity, transform";
  //   bg2.style.willChange = "opacity, transform";
  //   content.style.willChange = "opacity, transform";

  //   const checkPosition = () => {
  //     const scroll = window.scrollY || window.pageYOffset;
  //     const scrollRatio = Math.min(scroll / height, 1);

  //     // Only reveal content when the scroll reaches the specified height
  //     if (scroll > height && !contentIsVisible) {
  //       showCounterContent();
  //     }

  //     // Update background and content transformations based on scroll
  //     updateTransforms(scrollRatio);
  //   };

  //   const updateTransforms = (scrollRatio) => {
  //     const opacity = Math.max(1 - scrollRatio, 0).toFixed(2);
  //     const scale = (1 + scrollRatio * 0.5).toFixed(2);
  //     const translateBgX = (scrollRatio * (isMobile ? -10 : -15)).toFixed(2);
  //     const translateBgY = (scrollRatio * (isMobile ? -8 : -12)).toFixed(2);
  //     const translateBg2X = (scrollRatio * (isMobile ? 2 : 4)).toFixed(2);
  //     const translateBg2Y = (scrollRatio * (isMobile ? 10 : 15)).toFixed(2);
  //     const translateContentY = (scrollRatio * -15).toFixed(2);

  //     // Update bg styles
  //     bg.style.opacity = (opacity * 2).toFixed(2);
  //     bg.style.transform = `scale(${scale}) translate(${translateBgX}%, ${translateBgY}%)`;

  //     // Update bg2 styles
  //     const bg2Opacity = Math.max(1 - scrollRatio * 2, 0).toFixed(2);
  //     bg2.style.opacity = bg2Opacity;
  //     bg2.style.transform = `scale(${scale}) translate(${translateBg2X}%, ${translateBg2Y}%)`;

  //     // Update content styles
  //     const contentOpacity = Math.max(1 - scrollRatio * 1.5, 0).toFixed(2);
  //     content.style.opacity = contentOpacity;
  //     content.style.transform = `translateY(${translateContentY}%)`;
  //   };

  //   const showCounterContent = () => {
  //     contentIsVisible = true;
  //     // Add class for CSS transitions
  //     counterBlock.classList.add("visible");
  //     counterTitle.classList.add("visible");
  //     counterText.classList.add("visible");
  //     counterLink.classList.add("visible");
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         checkPosition();
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   const setInitialStyles = () => {
  //     window.scrollTo(0, 0);
  //     // Do not set position: fixed on the body to prevent click-blocking issues
  //     bodyWrapper.style.position = "relative"; // Ensure relative positioning
  //   };

  //   let resizeTimeout;
  //   const recalculateHeight = () => {
  //     height = bodyWrapper.offsetHeight;
  //   };

  //   window.addEventListener("resize", () => {
  //     clearTimeout(resizeTimeout);
  //     resizeTimeout = setTimeout(recalculateHeight, 100);
  //   });

  //   setInitialStyles();
  //   window.addEventListener("scroll", onScroll);
  // })();





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

    // Apply will-change just before scroll starts
    bg.style.willChange = "opacity, transform";
    bg2.style.willChange = "opacity, transform";
    content.style.willChange = "opacity, transform";

    const checkPosition = () => {
      const scroll = window.scrollY || window.pageYOffset;

      // Trigger counter content visibility once scroll passes the height of the wrapper
      if (scroll > height && !contentIsVisible) {
        showCounterContent();
      }

      // Hide body content if the user scrolls past the initial height
      body.style.display = scroll > height ? "none" : "";

      // Calculate scroll ratio
      const scrollRatio = Math.min(scroll / height, 1);

      // Batch DOM updates for performance improvement
      updateTransforms(scrollRatio);
    };

    const updateTransforms = (scrollRatio) => {
      // These values don't change unless you scroll
      const opacity = Math.max(1 - scrollRatio, 0);
      const scale = 1 + scrollRatio * 0.5;

      const translateBgX = (scrollRatio * (isMobile ? -10 : -15)).toFixed(2);
      const translateBgY = (scrollRatio * (isMobile ? -8 : -12)).toFixed(2);
      const translateBg2X = (scrollRatio * (isMobile ? 2 : 4)).toFixed(2);
      const translateBg2Y = (scrollRatio * (isMobile ? 10 : 15)).toFixed(2);
      const translateContentY = (scrollRatio * -15).toFixed(2);

      // Apply updates in a single batch to reduce layout thrashing
      bg.style.opacity = (opacity * 2).toFixed(2);
      bg.style.transform = `scale(${scale.toFixed(2)}) translate(${translateBgX}%, ${translateBgY}%)`;

      const bg2Opacity = Math.max(1 - scrollRatio * 2, 0).toFixed(2);
      bg2.style.opacity = bg2Opacity;
      bg2.style.transform = `scale(${scale.toFixed(2)}) translate(${translateBg2X}%, ${translateBg2Y}%)`;

      const contentOpacity = Math.max(1 - scrollRatio * 1.5, 0).toFixed(2);
      content.style.opacity = contentOpacity;
      content.style.transform = `translateY(${translateContentY}%)`;
    };

    const showCounterContent = () => {
      contentIsVisible = true;

      // Make counter elements visible with transitions
      counterBlock.classList.add("visible");
      counterTitle.classList.add("visible");
      counterText.classList.add("visible");
      counterLink.classList.add("visible");

      // Remove will-change once animations are done to free up memory
      setTimeout(() => {
        bg.style.willChange = "";
        bg2.style.willChange = "";
        content.style.willChange = "";
      }, 500); // Same duration as the transition
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

    const setInitialStyles = () => {
      window.scrollTo(0, 0);
      body.style.position = "fixed";
    };

    let resizeTimeout;
    const recalculateHeight = () => {
      height = bodyWrapper.offsetHeight;
    };

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(recalculateHeight, 100);
    });

    setInitialStyles();
    window.addEventListener("scroll", onScroll);
  })();

})(jQuery);
