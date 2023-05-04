
let btn_open_slider = document.querySelector('#btn-menu')
let btn_inner_open_slider = document.querySelector('.btn__menu')
let menu__inner_open_slider = document.querySelector('.menu__inner')
let add_disable_slider = document.querySelector('#add_activ-or-disable_slider')
let menu_two__inner = document.querySelector('.menu_two__inner')
let menu_text_btn = document.querySelector('.menu_text_btn')
let close_menu = document.querySelector('#close_menu')


btn_open_slider.addEventListener('click',()=>{
    if( btn_inner_open_slider.style.top === '15px') {
        btn_inner_open_slider.style.top = '-85px';
        btn_inner_open_slider.style.transition = '1s';
        menu__inner_open_slider.style.flexGrow = '1';
        menu__inner_open_slider.style.transition = '1s';
        
        menu_two__inner.style.top = '-53px';
        menu_two__inner.style.transition = '0.8s';
        menu_text_btn.style.top = '-76px';

        close_menu.style.left = '0px'
        close_menu.style.transition = '0.8s';


        add_disable_slider.classList.add('disable_slider');
        
    }
})
close_menu.addEventListener('click',()=>{
    if( btn_inner_open_slider.style.top === '-85px') {
        btn_inner_open_slider.style.top = '15px';
        btn_inner_open_slider.style.transitionDelay = '0.5s';
        menu__inner_open_slider.style.flexGrow = '0';
        menu_two__inner.style.top = '-180px';
        close_menu.style.left = '500px'
        
    }
})

let menu_text__inner_btn_Portf = document.querySelector('#btn_Portf')
let menu_text__inner_btn_Contac = document.querySelector('#btn_Contac')
let bg_active_btn = document.querySelector('.bg_active_btn')
let bg_two_block = document.querySelector('.bg_two_block')
let bg_one_block = document.querySelector('.bg_one_block')

menu_text__inner_btn_Contac.addEventListener('click',()=>{
    if( bg_active_btn.style.left === '0%') {
        bg_active_btn.style.left = '50%';
        bg_active_btn.style.transition = '0.5s';
        menu_text__inner_btn_Contac.style.color = 'rgba(255,255,255,100%)'
        menu_text__inner_btn_Portf.style.color = 'rgba(255,255,255,55%)'
        menu_text__inner_btn_Contac.style.transition = '0.5s';
        menu_text__inner_btn_Portf.style.transition = '0.5s';

        bg_two_block.style.transform = "rotatey(0deg)";
        bg_two_block.style.transition = '0.5s';
        bg_two_block.style.transitionDelay = '0.5s';

        bg_one_block.style.transform = "rotatey(90deg)";
        bg_one_block.style.transition = '0.5s';
    }
})
menu_text__inner_btn_Portf.addEventListener('click',()=>{
    if( bg_active_btn.style.left === '50%') {
        bg_active_btn.style.left = '0%';
        bg_active_btn.style.transition = '0.5s';
        menu_text__inner_btn_Contac.style.color = 'rgba(255,255,255,55%)'
        menu_text__inner_btn_Portf.style.color = 'rgba(255,255,255,100%)'
        menu_text__inner_btn_Contac.style.transition = '0.5s';
        menu_text__inner_btn_Portf.style.transition = '0.5s';

        bg_one_block.style.transform = "rotatey(0deg)";
        bg_one_block.style.transition = '0.5s';
        bg_one_block.style.transitionDelay = '0.5s';

        bg_two_block.style.transform = "rotatey(90deg)";
        bg_two_block.style.transition = '0.5s';
        
        open_bio_block.style.height = '0px'
    }
})