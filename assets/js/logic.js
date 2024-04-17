import songs from 'songlist.js';
import songfacts from 'script.js';

const rockSelect = document.querySelector(`#rock-1990`);
const rapSelect = document.querySelector(`#rap-1990`);
const popSelect = document.querySelector(`#pop-1990`);
const countrySelect = document.querySelector(`#country-1990`);
const metalSelect = document.querySelector(`#metal-1990`);
const hipHopSelect = document.querySelector(`#hiphop-1990`);
const paragraph = document.getElementById(`#funFactP`)

// Listens for click to generate a song
rockSelect.addEventListener(onclick, randomSongSelect(songs.genre("Rock")))



// Function should return 
// function randomSongSelect () {
    
// }


// Unhides image on activation of randomSongSelewct
function generateImage () {
    const imageGeneration = document.getElementById(`image`);
    const image = document.getElementById(`#song-cover`);
};


// Function filters out song facts via genre and presents a random one from the list.
function randomFactsSelect() {
    if (randomSongSelect == "Rock") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Rock");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Rap") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Rap");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Pop") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Pop");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Country") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Country");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Metal") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Metal");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);

    } else if (randomSongSelect == "Hiphop") {
        const decadeFilter = songfacts.filter(songfacts => songfacts.genre === "Hiphop");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        console.log(songFact);
    } else {
        paragraph.textContent += "Oops! Looks like a mistake was made. Please go back and select your genre option!"
    }
};