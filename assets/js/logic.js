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
