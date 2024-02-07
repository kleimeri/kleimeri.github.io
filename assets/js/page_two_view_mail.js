// BUTTONS
let btnViewMail = document.querySelector('#view-mail_one');
let btnViewMailTwo = document.querySelector('#view-mail_two');
// VIEW
let ViewMail = document.querySelector('.view-mail_one');
let ViewMailOne = document.querySelector('.block-social_mes__inner').style;
let ViewMailTwo = document.querySelector('.view-mail_two').style;

btnViewMail.addEventListener('click', () => {
  if (ViewMail.style.left === '80px') {
    ViewMail.style.left = '-450px';
    ViewMail.style.transition = '0.5s';
    ViewMailOne.maxWidth = '550px';
    ViewMailOne.transition = '0.5s';
  } else {
    ViewMail.style.left = '80px';
    ViewMailTwo.left = '80px';
    ViewMailOne.maxWidth = '400px';
  }
});

btnViewMailTwo.addEventListener('click', () => {
  if (ViewMailTwo.left === '80px') {
    ViewMailTwo.left = '-465px';
    ViewMailTwo.transition = '0.5s';
    ViewMailOne.maxWidth = '550px';
    ViewMailOne.transition = '0.5s';
  } else {
    ViewMail.style.left = '80px';
    ViewMailTwo.left = '80px';
    ViewMailOne.maxWidth = '400px';
  }

});
