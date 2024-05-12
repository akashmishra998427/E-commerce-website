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