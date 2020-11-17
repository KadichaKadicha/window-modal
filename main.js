let windowModal=document.querySelector('.windowModal')
let btn=document.querySelector('.myBtn')
let close=document.querySelector(".close")

btn.onclick=function (){
    windowModal.style.display='block'
}
close.onclick=function (){
    windowModal.style.display='none'
}

window.onclick=function(event){
    if(event.target===windowModal){
        windowModal.style.display='none'
    }
}







