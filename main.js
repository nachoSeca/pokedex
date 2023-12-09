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
//cambios rocio
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const abilities = document.getElementById("abilities");
const order = document.getElementById("order");

const habitat = document.getElementById("habitat");
const description = document.getElementById("description");

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
      //10025 no tiene variacolor añadir mensaje o oimagen en ese caso
      pokemonImage.setAttribute("src", image);
      color2 = data.sprites.front_shiny;

      //añadidos rocio  - - - - - - - - - - - - - - -- - - ---

      const typeData = data.types;
      let aux = "";
      typeData.forEach((types, index) => {
        aux += types.type.name;
        if (index !== typeData.length - 1) {
          aux += ", ";
        }
      });
      type.innerHTML = aux;

      const orderData = data.id;
      if (orderData < 10) {
        order.innerHTML = "#00" + orderData;
      } else if (orderData < 100) {
        order.innerHTML = "#0" + orderData;
      } else order.innerHTML = "#" + orderData;

      const heightData = data.height;
      height.innerHTML = heightData;

      const weightData = data.weight;
      weight.innerHTML = weightData;

      const abilitiesData = data.abilities;
      let aux1 = "";
      abilitiesData.forEach((ability, index) => {
        aux1 += ability.ability.name;
        if (index !== abilitiesData.length - 1) {
          aux1 += ", ";
        }
      });
      abilities.innerHTML = aux1;

      //- - - - - - -  -- - - -- - -fin cambios rocio - -- - -- - - - -- - - -  --
    })
    .catch(() => {
      //errorMessage.innerHTML = "Error al obtener los datos de la API Pokemon";
      //errorMessage.style.display = "block";
    });
});

document.getElementById("ball").addEventListener("click", () => {
  pokemonImage.setAttribute("src", color2);
});

//- - - - - - - - - Segunda consulta a la API By Rocio

buttonSearch.addEventListener("click", () => {
  const API_URL =
    "http://pokeapi.co/api/v2/pokemon-species/" +
    document.getElementById("pokemonName").value;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      errorMessage.style.display = "none";

      const habitatData = data.habitat.name;
      habitat.innerHTML = habitatData;

      const descriptionData = data.flavor_text_entries[8].flavor_text;
      description.innerHTML = descriptionData;
    })
    .catch(() => {
      //errorMessage.innerHTML = "Error al obtener los datos de la API Pokemon Species";
      //errorMessage.style.display = "block";

      if ((habitatData = "undefined")) {
        habitat.innerHTML = "Desconocido";
      }

      if ((descriptionData = "undefined")) {
        description.innerHTML = "Desconocido";
      }
    });
});

//- - - - - - -  -- - - -- -  fin cambios rocio segunda parte- - -- - -- - - - -- - - -  --
