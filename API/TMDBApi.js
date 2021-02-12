const API_TOKEN = "9bab1e55d37f11901e39e1c9c4df4fff";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getLatestfilms(page) {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    API_TOKEN +
    "&language=fr&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getImageFilm(name) {
  if (name != null) {
    return "https://image.tmdb.org/t/p/w300" + name;
  }
}
export function getGenre() {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    API_TOKEN +
    "&language=fr-FR";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getAllMoviePerGenre(id, page) {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    API_TOKEN +
    "&language=fr-FR&with_genres=" +
    id +
    "&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
