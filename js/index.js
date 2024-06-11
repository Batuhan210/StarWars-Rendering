/* Hamburger Menu */
function hamburgerMenu() {
  document.getElementById("navbarNav").classList.toggle("show");
}
/* fonksiyonu burada çağırdım */
document.getElementById("hmbrg").addEventListener("click", hamburgerMenu);

const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://i0.wp.com/www.thewhitetree.org/wp-content/uploads/2016/02/Leia-Organa.jpg",

    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 17,
    name: "Wedge Antilles",
    pic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/Wedge-Antilles-Star-Wars.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",

    homeworld: "corellia",
  },
  {
    id: 18,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 19,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    homeworld: "dagobah",
  },
  {
    id: 20,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

let characterList = document.getElementById("character-list");

function renderCharacters() {
  characterList.innerHTML = "";
  const row = document.createElement("div");
  row.className = "row";

  characters.forEach((character) => {
    const cardCharacter = document.createElement("div");
    cardCharacter.className = "col-md-3";
    cardCharacter.innerHTML = `
      <div class="card">
          <img src="${character.pic}"class="card-img-top" alt="${character.name}">
          <div class="card-body">
          <h2>${character.name}</h2>
            <p> Homeworld: ${character.homeworld}</p>
          </div>
        </div>
  `;
    row.appendChild(cardCharacter);
  });
  characterList.appendChild(row);

  document.getElementById("show-characters-button").innerHTML =
    "Gizle";
  document.getElementById("show-characters-button").className =
    "btn btn-danger";
  document
    .getElementById("show-characters-button")
    .removeEventListener("click", renderCharacters);
  document
    .getElementById("show-characters-button")
    .addEventListener("click", removeCharacters);
}

function removeCharacters() {
  characterList.innerHTML = "";
  document.getElementById("show-characters-button").innerHTML =
    "Göster";
  document.getElementById("show-characters-button").className =
    "btn btn-success";
  document
    .getElementById("show-characters-button")
    .removeEventListener("click", removeCharacters);
  document
    .getElementById("show-characters-button")
    .addEventListener("click", renderCharacters);
}

document
  .getElementById("show-characters-button")
  .addEventListener("click", renderCharacters);
