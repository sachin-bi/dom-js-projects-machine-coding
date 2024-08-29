// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️
// https://randomuser.me/api/?result=1

let input = document.getElementById('user-input')
input.addEventListener('input', debounce(fetchData,500))

function fetchData() {
    if (input.value.length > 0) {
        console.log("call")
        fetch('https://randomuser.me/api/?result=1')
            .then((res) => res.json())
            .then((data) => displayData(data.results[0]))
            .catch((err) => console.log(`Err at fetchData():${err}`))
    }
}

function displayData(data) {
    const card = document.getElementById("user-card")
    card.style.display = "block"
    card.innerHTML = `
    <img src="${data.picture.large}" alt="photo here"/>
    <br>
    <p> Email: ${data.email} </p>
    `
}

function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        //within the delay window it'll clear previous setTimeout/fetchData, if any new req comes
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}