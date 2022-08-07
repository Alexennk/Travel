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

//

(function() {
    let images = document.getElementsByClassName("destinations-pic");
    let dotFirst = document.querySelector('.dot-1');
    let dotSecond = document.querySelector('.dot-2');
    let dotThird = document.querySelector('.dot-3');
    dotFirst.addEventListener('click', firstDotClicked);
    dotSecond.addEventListener('click', secondDotClicked);
    dotThird.addEventListener('click', thirdDotClicked);
    images[0].addEventListener('click', firstDotClicked);
    images[1].addEventListener('click', secondDotClicked);
    images[2].addEventListener('click', thirdDotClicked);
    
    function firstDotClicked() {
        dotSecond.style.opacity = 0.5;
        dotThird.style.opacity = 0.5;
        dotFirst.style.opacity = 1;
        images[0].classList.remove("order-1");
        images[0].classList.remove("order-3");
        images[1].classList.remove("order-2");
        images[1].classList.remove("order-1");
        images[2].classList.remove("order-3");
        images[2].classList.remove("order-2");
        images[0].classList.add("order-2");
        images[1].classList.add("order-3");
        images[2].classList.add("order-1");
    }

    function secondDotClicked() {
        dotFirst.style.opacity = 0.5;
        dotThird.style.opacity = 0.5;
        dotSecond.style.opacity = 1;
        images[0].classList.remove("order-2");
        images[0].classList.remove("order-3");
        images[1].classList.remove("order-1");
        images[1].classList.remove("order-3");
        images[2].classList.remove("order-1");
        images[2].classList.remove("order-2");
        images[0].classList.add("order-1");
        images[1].classList.add("order-2");
        images[2].classList.add("order-3");
    }

    function thirdDotClicked() {
        dotFirst.style.opacity = 0.5;
        dotSecond.style.opacity = 0.5;
        dotThird.style.opacity = 1;
        images[0].classList.remove("order-1");
        images[0].classList.remove("order-2");
        images[1].classList.remove("order-2");
        images[1].classList.remove("order-3");
        images[2].classList.remove("order-1");
        images[2].classList.remove("order-3");
        images[0].classList.add("order-3");
        images[1].classList.add("order-1");
        images[2].classList.add("order-2");
    }
}());


(function() {
    const loginButton = document.querySelector('.header-form');
    const loginButtonBurger = document.querySelector('.header-button');
    const loginForm = document.querySelector('.login-box');
    const toggleForm = function () {
        loginForm.classList.toggle("open");
    }
    
    loginButton.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleForm();
    });

    loginButtonBurger.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleForm();
    });
    
    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_form = target == loginForm || loginForm.contains(target);
        const its_button = target == loginButton || target == loginButtonBurger;
        const form_is_active = loginForm.classList.contains("open");
    
        if (!its_form && !its_button && form_is_active) {
            toggleForm();
        }
    });
}());

let loginFlag = 0;

function registerRefClicked() {
    if (!loginFlag) {
        document.querySelector('.login-title').textContent = 'Create account';
        document.querySelectorAll('.login-element').forEach(button => {
            button.style.display = 'none';
        });
        document.querySelector('.login-form-or-line').style.display = 'none';
        document.querySelector('.login-sign-in-button').textContent = 'Sign Up';
        document.querySelector('.login-form-ref').style.display = 'none';
        document.querySelector('.login-form-register-text').textContent = 'Already have an account?';
        document.querySelector('.login-form-register-ref').textContent = 'Log in';
        document.querySelector('.login-box').style.marginTop = '-189px';
        loginFlag = 1;
    }
    else if (loginFlag) {
        document.querySelector('.login-title').textContent = 'Log in to your account';
        document.querySelectorAll('.login-element').forEach(button => {
            button.style.display = 'block';
        });
        document.querySelector('.login-form-or-line').style.display = 'flex';
        document.querySelector('.login-sign-in-button').textContent = 'Sign In';
        document.querySelector('.login-form-ref').style.display = 'block';
        document.querySelector('.login-form-register-text').textContent = "Don't have an account?";
        document.querySelector('.login-form-register-ref').textContent = 'Register';
        document.querySelector('.login-box').style.marginTop = '-278px';
        loginFlag = 0;
    }
}