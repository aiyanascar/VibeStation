import { songs } from "./songlist.js";
import { songFacts } from "./songFacts.js";

const funFactParagraph = document.getElementById(`funFactP`);
const songCover = document.getElementById(`album-cover`);
const artistName = document.getElementById("artistName");
const songTitle = document.getElementById("song-title");
const artistAlbum = document.getElementById("artistAlbum");
const yearReleased = document.getElementById("yearReleased");
const genreInfo = document.getElementById("genreInfo");

// Define the setGenreSession function
function setGenreSession(genre) {
  sessionStorage.setItem("selectedGenre", genre);
}


document.addEventListener("DOMContentLoaded", function () {
  // Get all genre buttons
  var genreButtons = document.querySelectorAll(".genre-button");

  // Add click event listener to each genre button
  genreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var genre = this.dataset.genre;
      console.log("Selected Genre:", genre); // Check if genre value is correct
      setGenreSession(genre);
    });
  });
});
function getGenreSession() {
  return sessionStorage.getItem("selectedGenre");
}

// Function should return random song from the songlist.js
function randomSongSelect() {
  // Gathers session information from getGenreSession to apply it to the selectedGenre function
  const selectedGenre = getGenreSession();
  if (selectedGenre) {
    // If a selectedGenre is found, filters the songs by genre
    const songFilter = songs.filter((song) => song.genre === selectedGenre);
    if (songFilter.length > 0) {
      // If there are enough songs in the randomly selected array, picks a random one using math.floor
      let randomSong =
        songFilter[Math.floor(Math.random() * songFilter.length)];
      artistName.innerHTML = "<b>ARTIST: </b>" + randomSong.artist;
      artistAlbum.innerHTML = "<b>ALBUM: </b>" + randomSong.album;
      yearReleased.innerHTML = "<b>RELEASED IN: </b>" + randomSong.year;
      songTitle.innerHTML = randomSong.name;
      songCover.src = randomSong.image;
    } else {
      console.log("Error!");
    }
  }
}


// Function filters out song facts via genre and presents a random one from the list.
function randomFactsSelect() {
    const selectedGenre = getGenreSession();
    if (selectedGenre === "Rock") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Rock");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?: </b><br> " + songFact.fact

    } else if (selectedGenre === "Rap") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Rap");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?:  </b><br> " + songFact.fact

    } else if (selectedGenre === "Pop") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Pop");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?: </b><br> " + songFact.fact

    } else if (selectedGenre === "Country") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Country");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?: </b><br> " + songFact.fact

    } else if (selectedGenre === "Metal") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Metal");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?:  </b><br> " + songFact.fact

    } else if (selectedGenre === "Hip-Hop/R&B") {
        const decadeFilter = songFacts.filter(songFacts => songFacts.genre === "Hip Hop/ R&B");
        let songFact = decadeFilter[Math.floor(Math.random()* decadeFilter.length)];
        funFactParagraph.innerHTML = "<b>DID YOU KNOW?: </b><br> " + songFact.fact
    } else {
        paragraph.textContent += "Oops! Looks like a mistake was made. Please go back and select your genre option!"
    }
};

// Runs the randomSongSelect() and randomFactsSelect() functions as soon as the webpage is loaded.
document.addEventListener("DOMContentLoaded", function () {
    randomSongSelect();
    randomFactsSelect();
  });