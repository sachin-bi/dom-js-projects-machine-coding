let body = document.body
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let result = document.querySelector("#result")



const guessColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}

const changeColor = () => {
    let hexCode = guessColor()
    body.style.backgroundColor = hexCode
    result.textContent = `hex code: ${hexCode}`
}

let intervalID;

start.addEventListener("click", () => {
    console.log("start clicked");
    if (intervalID == null) {
        intervalID = setInterval(changeColor, 1000)
    }
})

stop.addEventListener("click", () => {
    console.log("stoping");
    clearInterval(intervalID)
    intervalID = null
})


