console.log("scroll progress bar \n \n let scrollHeight = document.documentElement.scrollHeight  - document.documentElement.clientHeight; \n \n let scrollTop= document.documentElement.scrollTop; ")



let indicator = document.querySelector('.scroll-indicator .progress');


let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",scroll);

function scroll() {
    let scrollTop= document.documentElement.scrollTop;
    let curr = ((scrollTop/scrollHeight) * 100).toFixed(0);
    indicator.style.width = `${curr}%`
    
    // console.log(curr);
    
}
// console.log(scrollHeight);
