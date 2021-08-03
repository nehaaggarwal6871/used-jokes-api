const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// GET https://icanhazdadjoke.com/

// ********* using PROMISES ********

// const generateJokes = () => {

//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data) => (jokes.innerHTML = data.joke))
//     .catch((err) => {
//       console.log(err);
//     });
// };

// *********** Using async await *************

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await response.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
