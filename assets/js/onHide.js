import { getGenreLocal } from "./songGenerator.js";


function showDiv() {
    const selectedGenre = getGenreLocal();
    if (selectedGenre === "Rock") {
        document.getElementById('rock').style.display = "block"; 

    } else if (selectedGenre === "Rap") {
        document.getElementById('rap').style.display = "block"; 

    } else if (selectedGenre === "Pop") {
        document.getElementById('pop').style.display = "block"; 

    } else if (selectedGenre === "Country") {
        document.getElementById('country').style.display = "block"; 

    } else if (selectedGenre === "Metal") {
        document.getElementById('metl').style.display = "block"; 

    } else if (selectedGenre === "Hip-Hop/R&B") {
        document.getElementById('hip-hop-rnb').style.display = "block"; 

    }
};

document.addEventListener("DOMContentLoaded", showDiv())