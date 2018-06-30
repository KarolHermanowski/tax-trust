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
// clicking hamburger
hamburger.addEventListener('click', () => {
  if (nav.classList.contains('isClick')) {
    nav.classList.remove('isClick');
  } else {
    nav.classList.add('isClick');
  }
}, false);
//clicking link in ul in main menu
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


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    goTop.classList.add('showGoTop');
  }
  else {
    goTop.classList.remove('showGoTop');
  }

  if (window.pageYOffset > 100 && window.innerWidth > 640) {
    header.classList.add('scrollSticky');
  }
  else
    header.classList.remove('scrollSticky');
}, false);

offerLink.addEventListener('click', () => {
  scroll(0, 0);
}, false);
priceListLink.addEventListener('click', () => {
  scroll(0, priceList.offsetTop - header.offsetHeight);
}, false);
customerZoneLink.addEventListener('click', () => {
  scroll(0, customerZone.offsetTop - header.offsetHeight)
}, false);
contactLink.addEventListener('click', () => {
  scroll(0, contact.offsetTop - header.offsetHeight)
}, false);



goTop.addEventListener('click', () => {
  scroll(0, 0);
}, false);