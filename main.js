const menuBtn = document.querySelector(".menu-btn");
const toggle = document.querySelector(".toggle-options");
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        toggle.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        toggle.classList.remove('open');
        menuOpen = false;
    }
});