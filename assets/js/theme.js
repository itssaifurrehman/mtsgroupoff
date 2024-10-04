(function ($) {
  "use strict";

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
    },
  });

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
})(jQuery);