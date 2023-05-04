let btnViewMail = document.querySelector ('#view-mail_one')
let ViewMail = document.querySelector ('.view-mail_one')
let ViewMailOne = document.querySelector ('.block-social_mes__inner')

btnViewMail.addEventListener('click',()=>{
     if(  ViewMail.style.left === '80px') {
          ViewMail.style.left = '-450px'
          ViewMail.style.transition = '0.5s'
          ViewMailOne.style.width = '550px'
          ViewMailOne.style.transition = '0.5s'
     }
     else{
          ViewMail.style.left = '80px'
          ViewMailTwo.style.left = '80px'
          ViewMailOne.style.width = '400px'
     }
})

let btnViewMailTwo = document.querySelector ('#view-mail_two')
let ViewMailTwo = document.querySelector ('.view-mail_two')

btnViewMailTwo.addEventListener('click',()=>{
     if(  ViewMailTwo.style.left === '80px') {
          ViewMailTwo.style.left = '-465px'
          ViewMailTwo.style.transition = '0.5s'
          ViewMailOne.style.width = '550px'
          ViewMailOne.style.transition = '0.5s'
     }
     else{
          ViewMail.style.left = '80px'
          ViewMailTwo.style.left = '80px'
          ViewMailOne.style.width = '400px'
     }
})

let open_my_bio_btn = document.querySelector ('#open-my-bio')
let open_bio_block = document.querySelector ('.open-bio')

open_my_bio_btn.addEventListener('click',()=>{
     if(  open_bio_block.style.height === '0px') {
          open_bio_block.style.height = '350px'
          open_bio_block.style.transition = '0.5s'
     }
     else{
          open_bio_block.style.height = '0px'
          open_bio_block.style.transition = '1s'
     }
})

