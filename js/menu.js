$(document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });
});
var menu = document.querySelector(".menu");
var menuBtn=document.querySelector(".menu-btn");
var closeBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click",()=>{
    menu.classList.add("actives");
});
closeBtn.addEventListener("click",()=>{
    menu.classList.remove("actives");
})
