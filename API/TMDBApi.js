const API_TOKEN = "9bab1e55d37f11901e39e1c9c4df4fff"

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN+'&language=fr&query='+text
   
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}