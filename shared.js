// alert('This works!')

var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var modalNoButton= document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
//for modal and backdrop

var ctaButton=document.querySelector('.main-nav__item--cta');

var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');
//for side bar

console.dir(backdrop.style['background-image']);
// backdrop.style.display='block';
// console.dir(selectPlanButtons);

for (var i=0; i<selectPlanButtons.length; i++) {
    
    selectPlanButtons[i].addEventListener('click',function(){
        // modal.style.display='block';
        // backdrop.style.display='block';
        // modal.className=open; //this will actually overwrite the complete classList
        modal.classList.add('open');
        backdrop.style.display='block';
        setTimeout(function(){
            backdrop.classList.add('open');
        },10);
        // backdrop.classList.add('open');
    })
}

// backdrop.addEventListener('click', function(){
//     modal.style.display='none';
//     backdrop.style.display='none';
// })

// modalNoButton.addEventListener('click', function(){
//     modal.style.display='none';
//     backdrop.style.display='none';
// })
//this above code can be written as below for code reduce

// backdrop.addEventListener('click', closeModal);
// modalNoButton.addEventListener('click', closeModal);

// function closeModal(){
//     modal.style.display='none';
//     backdrop.style.display='none';
// }
//we can write it here or in FOR loop as below

// backdrop.addEventListener('click', closeModal);
backdrop.addEventListener('click', function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
    });


if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
 }

 function closeModal() {
    // modal.style.display='none';
    // backdrop.style.display='none'; //second way for it is below
   if(modal){
    modal.classList.remove('open');
   }
    backdrop.classList.remove('open');
    setTimeout(function(){
        backdrop.style.display='none';
    },200);
    // backdrop.classList.remove('open');
}


toggleButton.addEventListener('click', function(){
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    setTimeout(function(){
        backdrop.classList.add('open');
    },10);
    // 10 as a 2nd argument means 10ms here
    // backdrop.classList.add('open');
})

ctaButton.addEventListener('animationstart',function(event){
    console.log('Animation Started', event);
})

ctaButton.addEventListener('animationstend',function(event){
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration',function(event){
    console.log('Animation Iteration ', event);
})