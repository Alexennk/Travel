// burger handler

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const menuCloseRef1 = document.querySelector('.header-ref-1');
    const menuCloseRef2 = document.querySelector('.header-ref-2');
    const menuCloseRef3 = document.querySelector('.header-ref-3');
    const menuCloseRef4 = document.querySelector('.header-ref-4');
    burgerItem.addEventListener('click',  () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click',  () => {
        menu.classList.remove('header-nav-active');
    });
    menuCloseRef1.addEventListener('click',  () => {
        menu.classList.remove('header-nav-active');
    });
    menuCloseRef2.addEventListener('click',  () => {
        menu.classList.remove('header-nav-active');
    });
    menuCloseRef3.addEventListener('click',  () => {
        menu.classList.remove('header-nav-active');
    });
    menuCloseRef4.addEventListener('click',  () => {
        menu.classList.remove('header-nav-active');
    });
}());


// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 800);
            });
        });
    };
    scrollTo();
}());