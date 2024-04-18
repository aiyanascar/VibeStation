import { songs}  from './songlist.js';
import { songFacts } from './songFacts.js';

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