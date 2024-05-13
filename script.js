const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')

    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })


let close=  document.getElementById('close')
if(close){
    close.addEventListener('click',()=>{
nav.classList.remove('active')
})
};

// start writing script for shop section
let Maniimg=document.getElementById("mainimg")
let smimg=document.getElementsByClassName("small-img")

smimg[0].onclick=function(){
    Maniimg.src =  smimg[0].src;
}
smimg[1].onclick=function(){
    Maniimg.src =  smimg[1].src;
}
smimg[2].onclick=function(){
    Maniimg.src =  smimg[2].src;
}
smimg[3].onclick=function(){
    Maniimg.src =  smimg[3].src;
}

// end of script for shop section