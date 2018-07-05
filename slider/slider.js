//get elements from DOM
const slide = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');
//next slide to show
let slideCounter = 1;
//if contains class 'active' then removes it
function removeActive() {
    for (let i = 0; i < slide.length; i++) {
        if (slide[i].classList.contains('active')) {
            slide[i].classList.remove('active');
            dot[i].classList.remove('active');
        }
    }
}
//show next slide
function changeSlide() {
    removeActive();
    slide[slideCounter].classList.add('active');
    dot[slideCounter].classList.add('active');
    if (slideCounter === slide.length - 1)
        slideCounter = 0;
    else
        slideCounter++;

}
//assign interval to the variable
let changeSlideInterval = setInterval(changeSlide, 10000);
//change slide after click on dot below the slide
for (let i = 0; i < dot.length; i++) {
    //add event for dots
    dot[i].addEventListener('click', () => {
        //assign index to variable
        const slideNumber = i;
        //turn off the interva
        clearInterval(changeSlideInterval);
        removeActive();
        //add class to clicked dots and to the right slide
        slide[slideNumber].classList.toggle('active');
        dot[slideNumber].classList.toggle('active');
        //change value off slideCounter to show the right slide after click
        slideCounter = slideNumber + 1;
        //set new interval
        changeSlideInterval = setInterval(changeSlide, 3000);

    });
}