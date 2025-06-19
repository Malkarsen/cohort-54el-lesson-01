const JOKE_CARD = document.querySelector(".joke-card");
const JOKE = document.querySelector(".jokes");

const RANDOM_JOLE_URL = "https://official-joke-api.appspot.com/random_joke";

JOKE_CARD.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Тут мы будем отправлять запрос на сервер
  const response = await fetch(RANDOM_JOLE_URL, { method: "GET" });
  const result = await response.json();

  if(response.ok === true) {
    // тут пишем логику, когда у нас успешно пришли данные с сервера
    JOKE.textContent = `${result.setup} ${result.punchline}`

  } else {
    // тут пишем логику, когда пришла ошибка
    alert("Sorry, we have some network error, please try again!");
  }
});
