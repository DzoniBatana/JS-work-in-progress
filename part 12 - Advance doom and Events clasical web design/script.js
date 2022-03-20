'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//SMooth scroling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////BITNO
// Pge navigation neisplativiji nacin kada se radi sa 1000 linkova
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//EVENT delagation, jednostavniji nacin
// 1. Add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////
//Tabbed container ACTIVE OR NOT ACTIVE TODO

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');
  // Active content area, chagnge  when change active bar
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////TODO
// MENU FADE ANIMATION
const handlhover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing argument into handler
nav.addEventListener('mouseover', handlhover.bind(0.5));

nav.addEventListener('mouseout', handlhover.bind(1));

// Sticky navigation NAV TODO TODO TODO
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   //console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.add('sticky');
// });

// STICKY NAVIGATION : INTERSECTION OBSERVER API BITNO
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

/// TODO STICKY NAVIGATION
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///// REVEAL SECTION, spontano pojavljivanje naslovaTODO
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

////////////////////////BITNO
// LAZY LOADNIG IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////SLAJDEER
//////////BITNO TODO BITNO
///////////////////////////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-1200px)';
  // slider.style.overflow = 'visible';

  //Dots container
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeteDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // 0%, 100%, 200%, 300%

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeteDot(curSlide);
  };

  //Prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activeteDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activeteDot(0);
  };
  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  // -100% 0% 100% 200%

  // keyboard event
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    //e.key === 'ArrowRight' && nextSlide();
  });

  //dot coontainer
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeteDot(slide);
    }
  });
};
slider();
/*
////////////////////
////////////////////
//BITNO
//Selecting elements
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cokkies for improved functionallity and analytics.';
message.innerHTML =
  'We use cokkies for improved functionallity and analytics. <button class="btn btn--close-cookie">GOT it</button>';

//Cookie metod, notifikacija za pojavljivanje cookia
//header.prepend(message); //na pocetku pojavljivanje elemenata, i ne moze da bude na dva mesta istovremeno, ili je prepend ili append
header.append(message); // na kraju
//header.append(message.cloneNode(true)); // Sada cookie message moze da bude i gore i dole

//cookie elemnt pre i posle hedera, tacnije pojavljivanje notifikacije za cookie pre i posle hedera
//header.before(message);
//header.after(message);

// Delete elements, element za brisanje cookia, tacnije da se cookie skloni
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message); // same shit
  });

// STYLES
message.style.backgroundColor = '#37384d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// NON standard
console.log(logo.designer); // ovo nece raditi tacnije bice undefined iz razloga zato sto se to ne ocekuje da se stalvja na img
console.log(logo.getAttribute('designer')); // pomocu ovoga hoce da ocita ime dizajnera
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // prestavlja link do sliek
console.log(logo.getAttribute('src')); // predstavlja cist atribut po kojim se vodi slika

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATRIBUTES
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//DO not use this
logo.className = 'jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //BITNO ovo gore i dole je apsolutno bitna stvar i apsolutno ista stvar jer pokazuje smooth skrolanje kroz sadrzaj stranice , na razlicite nacine TODO
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // ovo ovde je najednostavniji nacin da se ista stvar primeni
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading!');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// takodje ista stvar pisana drugacije TODO
// h1.onmouseenter = function (e) {
//   alert('Bravo udario si naslov');
// };


//BITNO   BITNO  BITNO  BITNO
// RANDOM COLOR on entire nav link
//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//random color changing
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //menja boju samo linka
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation TODO
  //e.stopPropagation(); // sa ovim menja se samo boja linka, dog se pre ovoga menjalo i container i nav, a sada samo link
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //menja boju celog nav linka
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //menja boju celog nav menija
  console.log('nav', e.target, e.currentTarget);
});

//////////////////////
/////////////////////BITNO BITNO

const h1 = document.querySelector('h1');

// going donwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// GOing upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//h1.closest('.h1').style.background = 'var(--gradient-primary)';

//DOM TRAVERSING
//going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
