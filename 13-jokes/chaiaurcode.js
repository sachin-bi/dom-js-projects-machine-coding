console.log(`Race condition ->\n\n fetch(url) on mistaken double clicks-- \n\n --but show only latestReq results 
    `)
const url = 'https://api.chucknorris.io/jokes/random';

// handle this end point with XMLHttpRequest

// handle this end point with promises
let latestReq = 0;
let displayJoke = document.querySelector("#display-joke")
let getJoke = document.querySelector("#getJoke")

getJoke.addEventListener("click", provideJoke)

function provideJoke() {
    
latestReq++;
const currReq = latestReq;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP err status:${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            if (currReq === latestReq) {    // for handling race condition
                displayJoke.innerHTML = data.value
            }
        })
        .catch(err => {
            console.log(`Error at fetching api req. : ${err}`);

        })
}
// handle the case of race condition
