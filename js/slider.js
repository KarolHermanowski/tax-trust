//get elements from DOM
const slide = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const img = document.querySelector('.slider img');
//next slide to show
let slideCounter = 0;
//if contains class 'show' then removes it and 'active'
function removeShow(nr) {
    if (slide[nr].classList.contains('show')) {
        slide[nr].classList.remove('show');
        dot[nr].classList.remove('active');
    }
}
//add class 'hide' wchich making the slide effect
function hideSlide(nr) {
    slide[nr].classList.add('hide');

    setTimeout(() => {
        if (slide[nr].classList.contains('hide')) {
            slide[nr].classList.remove('hide');
        }
    }, 500);
}
//show next slide
function changeSlide() {
    removeShow(slideCounter);
    hideSlide(slideCounter);
    //chceck if slideCounter is in scope of slide array and add rgiht class
    if (slideCounter === slide.length - 1) {
        slide[0].classList.add('show');
        dot[0].classList.add('active');
    }
    else {
        slide[slideCounter + 1].classList.add('show');
        dot[slideCounter + 1].classList.add('active');

    }

    //chceck if slideCounter is in scope of slide array and increase slideCounter or turn it to 0
    if (slideCounter === slide.length - 1)
        slideCounter = 0;
    else
        slideCounter++;


}
//assign interval to the variable
let changeSlideInterval = setInterval(changeSlide, 3500);
//change slide to previous if its click
previous.addEventListener('click', () => {

    if (slideCounter > 0) {
        clearInterval(changeSlideInterval);
        removeShow(slideCounter);
        hideSlide(slideCounter);
        // console.log(slideCounter);
        slide[slideCounter - 1].classList.add('show');
        dot[slideCounter - 1].classList.add('active');
        changeSlideInterval = setInterval(changeSlide, 3000);
        slideCounter--;
    }


}, false);
//change slide to next if its click
next.addEventListener('click', () => {
    if (slideCounter < slide.length - 1) {
        clearInterval(changeSlideInterval);
        changeSlide();
        changeSlideInterval = setInterval(changeSlide, 3000);
    }
}, false);

// //change slider height
// window.addEventListener('resize', () => {
//     if (img.offsetHeight != 0)
//         slider.style.height = img.offsetHeight + 'px';
// }, false)
// window.addEventListener('load', () => {
//     slider.style.height = img.offsetHeight + 'px';
// }, false)