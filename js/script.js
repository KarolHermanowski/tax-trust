const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const menuList = document.querySelector('.nav ul')
const target = document.querySelectorAll('a');
const header = document.querySelector('.header');
const goTop = document.querySelector('.goTop');


const offerLink = document.querySelector('#offerLink');
const offer = document.querySelector('.offer');
const priceListLink = document.querySelector('#priceListLink');
const priceList = document.querySelector('.priceList');
const customerZoneLink = document.querySelector('#customerZoneLink');
const customerZone = document.querySelector('.customerZone');
const contactLink = document.querySelector('#contactLink');
const contact = document.querySelector('.contact');
// click hamburger
hamburger.addEventListener('click', () => {
  if (nav.classList.contains('isClick')) {
    nav.classList.remove('isClick');
  } else {
    nav.classList.add('isClick');
  }
}, false);
//click link in ul in main menu
menuList.addEventListener('click', (e) => {
  if (e.target.localName == "a") {
    nav.classList.remove('isClick');
  }

}, false);
const navY = nav.offsetTop;

// responsive, remove class isClick
window.addEventListener('resize', () => {
  if (window.innerWidth > 640 && window.innerWidth < 1024) {
    if (nav.classList.contains('isClick')) {
      nav.classList.remove('isClick');
    }
  }
});

// show goTop button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    goTop.classList.add('showGoTop');
  }
  else {
    goTop.classList.remove('showGoTop');
  }
}, false);

function scrollTo(target) {
  let position = pageYOffset;
  const intervalId = setInterval(goTo, 1);
  function goTo() {
    for(let i = 0; i<15; i++){
      if (position == target) {
        clearInterval(intervalId);
      }
      else if (position > target) {
        position--;
      }
      else{
        position++;
        
      }
    }
    
    scroll(0, position);
  }
}
// send to right place on website
offerLink.addEventListener('click', () => {
  scrollTo(offer.offsetTop - header.offsetHeight);
}, false);
priceListLink.addEventListener('click', () => {
  scrollTo(priceList.offsetTop - header.offsetHeight);
}, false);
customerZoneLink.addEventListener('click', () => {
  scrollTo(customerZone.offsetTop - header.offsetHeight)
}, false);
contactLink.addEventListener('click', () => {
  scrollTo(contact.offsetTop - header.offsetHeight)
}, false);


//after click in goTop button go to  point (0,0)
goTop.addEventListener('click', () => {
  scrollTo(0);
}, false);