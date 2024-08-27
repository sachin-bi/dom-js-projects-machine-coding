let input1 = document.getElementById("input-field");
let output1 = document.getElementById("output-field");
let btns = document.querySelectorAll("button");

input1.addEventListener(
    "keyup",
    () => (output1.innerHTML = input1.value)
);


// need to do multiple optimization for multiple operations at once -> innerHTML -> innerText
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(input1.textContent);
        if (btn.classList.contains('uppercase')) {
            output1.innerHTML = output1.innerHTML.toUpperCase()
        }
        else if (btn.classList.contains('lowercase')) {
            output1.innerHTML = output1.innerHTML.toLowerCase()
        }
        else if (btn.classList.contains('capitalize')) {
            output1.innerHTML = output1.innerHTML.charAt(0).toUpperCase() + output1.innerHTML.slice(1)

        }
        else if (btn.classList.contains('italic')) {
            output1.innerHTML = `
            <i>
            ${output1.innerHTML}
            </i>
            `
        }
        else if (btn.classList.contains('underline')) {
            output1.innerHTML = `
            <u>
            ${output1.innerHTML}
            </u>
            `
        }
        else if (btn.classList.contains('bold')) {
            output1.innerHTML = `
            <b>
            ${output1.innerHTML}
            </b>
            `
        }
    })
})
