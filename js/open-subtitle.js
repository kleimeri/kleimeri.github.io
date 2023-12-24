//btn
let btnOpenSlider = document.querySelector('#btn-menu');
let btnInnerOpenSlider = document.querySelector('.btn__menu').style;

let menuInnerOpenSlider = document.querySelector('.menu__inner').style;
let addDisableSlider = document.querySelector('#add_activ-or-disable_slider');
let menuTwoInner = document.querySelector('.menu_two__inner');
let menu_text_btn = document.querySelector('.menu_text_btn');
let menuTextBtn = menu_text_btn;
let closeMenu = document.querySelector('#close_menu');
//menu buttons
let menuInnerBtnPortfolio = document.querySelector('#btn_Portf').style;
let menuInnerBtnPraiseList = document.querySelector('#btn_praise').style;
let menuInnerBtnContact = document.querySelector('#btn_Contac').style;
//borderActiveBtn
let bg_active_btn = document.querySelector('.bg_active_btn');
let borderActiveBtn = bg_active_btn;
// Blocks
let bg_three_block = document.querySelector('.bg_three_block');
let bg_two_block = document.querySelector('.bg_two_block');
let bg_one_block = document.querySelector('.bg_one_block');


let menu_two = document.querySelector('.menu_two');

document.querySelector('#btn-menu').addEventListener('click', () => {
  if (btnInnerOpenSlider.top === '10px', '5px') {
    btnInnerOpenSlider.top = '-85px';
    btnInnerOpenSlider.transition = '1s';
    //menu inner
    menuInnerOpenSlider.flexGrow = '1';
    menuInnerOpenSlider.transition = '1s';
    menuInnerOpenSlider.top = '-60px';
    // menuInnerOpenSlider.background = '#000';

    bg_active_btn.style.height = '80px';
    bg_active_btn.style.transition = '1s';


    menuTwoInner.style.top = '0px';
    menu_text_btn.style.top = '0px';
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

    // borderActive
    borderActiveBtn.style.height = '80px';
    // marginTextInMenu 

    menuTextBtn.style.top = '15px';
    if (btnOpenSlider.style.top === '5px') {
      btnOpenSlider.style.top = '10px';
    }


  }
}, 500);
setInterval(() => {
  if (window.matchMedia("(max-width: 1535px)").matches) {

    bg_two_block.style.transition = '0.5s';
    bg_one_block.style.transition = '0.5s';

    // borderActive
    borderActiveBtn.style.height = '70px';
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
// setInterval(() => {
//   if (window.matchMedia("(max-width: 1535px)").matches) {

//     bg_two_block.style.transition = '0.5s';
//     bg_one_block.style.transition = '0.5s';

//     // borderActive
//     borderActiveBtn.style.height = '70px';
//     // menuText
//     menuTextBtn.style.top = '12px';
//     // changeBtnClose
//     innerBtnClose.style.height = '65px';
//     innerBtnClose.style.width = '65px';
//     if (btnOpenSlider.style.top === '10px') {
//       btnOpenSlider.style.top = '5px';
//     }
//   }
// }, 500);

// END responsive design



document.querySelector('#btn_Portf').addEventListener('click', () => {
  if (bg_active_btn.style.left === '0%', '35%', '66.2%') {
    bg_active_btn.style.left = '0%';
    bg_active_btn.style.transition = '0.5s';
    //color
    menuInnerBtnContact.color = 'rgba(255,255,255,55%)';
    menuInnerBtnPortfolio.color = 'rgba(255,255,255,100%)';
    menuInnerBtnPraiseList.color = 'rgba(255,255,255,55%)';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg
    bg_one_block.style.transform = "rotatey(0deg)";
    bg_one_block.style.transition = '0.5s';
    bg_one_block.style.transitionDelay = '0.5s';

    bg_three_block.style.transform = "rotatey(90deg)";
    bg_three_block.style.transition = '0.5s';

    bg_two_block.style.transform = "rotatey(90deg)";
    bg_two_block.style.transition = '0.5s';
  }
});
document.querySelector('#btn_praise').addEventListener('click', () => {
  if (bg_active_btn.style.left === '0%', '35%', '66.2%') {
    bg_active_btn.style.left = '35%';
    bg_active_btn.style.transition = '0.5s';
    //color 
    menuInnerBtnContact.color = 'rgba(255,255,255,55%)';
    menuInnerBtnPortfolio.color = 'rgba(255,255,255,55%)';
    menuInnerBtnPraiseList.color = 'rgba(255,255,255,100%)';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg

    bg_three_block.style.transform = "rotatey(0deg)";
    bg_three_block.style.transition = '0.5s';
    bg_three_block.style.transitionDelay = '0.5s';

    bg_two_block.style.transform = "rotatey(90deg)";
    bg_two_block.style.transition = '0.5s';

    bg_one_block.style.transform = "rotatey(90deg)";
    bg_one_block.style.transition = '0.5s';
  }
});
document.querySelector('#btn_Contac').addEventListener('click', () => {
  if (bg_active_btn.style.left === '0%', '35%', '66.2%') {
    bg_active_btn.style.left = '66.2%';
    bg_active_btn.style.transition = '0.5s';
    //color 
    menuInnerBtnContact.color = 'rgba(255,255,255,100%)';
    menuInnerBtnPraiseList.color = 'rgba(255,255,255,55%)';
    menuInnerBtnPortfolio.color = 'rgba(255,255,255,55%)';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    //bg
    bg_two_block.style.transform = "rotatey(0deg)";
    bg_two_block.style.transition = '0.5s';
    bg_two_block.style.transitionDelay = '0.5s';

    bg_three_block.style.transform = "rotatey(90deg)";
    bg_three_block.style.transition = '0.5s';

    bg_one_block.style.transform = "rotatey(90deg)";
    bg_one_block.style.transition = '0.5s';
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
    // blockBurgerMenu.classList.toggle("drop-shadow-[0px_15px_2px_rgba(30, 30, 30, 0.50)]");
  }
  else {
    blockBurgerMenu.style.height = '0px';
  }
});