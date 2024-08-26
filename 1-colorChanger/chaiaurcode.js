// optimized code

let container = document.querySelector('#setFeild')
let changeBgColor = (rong) => {
    container.style.backgroundColor = rong;
    document.body.style.backgroundColor = rong
};


let allButtons = document.querySelectorAll('.button');
allButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        changeBgColor(this.id);     //button.id
    });
})

