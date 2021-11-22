let par = document.querySelector('.contanier').children[1];

let onset = document.querySelector('.main2,.main-span');

if (window.innerWidth <= 693) {
    par.classList.replace('main-mobile', 'main-ul');
}

onset.addEventListener('click', function () {
    par.classList.replace('main-ul', 'main-mobile');
    par.querySelector('ul').classList.toggle('hght');
})
let com = document.querySelector('.heght') //add class on the ul 

// -----------------------------------------------------------------------
// // start porgramge brunch product
// let activ = document.querySelector('.activ')
// let notactiv = document.querySelector('.notactiv')
// // End programge brunch product

// start programge brunch cv.
let allh2 = document.querySelectorAll('.con h2');

let allpp = document.querySelectorAll('.con p');

allh2.forEach((div) => {
  div.addEventListener('click',removeallclass);
  div.addEventListener('click',remo);
  div.addEventListener('click',add);
 

  
});
console.log(allh2)
// remove class active from all element

function removeallclass(){
    allh2.forEach((h2)=> {
        h2.classList.remove("active");
        this.classList.add("active")
     
        
    })   
}

// remove class act form palegrphe

function remo(){
    allpp.forEach((pp)=>{
        pp.classList.remove('act')
    })
}
//add calss act form palegrphe
function add(e){
    allh2.forEach((el)=>{
        e.target.nextElementSibling.classList.add('act')
    })
}


// End programge brunch cv.