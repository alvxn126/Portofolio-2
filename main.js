
let filter = document.querySelector(".filter");

let tab = document.querySelector(".tab");

let navbar = document.querySelectorAll(".navbar")

let container = document.querySelector(".container");

let onoff = false

tab.addEventListener("click", () => {
  
  filter.classList.toggle("black");
  
   container.classList.toggle("off");
  
  if (onoff === false) {
    onoff = true
     
  }
  else {
    onoff = false
  }
  
  
});

function toggle() {

  filter.classList.toggle("black");
  
   container.classList.toggle("off");
   
}

navbar.forEach((navbar) => { navbar.addEventListener("click",() => {

setTimeout( function() {

toggle()

}, 300);


});

});

filter.addEventListener("click", toggle);


let opazero = document.querySelectorAll(".opazero");

const obser = new IntersectionObserver((e) => {

  if (e[0].isIntersecting) {
    
 
  e[0].target.classList.add("show"); 
   
    

   
  } 
  
}, 
  {
threshold: 0.5
});

opazero.forEach((kotak) => {
  obser.observe(kotak)
});