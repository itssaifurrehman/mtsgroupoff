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

    (function () {
        const isMobile = window.innerWidth < 768;
        const bodyWrapper = document.querySelector(".zoom-image-head");
        const body = document.querySelector(".zoom-image-head__body");
        const bodyico = document.querySelector(".whatsapp-icon1");
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
            bodyico.style.opacity = Math.max(1 - scrollRatio * 1.5, 0).toFixed(2);
            bodyico.style.transform = `translateY(${translateContentY}%)`;
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

    // Counter Animation Code
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