// add z-index parent`s block
if (window.matchMedia("(min-width: 3000px)").matches) {
  document.querySelector('.snowflakes-box').classList.toggle("z-0");
}


// page prise-list
let box_1 = document.querySelector('.box_1');
let box_2 = document.querySelector('.box_2');
let box_3 = document.querySelector('.box_3');
let box_4 = document.querySelector('.box_4');
let box_5 = document.querySelector('.box_5');
let box_6 = document.querySelector('.box_6');
let progressText = document.querySelector('.inner__progress-text');
let progressLine = document.querySelector('.inner__progress-line');

let thereBox = document.querySelector('.bgThreeBlock');
setInterval(() => {
  if (thereBox.style.transform === "rotateY(0deg)") {
    box_1.style.animationName = 'animBox_1';
    box_2.style.animationName = 'animBox_2';
    box_3.style.animationName = 'animBox_3';
    box_4.style.animationName = 'animBox_4';
    box_5.style.animationName = 'animBox_5';
    box_6.style.animationName = 'animBox_6';
    progressText.style.animationName = 'margin_progress-text';
    progressLine.style.animationName = 'progress-line';
  }
}, 100);




