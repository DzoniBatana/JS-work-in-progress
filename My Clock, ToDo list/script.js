'use strict';

const clock = document.querySelector('.sat');
const dateLabel = document.querySelector('.datum');
const addToDoButton = document.querySelector('.addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.querySelector('.inputField');

//TODO Lista
addToDoButton.addEventListener('click', function () {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = '';
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
  });
});

//SAT
setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);

  clock.textContent = `${hour}:${min}:${sec}  `;
}, 1000);

// setInterval(function () {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = `${now.getMonth()}`.padStart(2, 0);
//   const day = `${now.getDate()}`.padStart(2, 0);
//   const dan = now.getDay();

//   console.log(dan);

//   date.textContent = `${day}/${month}/${year} ${dan}`;
//   date.textContent = new Intl.DateTimeFormat('sr-Rs').format(now);
// }, 1000);

const now = new Date();
const options = {
  day: 'numeric',
  month: 'long',
  year: '2-digit',
};
dateLabel.textContent = new Intl.DateTimeFormat('sr-RS', options).format(now);
