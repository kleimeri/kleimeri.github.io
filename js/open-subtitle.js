//btn
let btnOpenSlider = document.querySelector('#btn-menu');
let btnInnerOpenSlider = document.querySelector('.btn__menu').style;

let menuInnerOpenSlider = document.querySelector('.menu__inner').style;
let addDisableSlider = document.querySelector('#add_activ-or-disable_slider');
let menuTwoInner = document.querySelector('.menuTwo__inner');
let menuTextBtn = document.querySelector('.menuTextBtn');
let closeMenu = document.querySelector('#close_menu');
//menu buttons
let menuInnerBtnPortfolio = document.querySelector('#btn_Portf');
let menuInnerBtnPraiseList = document.querySelector('#btn_praise');
let menuInnerBtnContact = document.querySelector('#btn_Contac');
//borderActiveBtn
let borderActiveBtn = document.querySelector('.borderActiveBtn');
// Blocks
let bgThreeBlock = document.querySelector('.bgThreeBlock');
let bgTwoBlock = document.querySelector('.bgTwoBlock');
let bgOneBlock = document.querySelector('.bgOneBlock');


let menuTwo = document.querySelector('.menuTwo');

btnOpenSlider.addEventListener('click', () => {
  if (btnInnerOpenSlider.top === '10px', '5px') {
    btnInnerOpenSlider.top = '-85px';
    btnInnerOpenSlider.transition = '1s';
    //menu inner
    menuInnerOpenSlider.flexGrow = '1';
    menuInnerOpenSlider.transition = '1s';
    menuInnerOpenSlider.top = '-60px';
    // menuInnerOpenSlider.background = '#000';
    menuTwoInner.style.top = '0px';
    menuTextBtn.style.top = '0px';
    // close menu
    closeMenu.style.left = '0px';
    closeMenu.style.transition = '0.8s';

    // menuInnerBtnPraiseList.marginLeft = '73px';
    // menuInnerBtnPraiseList.marginRight = '73px';
    menuInnerBtnPraiseList.transition = '1s';
  }
});


let innerBtnClose = document.querySelector('.btn_text_close');
// responsive design

// change family menu block
setInterval(() => {
  if (window.matchMedia("(max-width: 2560px)").matches) {
    // marginTextInMenu 
    menuTextBtn.style.top = '15px';
    if (btnOpenSlider.style.top === '5px') {
      btnOpenSlider.style.top = '10px';
    }
  }
}, 500);

setInterval(() => {
  if (window.matchMedia("(max-width: 1535px)").matches) {

    bgTwoBlock.style.transition = '0.5s';
    bgOneBlock.style.transition = '0.5s';
    // menuText
    menuTextBtn.style.top = '12px';
    // changeBtnClose
    innerBtnClose.style.height = '65px';
    innerBtnClose.style.width = '65px';
    if (btnOpenSlider.style.top === '10px') {
      btnOpenSlider.style.top = '5px';
    }
  }
}, 500);
;
// END responsive design


document.querySelector('#btn_Portf').addEventListener('click', () => {
  if (borderActiveBtn.style.left === '0%', '35%', '66.2%') {
    borderActiveBtn.style.left = '0%';
    borderActiveBtn.style.transition = '0.5s';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg
    bgOneBlock.style.transform = "rotatey(0deg)";
    bgOneBlock.style.transition = '0.5s';
    bgOneBlock.style.transitionDelay = '0.5s';

    // render-block (off \ on) - oneBlock
    // not change oneBlock
    // render-block (off \ on) - twoBlock
    if (bgTwoBlock.classList.contains('hidden')) {
      bgTwoBlock.classList.remove('hidden');
      bgTwoBlock.classList.add('hidden');
    }
    // render-block (off \ on) - threeBlock
    if (bgThreeBlock.classList.contains('hidden')) {
      bgThreeBlock.classList.remove('hidden');
      bgThreeBlock.classList.add('hidden');
    }




    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';

    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';
  }
});
document.querySelector('#btn_praise').addEventListener('click', () => {
  if (borderActiveBtn.style.left === '0%', '35%', '66.2%') {
    borderActiveBtn.style.left = '35%';
    borderActiveBtn.style.transition = '0.5s';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg
    bgThreeBlock.style.transform = "rotatey(0deg)";
    bgThreeBlock.style.transition = '0.5s';
    bgThreeBlock.style.transitionDelay = '0.5s';

    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';

    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';
  }
});
document.querySelector('#btn_Contac').addEventListener('click', () => {
  if (borderActiveBtn.style.left === '0%', '35%', '66.2%') {
    borderActiveBtn.style.left = '66.2%';
    borderActiveBtn.style.transition = '0.5s';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg
    bgTwoBlock.style.transform = "rotatey(0deg)";
    bgTwoBlock.style.transition = '0.5s';
    bgTwoBlock.style.transitionDelay = '0.5s';

    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';

    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';
  }
});
closeMenu.addEventListener('click', () => {
  if (btnInnerOpenSlider.top === '-85px') {
    btnInnerOpenSlider.top = '10px';
    btnInnerOpenSlider.transitionDelay = '0.5s';

    menuInnerOpenSlider.flexGrow = '0';
    menuInnerOpenSlider.transition = '0.4s';

    btnOpenSlider.style.transition = '1.2s';

    menuTwoInner.style.top = '-180px';

    closeMenu.style.left = '1500px';

    menuInnerBtnPraiseList.marginLeft = '0px';
    menuInnerBtnPraiseList.marginRight = '0px';
    menuInnerBtnPraiseList.transition = '1s';

    if (btnOpenSlider.style.top === '10px') {
      btnOpenSlider.style.top = '5px';
    }
  }
});

// btnOpenBurgerMenu
let btnBurgerMenu = document.querySelector('#btnOpenBurgerMenu');
// blockBurgerMenu
let blockBurgerMenu = document.querySelector('.burger-menu');

btnBurgerMenu.addEventListener('click', () => {
  if (blockBurgerMenu.style.height === '0px') {
    blockBurgerMenu.style.height = '400px';
    blockBurgerMenu.classList.add("border-[1px]");
  }
  else {
    blockBurgerMenu.style.height = '0px';
    blockBurgerMenu.classList.remove("border-[1px]");
    blockBurgerMenu.classList.add("border-[0px]");


  }
});