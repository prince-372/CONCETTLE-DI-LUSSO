let phoneView = document.querySelector(".phoneView")
let menu = document.querySelector(".menu")
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")

menu.addEventListener("click",function(){
    phoneView.classList.toggle("show");
    document.querySelector("body").classList.toggle("overflow-hidden")
    span1.classList.toggle("span4")
    span2.classList.toggle("span5")
    span3.classList.toggle("span6")
})