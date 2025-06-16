function jokeProgram() {
  function loadJokeOfTheDay() {
  const jokes = [
    "Почему программисты путают Хэллоуин и Рождество? Потому что 31 Oct = 25 Dec.",
    "Упал сервер. Плачет клиент. Радуется фрилансер.",
    "CSS — это искусство заставить браузер делать вид, что он тебя понял.",
    "Сколько программистов нужно, чтобы сменить лампочку? Ни одного — это аппаратная проблема.",
    "Код без багов — это миф. Или он ещё не запускался."
  ];

  const jokeEl = document.getElementById("joke-of-the-day");

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeEl.textContent = `😄 ${randomJoke}`;
}

document.addEventListener("DOMContentLoaded", loadJokeOfTheDay);

}

export default jokeProgram;