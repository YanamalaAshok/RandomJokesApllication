let spinnerEl = document.getElementById("spinner");
let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");


jokeBtnEl.onclick = function() {
    spinnerEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";

    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomJoke = data.value;
            spinnerEl.classList.toggle("d-none");
            jokeTextEl.textContent = randomJoke
        });
}