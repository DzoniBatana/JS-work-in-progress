'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//ovde je napravljena funkcija za otvaranje modela
const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));

//ovde pravimo funckiju da se otvoreni prozor zatvara na komadnu
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //ovo ovde f-ja je ista kao i ona dole samo je zapisana na jednostavniji nacin
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
