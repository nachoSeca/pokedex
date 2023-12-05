//const API_URL = "http://jsonplaceholder.typicode.com/";

const pokemonName = document.querySelector(".name");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const special_attack = document.getElementById("special_attack");
const special_defense = document.getElementById("special_defense");
const speed = document.getElementById("speed");
const errorMessage = document.getElementById("error");
const pokemonImage = document.getElementById("image_pokemon");
const buttonSearch = document.getElementById("buttonSearch");


//CONSTATNTE PARA IMAGEN VARIA COLOR POKEMON
let color2 = "";

buttonSearch.addEventListener("click", () => {
  const API_URL =
    "http://pokeapi.co/api/v2/pokemon/" +
    document.getElementById("pokemonName").value;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      errorMessage.style.display = "none";
      const name = data.forms[0].name;
      pokemonName.innerHTML = name;
      const hpData = data.stats[0].base_stat;
      hp.innerHTML = hpData;
      const attackData = data.stats[1].base_stat;
      attack.innerHTML = attackData;
      const defenseData = data.stats[2].base_stat;
      defense.innerHTML = defenseData;
      const special_attackData = data.stats[3].base_stat;
      special_attack.innerHTML = special_attackData;
      const special_defenseData = data.stats[4].base_stat;
      special_defense.innerHTML = special_defenseData;
      const speedData = data.stats[5].base_stat;
      speed.innerHTML = speedData;
      const image = data.sprites.front_default;
      pokemonImage.setAttribute("src", image);
      color2 = data.sprites.front_shiny;
    })
    .catch(() => {
      errorMessage.innerHTML = "Error al obtener los datos de la API";
      errorMessage.style.display = "block";
    });
  });
  
  document.getElementById("button_bottom_blue").addEventListener("click", () => {
    pokemonImage.setAttribute("src", color2);
  })

// PREGUNTA A ISMA SI ES BUENO HACER UNA LLAMDA PARA CADA DATO O HACERLO TODO EN LA PRIMERA LLAMADA
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     const name = data.stats[0].base_stat;
//     hp.innerHTML = name;
//   });
