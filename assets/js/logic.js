import { songs}  from './songlist.js';
import { songFacts } from './songFacts.js';

const clientId = "13922984c05d4d3aba77b5c043f3b460";
const clientSecret = "e6837284fb2944db9cae4225ddde1b2f";
let token = "";
const searchEl = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let res = await response.json();
  console.log(res);
  token = res.access_token;
}
getToken();
setInterval(getToken, 3600000);

function handleSubmit() {
  if (searchEl.value) {
    let searchTerm = searchEl.value.trim();
    searchArtist(searchTerm);
  }
}

async function searchArtist(searchTerm) {
  const response = await fetch(
    `
        https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let res = await response.json();
  console.log(res);
}

searchBtn.onclick = handleSubmit;


const rockSelect = document.querySelector(`#rock-1990`);
const rapSelect = document.querySelector(`#rap-1990`);
const popSelect = document.querySelector(`#pop-1990`);
const countrySelect = document.querySelector(`#country-1990`);
const metalSelect = document.querySelector(`#metal-1990`);
const hipHopSelect = document.querySelector(`#hiphop-1990`);
const paragraph = document.getElementById(`#funFactP`)

const musicSelect = document.querySelector(`#container-music`);

// Listens for click to generate a song
// let clickedElement = musicSelect.addEventListener('click', function())


// Function should return random song from the songlist.js
function randomSongSelect () {
   if (clickedElement == rockSelect) {
    let songFilter = songs.filter(songs => songs.genre === "Rock");
    let randomSong = songFilter[Math.floor(Math.random()* songFilter.length)];

    console.log(randomSong);
   }
};


// Unhides image on activation of randomSongSelewct
function generateImage () {
    const imageGeneration = document.getElementById(`image`);
    const image = document.getElementById(`#song-cover`);
};


// Function filters out song facts via genre and presents a random one from the list.
function randomFactsSelect() {
    if (randomSongSelect == "Rock") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Rock");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Rap") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Rap");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Pop") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Pop");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Country") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Country");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Metal") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Metal");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Hiphop") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Hiphop");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);
    } else {
        paragraph.textContent += "Oops! Looks like a mistake was made. Please go back and select your genre option!"
    }
};