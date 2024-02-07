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

    menuInnerBtnPraiseList.transition = '1s';
  }
  // open "classic menu" and "burger menu"
  if (blockBurgerMenu.style.height === '0px') {
    blockBurgerMenu.style.height = '352px';
    blockBurgerMenu.classList.add("border-[1px]");
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
    //margin-x for anim
    menuInnerBtnPraiseList.marginLeft = '0px';
    menuInnerBtnPraiseList.marginRight = '0px';
    menuInnerBtnPraiseList.transition = '1s';

    if (btnOpenSlider.style.top === '10px') {
      btnOpenSlider.style.top = '5px';
    };

    // close "classic menu" and "burger menu"
    if (blockBurgerMenu.style.height === '352px') {
      blockBurgerMenu.style.height = '0px';
      blockBurgerMenu.classList.remove("border-[1px]");
      blockBurgerMenu.classList.add("border-[0px]");
    }

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
    // marginActiveBorder for burgerMenu and classicMenu
    borderActiveBtn.style.left = '0%';
    borderActiveBtn.style.transition = '0.5s';
    menuBurgerActive.top = '85px';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';

    // render-block (off \ on)
    if (bgTwoBlock.classList.contains('hidden')) {
      bgTwoBlock.classList.remove('hidden');
      bgTwoBlock.classList.add('hidden');
    }
    if (bgThreeBlock.classList.contains('hidden')) {
      bgThreeBlock.classList.remove('hidden');
      bgThreeBlock.classList.add('hidden');
    }

    // open block "bgOneBlock"
    bgOneBlock.style.transform = "rotatey(0deg)";
    bgOneBlock.style.transition = '0.5s';
    bgOneBlock.style.transitionDelay = '0.5s';
    //
    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';
    //
    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';
  }
});
document.querySelector('#btn_praise').addEventListener('click', () => {
  if (borderActiveBtn.style.left === '0%', '35%', '66.2%') {
    // marginActiveBorder for burgerMenu and classicMenu
    borderActiveBtn.style.left = '35%';
    borderActiveBtn.style.transition = '0.5s';
    menuBurgerActive.top = '175px';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    // open block "bgThreeBlock"
    bgThreeBlock.style.transform = "rotatey(0deg)";
    bgThreeBlock.style.transition = '0.5s';
    bgThreeBlock.style.transitionDelay = '0.5s';
    //
    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';
    //
    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';
  }
});
document.querySelector('#btn_Contac').addEventListener('click', () => {
  if (borderActiveBtn.style.left === '0%', '35%', '66.2%') {
    // marginActiveBorder for burgerMenu and classicMenu
    borderActiveBtn.style.left = '66.2%';
    borderActiveBtn.style.transition = '0.5s';
    menuBurgerActive.top = '265px';
    //transition
    menuInnerBtnContact.transition = '0.5s';
    menuInnerBtnPortfolio.transition = '0.5s';
    // open block "bgTwoBlock"
    bgTwoBlock.style.transform = "rotatey(0deg)";
    bgTwoBlock.style.transition = '0.5s';
    bgTwoBlock.style.transitionDelay = '0.5s';
    //
    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';
    //
    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';

  }
});

// btnOpenBurgerMenu
let btnBurgerMenu = document.querySelector('#btnOpenBurgerMenu');
// blockBurgerMenu
let blockBurgerMenu = document.querySelector('.burger-menu');
//btns
let menuBurgerBtnPortf = document.querySelector('#menuBurgerBtnPortf').style;
let menuBurgerBtnPraise = document.querySelector('#menuBurgerBtnPraise').style;
let menuBurgerBtnContac = document.querySelector('#menuBurgerBtnContac').style;
//item active
let menuBurgerActive = document.querySelector('.burger-menu_items-active').style;


//btnOpenburgerMenu
btnBurgerMenu.addEventListener('click', () => {
  if (blockBurgerMenu.style.height === '0px') {
    blockBurgerMenu.style.height = '352px';
    blockBurgerMenu.classList.add("border-[1px]");
  } else {
    blockBurgerMenu.style.height = '0px';
    blockBurgerMenu.classList.remove("border-[1px]");
    blockBurgerMenu.classList.add("border-[0px]");
  }
  if (btnInnerOpenSlider.top === '5px') {
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

    menuInnerBtnPraiseList.transition = '1s';

  } else if (btnInnerOpenSlider.top === '-85px') {
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
    };
  }

});

document.querySelector('#menuBurgerBtnPortf').addEventListener('click', () => {
  if (menuBurgerActive.top === '85px', '175px', '265px') {
    // marginActiveBorder for burgerMenu and classicMenu
    menuBurgerActive.top = '85px';
    borderActiveBtn.style.left = '0%';
    // open block "bgOneBlock" (burgerMenu)
    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';
    //
    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';
    //
    bgOneBlock.style.transform = "rotatey(0deg)";
    bgOneBlock.style.transition = '0.5s';
    bgOneBlock.style.transitionDelay = '0.5s';
  }
});
document.querySelector('#menuBurgerBtnPraise').addEventListener('click', () => {
  if (menuBurgerActive.top === '85px', '175px', '265px') {
    // marginActiveBorder for burgerMenu and classicMenu
    menuBurgerActive.top = '175px';
    borderActiveBtn.style.left = '35%';
    // open block "bgThreeBlock" (burgerMenu)
    bgTwoBlock.style.transform = "rotatey(90deg)";
    bgTwoBlock.style.transition = '0.5s';
    //
    bgThreeBlock.style.transform = "rotatey(0deg)";
    bgThreeBlock.style.transition = '0.5s';
    bgThreeBlock.style.transitionDelay = '0.5s';
    //
    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';
  }
});
document.querySelector('#menuBurgerBtnContac').addEventListener('click', () => {
  if (menuBurgerActive.top === '85px', '175px', '265px') {
    // marginActiveBorder for burgerMenu and classicMenu
    menuBurgerActive.top = '265px';
    borderActiveBtn.style.left = '66.2%';
    // open block "bgThreeBlock" (burgerMenu)
    bgTwoBlock.style.transform = "rotatey(0deg)";
    bgTwoBlock.style.transition = '0.5s';
    bgTwoBlock.style.transitionDelay = '0.5s';
    //
    bgThreeBlock.style.transform = "rotatey(90deg)";
    bgThreeBlock.style.transition = '0.5s';
    //
    bgOneBlock.style.transform = "rotatey(90deg)";
    bgOneBlock.style.transition = '0.5s';

  }
});