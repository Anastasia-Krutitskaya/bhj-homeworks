
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const slides = document.getElementsByClassName('slider__item');
let n = 0;
next.onclick = function() {
    ++n; 
    if (n >= slides.length) {
        slides[n-1].classList.remove("slider__item_active");
        n = 0;
        slides[n].classList.add("slider__item_active");
    } else { 
        slides[n-1].classList.remove("slider__item_active");
        slides[n].classList.add("slider__item_active");
    }
}
prev.onclick = function() {
    if (n <= 0) {
        slides[n].classList.remove("slider__item_active");
        n = slides.length;
        slides[n-1].classList.add("slider__item_active");
    } else { 
        slides[n].classList.remove("slider__item_active");
        slides[n-1].classList.add("slider__item_active");
    }
    --n;
}

