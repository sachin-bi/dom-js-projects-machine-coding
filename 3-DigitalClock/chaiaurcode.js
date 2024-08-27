// console.log("Do complete four before tea");




// let now = new Date()
// let formattedTime = now.toLocaleTimeString()
// let hr = now.getHours()
// let min = now.getMinutes()
// let sec = now.getSeconds()
// console.log(now);
// console.log(`Current time: ${hr}:${min}:${sec}`);
// console.log(`Current time: ${formattedTime}`);

let clock = document.querySelector("#clock")
// console.log(clock);

function setTime() {
    let now = new Date()
let formattedTime = now.toLocaleTimeString()
clock.textContent = formattedTime
}
// setTime()
const myInterval = setInterval(setTime,100)
let frezz = document.querySelector('#frezz')
frezz.addEventListener("click",()=>{
    console.log('clock frezz.!');
    clearInterval(myInterval);    
})
