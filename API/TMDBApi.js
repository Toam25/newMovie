const API_TOKEN = "9bab1e55d37f11901e39e1c9c4df4fff";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&include_adult=true&query=" +
    text +
    "&page=" +
    page;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getUnComing(page = 1) {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
    API_TOKEN +
    "&language=fr&include_adult=true&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getLatestfilms(page = 1) {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    API_TOKEN +
    "&language=fr&include_adult=true&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getImageFilm(name) {
  if (name != null) {
    return "https://image.tmdb.org/t/p/w500/" + name;
  }
}
export function getGenre() {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    API_TOKEN +
    "&language=fr-FR&include_adult=true";
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
    "&include_adult=true&page=" +
    page +
    "&year=2021";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getDiscoverFilm(page = 1) {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    API_TOKEN +
    "&language=fr-Fr&include_adult=true&include_video=false&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getPopularFilm(page = 1) {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
    API_TOKEN +
    "&language=fr-Fr&sort_by=popularity.desc&include_adult=true&include_video=false&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getTopRatedFilm(page = 1) {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
    API_TOKEN +
    "&language=fr-Fr&sort_by=popularity.desc&include_adult=true&include_video=false&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export function getVideo(id, langage = "fr-Fr") {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "/videos?api_key=" +
    API_TOKEN +
    "&language=" +
    langage;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
