const pokemonName = document.getElementById("name");
const order = document.getElementById("order");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const special_attack = document.getElementById("special_attack");
const special_defense = document.getElementById("special_defense");
const speed = document.getElementById("speed");
const errorMessage = document.getElementById("error");
const pokemonImage = document.getElementById("image_pokemon");
const buttonSearch = document.getElementById("buttonSearch");
const image_pokemon_shiny = document.getElementById("image_pokemon_shiny");

const type = document.getElementById("type");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const abilities = document.getElementById("abilities");
const habitat = document.getElementById("habitat");
const description = document.getElementById("description");

const BUTTONSEARCH = document.getElementById("buttonSearch");
const POKEMONCARD = document.getElementById("pokemonCard");
const NAME_SMALL_LEFT = document.getElementById("name-small-left");
const NUMBER_SMALL_LEFT = document.getElementById("number-small-left");
const NAME_SMALL_RIGTH = document.getElementById("name-small-rigth");
const NUMBER_SMALL_RIGTH = document.getElementById("number-small-rigth");

//CONSTATNTE PARA IMAGEN VARIA COLOR POKEMON
/* let color2 = "";
 */

BUTTONSEARCH.addEventListener("click", () => {
  let nameleftPokemon = "";
  const API_URL =
    "http://pokeapi.co/api/v2/pokemon/" +
    document.getElementById("pokemonName").value;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      /*     errorMessage.style.display = "none";
       */
      const name = data.forms[0].name;
      pokemonName.innerHTML = name;
      const orderData = data.id;
      nameleftPokemon = orderData;
      if (orderData < 10) {
        order.innerHTML = "#00" + orderData;
      } else if (orderData < 100) {
        order.innerHTML = "#0" + orderData;
      } else order.innerHTML = "#" + orderData;
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
      const image = data.sprites.other["official-artwork"].front_default;
      pokemonImage.setAttribute("src", image);
      const color2 = data.sprites.other["official-artwork"].front_shiny;
      image_pokemon_shiny.setAttribute("src", color2);

      /*------------------------------*/
      const typeData = data.types;
      let aux = "";
      let color = "";
      typeData.forEach((types, index) => {
        aux += types.type.name;
        if (index !== typeData.length - 1) {
          aux += ", ";
        }
      });
      type.innerHTML = aux;

      /* CHANGE COLOR CARD POKEMON */
      color = typeData[0].type.name;
      switch (color) {
        case "grass":
          type.style.backgroundColor = "var(--color-pokemon-grass)";
          POKEMONCARD.style.backgroundImage = "url(/images/grass.png)";
          break;
        case "fire":
          type.style.backgroundColor = "var(--color-pokemon-fire)";
          POKEMONCARD.style.backgroundImage = "url(/images/fire.png)";
          break;
        case "water":
          type.style.backgroundColor = "var(--color-pokemon-water)";
          POKEMONCARD.style.backgroundImage = "url(/images/water.png)";
          break;
        case "electric":
          type.style.backgroundColor = "var(--color-pokemon-electric)";
          POKEMONCARD.style.backgroundImage = "url(/images/electric.png)";
          break;
        case "normal":
          type.style.backgroundColor = "var(--color-pokemon-normal)";
          POKEMONCARD.style.backgroundImage = "url(/images/normal.png)";
          break;
        case "fighting":
          type.style.backgroundColor = "var(--color-pokemon-fighting)";
          POKEMONCARD.style.backgroundImage = "url(/images/fighting.png)";
          break;
        case "poison":
          type.style.backgroundColor = "var(--color-pokemon-poison)";
          POKEMONCARD.style.backgroundImage = "url(/images/poison.png)";
          break;
        case "ground":
          type.style.backgroundColor = "var(--color-pokemon-ground)";
          POKEMONCARD.style.backgroundImage = "url(/images/ground.png)";
          break;
        case "flying":
          type.style.backgroundColor = "var(--color-pokemon-flying)";
          POKEMONCARD.style.backgroundImage = "url(/images/flying.png)";
          break;
        case "psychic":
          type.style.backgroundColor = "var(--color-pokemon-psychic)";
          POKEMONCARD.style.backgroundImage = "url(/images/psychic.png)";
          break;
        case "bug":
          type.style.backgroundColor = "var(--color-pokemon-bug)";
          POKEMONCARD.style.backgroundImage = "url(/images/bug.png)";
          break;
        case "rock":
          type.style.backgroundColor = "var(--color-pokemon-rock)";
          POKEMONCARD.style.backgroundImage = "url(/images/rock.png)";
          break;
        case "ghost":
          type.style.backgroundColor = "var(--color-pokemon-ghost)";
          POKEMONCARD.style.backgroundImage = "url(/images/ghost.png)";
          break;
        case "dragon":
          type.style.backgroundColor = "var(--color-pokemon-dragon)";
          POKEMONCARD.style.backgroundImage = "url(/images/dragon.png)";
          break;
        case "dark":
          type.style.backgroundColor = "var(--color-pokemon-dark)";
          POKEMONCARD.style.backgroundImage = "url(/images/dark.png)";
          break;
        case "steel":
          type.style.backgroundColor = "var(--color-pokemon-steel)";
          POKEMONCARD.style.backgroundImage = "url(/images/steel.png)";
          break;
        case "fairy":
          type.style.backgroundColor = "var(--color-pokemon-fairy)";
          POKEMONCARD.style.backgroundImage = "url(/images/fairy.png)";
          break;
        case "ice":
          type.style.backgroundColor = "var(--color-pokemon-ice)";
          POKEMONCARD.style.backgroundImage = "url(/images/ice.png)";
          break;
      }

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
    });
  /*  .catch(() => {
        errorMessage.innerHTML = "Error al obtener los datos de la API";
        errorMessage.style.display = "block";
      }); */

  /* SEGUNDA COLSULTA A LA API BY ROCIO */
  const API_URL2 =
    "http://pokeapi.co/api/v2/pokemon-species/" +
    document.getElementById("pokemonName").value;
  fetch(API_URL2)
    .then((response) => response.json())
    .then((data) => {
      //errorMessage.style.display = "none";

      const habitatData = data.habitat.name;
      habitat.innerHTML = habitatData;

      const descriptionData = data.flavor_text_entries[8].flavor_text;
      description.innerHTML = descriptionData;
    });
  console.log("hola " + nameleftPokemon);
  /* SMALL CARD LEFT */
  let pokemonLeftName1 = parseInt(nameleftPokemon) - 1;
  const API_URL3 = "http://pokeapi.co/api/v2/pokemon/" + pokemonLeftName1;
  fetch(API_URL3)
    .then((response) => response.json())
    .then((data) => {
      let nameSmallLeft = data.forms[0].name;
      NAME_SMALL_LEFT.innerHTML = nameSmallLeft;
      let numberSmallLeft = data.id;
      NUMBER_SMALL_LEFT.innerHTML = numberSmallLeft;
    });
});
