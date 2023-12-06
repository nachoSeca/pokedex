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

//CONSTATNTE PARA IMAGEN VARIA COLOR POKEMON
/* let color2 = "";
 */
const API_URL = "http://pokeapi.co/api/v2/pokemon/1";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    /*     errorMessage.style.display = "none";
     */ const name = data.forms[0].name;
    pokemonName.innerHTML = name;
    const orderData = data.id;
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
    typeData.forEach((types) => {
      aux += types.type.name + ", ";
    });

    type.innerHTML = aux;

    const heightData = data.height;
    height.innerHTML = heightData;

    const weightData = data.weight;
    weight.innerHTML = weightData;

    const abilitiesData = data.abilities;
    let aux1 = "";
    abilitiesData.forEach((ability) => {
      aux1 += ability.ability.name + ", ";
    });
    abilities.innerHTML = aux1;
  });
/*  .catch(() => {
    errorMessage.innerHTML = "Error al obtener los datos de la API";
    errorMessage.style.display = "block";
  }); */

/* SEGUNDA COLSULTA A LA API BY ROCIO */
const API_URL2 = "http://pokeapi.co/api/v2/pokemon-species/1";
fetch(API_URL2)
  .then((response) => response.json())
  .then((data) => {
    //errorMessage.style.display = "none";

    const habitatData = data.habitat.name;
    habitat.innerHTML = habitatData;

    const descriptionData = data.flavor_text_entries[8].flavor_text;
    description.innerHTML = descriptionData;
  });
