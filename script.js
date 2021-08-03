const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// GET https://icanhazdadjoke.com/

const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => res.json())
    .then((data) => (jokes.innerHTML = data.joke))
    .catch((err) => {
      console.log(err);
    });
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
