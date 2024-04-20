const lyricModalEl = document.getElementById(`lyricsModel`);
const lyricsbuttonlEl = document.getElementById(`showLyrics`);
const generatedSong = JSON.parse(localStorage.getItem('generatedSong'));
const modalBackgroundEl = lyricModalEl.querySelector('.modal-background');
const modalCloseEl = lyricModalEl.querySelector('.modal-close');
const cardContentEl = document.getElementById('card-content')
const artist = generatedSong.artist;
const song = generatedSong.name;
const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
console.log(url);

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => addLyrics(result))
    .catch(error => console.log('error', error));

function addLyrics(response){
    console.log(response)
    if (response.lyrics === null){
        cardContentEl.innerHTML = "No Lyrics Found";
    }
    cardContentEl.innerHTML = response.lyrics;
}

lyricsbuttonlEl.addEventListener('click', function() {
    lyricModalEl.classList.add("is-active");
})

modalBackgroundEl.addEventListener('click', function() {
    lyricModalEl.classList.remove("is-active");
})

modalCloseEl.addEventListener('click', function() {
    lyricModalEl.classList.remove("is-active");
})