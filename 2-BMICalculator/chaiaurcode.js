console.log("fast do it")



const form = document.getElementById("formBMI")

form.addEventListener("submit", (event) => {
    event.preventDefault();     // Prevent default form submission

    let height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    height = (height / 100)
    height = Math.pow(height, 2)
    // console.log("height- ",height);
    // console.log("weight- ",weight);
    let result = weight / height
    result = result.toFixed(1)
    console.log("result", result);

    let displayANS = document.getElementById('results')
    displayANS.textContent = "BMI is " + result
    document.getElementById('height').value = ""
    document.getElementById('weight').value = ""

})