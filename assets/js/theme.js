!(function (e) {
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
    
  document.querySelectorAll(".contact-block__input-text").forEach(function (e) {
    e.addEventListener("input", function () {
      e.classList.add("typing");
    }),
      e.addEventListener("blur", function () {
        e.classList.remove("typing");
      });
  }),
    window.addEventListener("scroll", function () {
      var e = document.querySelector(".zoom-counter__card"),
        t = e.getBoundingClientRect(),
        n = window.innerHeight || document.documentElement.clientHeight;
      t.top <= n && t.bottom >= 0
        ? e.classList.add("animate")
        : e.classList.remove("animate");
    }),
    window.addEventListener("scroll", function () {
      document
        .querySelectorAll(".zoom-services-item-image")
        .forEach(function (e) {
          var t = e.getBoundingClientRect(),
            n = window.innerHeight || document.documentElement.clientHeight;
          t.top <= n && t.bottom >= 0
            ? e.classList.add("animate")
            : e.classList.remove("animate");
        });
    }),
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".single-post__image").forEach(function (e) {
        var t = e.getBoundingClientRect(),
          n = window.innerHeight || document.documentElement.clientHeight;
        t.top <= n && t.bottom >= 0
          ? e.classList.add("animate")
          : e.classList.remove("animate");
      });
    }),
    e(document).ready(function () {
      var t = window.location.pathname.split("/").pop();
      e(".top-menu__menu-link").each(function () {
        var n = e(this).attr("href");
        t === n && e(this).addClass("top-menu__menu-link_active");
      });
    }),
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".masonry-item__image").forEach(function (e) {
        var t = e.getBoundingClientRect(),
          n = window.innerHeight || document.documentElement.clientHeight;
        t.top <= n && t.bottom >= 0
          ? e.classList.add("animate")
          : e.classList.remove("animate");
      });
    });
  const l = document.querySelector(".header");
  let r = 0;
  var c;
  window.addEventListener("scroll", function () {
    const e = window.pageYOffset;
    e > 0 && e > r
      ? (l.style.display = "none")
      : 0 === e && (l.style.display = "block"),
      (r = e);
  }),
    e(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 200,
      outDuration: 200,
      linkElement: 'a:not([target="_blank"]):not([href^="#"])',
      loading: !0,
      loadingParentElement: "body",
      loadingClass: "animsition-loading2",
      loadingInner:
        '<div class="spinner">\n<div class="double-bounce1"></div>\n<div class="double-bounce2"></div>\n</div>',
      timeout: !1,
      onLoadEvent: !0,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: !1,
      transition: function (e) {
        window.location.href = e;
      },
    }),
    (c = document.querySelector(".faded-block")) &&
      e(window).on("scroll", function () {
        var t = c.getBoundingClientRect().top;
        (t /= -50), e(c).css({ filter: "blur(" + t + "px)" });
      }),
    (window.onload = function () {
      if (window.innerWidth <= 768) {
        const n = window.location.pathname;
        let o = [];
        if (
          (n.includes("/real-estate.html")
            ? (o = [
                "MTS Group where UAE and Pakistan’s real estate markets",
                "converge. Explore our diverse portfolio of luxury real",
                "estate and great investment opportunities with",
                " our tailored solutions and seamless service.",
              ])
            : n.includes("/construction.html") &&
              (o = [
                "Combining the strength of 150+ experienced professionals",
                "with advanced machinery, MTS GROUP excels in delivering",
                "high quality results across the UAE and Pakistan. Experience",
                "excellence through our unwavering commitment to timely",
                "delivery and superior workmanship, backed by our",
                "expertise and innovation.",
              ]),
          o.length > 0)
        ) {
          var e = document.querySelector(".studio-intro-slide__text"),
            t = "";
          o.forEach(function (e, n) {
            t +=
              '<span style="display:block; font-size:' +
              (13 - n - 1) +
              'px;">' +
              e +
              "</span>";
          }),
            (e.innerHTML = t);
        }
      }
    }),
    (function () {
      var e = document.querySelector("body"),
        t = document.querySelector(".footer");
      if (t) {
        var n = function () {
          e.style.paddingBottom = "".concat(t.offsetHeight, "px");
        };
        t.classList.add("footer_fixed"),
          n(),
          window.addEventListener("resize", function () {
            n();
          });
      }
    })(),
    (function () {
      const e = window.innerWidth < 768,
        t = document.querySelector(".zoom-image-head"),
        n = document.querySelector(".zoom-image-head__body"),
        o = document.querySelector(".zoom-image-head__bg"),
        i = e
          ? document.querySelector(".mobileSetting")
          : document.querySelector(".zoom-image-head__bg2"),
        a = document.querySelector(".zoom-image-head__content"),
        s = document.querySelector(".zoom-counter__card"),
        l = document.querySelector(".zoom-counter__title"),
        r = document.querySelector(".zoom-counter__text"),
        c = document.querySelector(".zoom-counter__read-more");
      let d = !1,
        u = !1,
        m = t.offsetHeight;
      (o.style.willChange = "opacity, transform"),
        (i.style.willChange = "opacity, transform"),
        (a.style.willChange = "opacity, transform");
      const f = (t) => {
          const n = Math.max(1 - t, 0),
            s = 1 + 0.5 * t,
            l = (t * (e ? -10 : -15)).toFixed(2),
            r = (t * (e ? -8 : -12)).toFixed(2),
            c = (t * (e ? 2 : 4)).toFixed(2),
            d = (t * (e ? 10 : 15)).toFixed(2),
            u = (-15 * t).toFixed(2);
          (o.style.opacity = (2 * n).toFixed(2)),
            (o.style.transform = `scale(${s.toFixed(
              2
            )}) translate(${l}%, ${r}%)`);
          const m = Math.max(1 - 2 * t, 0).toFixed(2);
          (i.style.opacity = m),
            (i.style.transform = `scale(${s.toFixed(
              2
            )}) translate(${c}%, ${d}%)`);
          const f = Math.max(1 - 1.5 * t, 0).toFixed(2);
          (a.style.opacity = f), (a.style.transform = `translateY(${u}%)`);
        },
        h = () => {
          (d = !0),
            s.classList.add("visible"),
            l.classList.add("visible"),
            r.classList.add("visible"),
            c.classList.add("visible"),
            setTimeout(() => {
              (o.style.willChange = ""),
                (i.style.willChange = ""),
                (a.style.willChange = "");
            }, 500);
        };
      let g;
      const y = () => {
        m = t.offsetHeight;
      };
      window.addEventListener("resize", () => {
        clearTimeout(g), (g = setTimeout(y, 100));
      }),
        window.scrollTo(0, 0),
        (n.style.position = "fixed"),
        window.addEventListener("scroll", () => {
          u ||
            (requestAnimationFrame(() => {
              (() => {
                const e = window.scrollY || window.pageYOffset;
                e > m && !d && h(), (n.style.display = e > m ? "none" : "");
                const t = Math.min(e / m, 1);
                f(t);
              })(),
                (u = !1);
            }),
            (u = !0));
        });
    })();
})(jQuery);
