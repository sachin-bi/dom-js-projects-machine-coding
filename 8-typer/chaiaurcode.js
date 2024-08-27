const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
let color = true
setInterval(blinkCursor,400)
function blinkCursor() {
    if (color) {
        cursor.style.backgroundColor = "black";
        color = false
    }
    else {
        cursor.style.backgroundColor = "#dbe912";
        color = true
    }
}

const words = ['Love ', 'Jhakaas ', 'mast ', 'dhinchak ', 'Weird '];
const typingDelay = 300;
const eraseDelay = 200;
const newLetterDelay = 700;

let index = 0;
let charIdx = 0;

// useEffect of js - DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay)
    }
})

function type() {

    if (words[index].length > charIdx) {
        typedTextSpan.textContent += words[index][charIdx]
        charIdx++
        setTimeout(type, typingDelay)
    }
    else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIdx > 0) {
        charIdx--
        typedTextSpan.textContent = words[index].substring(0, charIdx - 1)
        setTimeout(erase, typingDelay)
    } else {
        index++
        if (index >= words.length) {
            index = 0
        }
        setTimeout(type, newLetterDelay + 500)
    }
}
