let joke = document.querySelector("#joke");
let jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click", genreateJoke);
function genreateJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (console.log(data), (joke.textContent = data.value)));
}
