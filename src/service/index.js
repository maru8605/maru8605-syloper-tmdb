import axios from 'axios';

const apiKey = 'a2c5b0aa63f4810637029fdd61a1549b'
const url = 'https://api.themoviedb.org/3'

const nowPlayingUrl =  `${url}/movie/now_playing`;
const movieUrl = `${url}/movie`;


// trae las peliculas estrenos
export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'es',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch(error){}
}

//Trae informacion de pelicula por id
export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'es'
            }
        });
        return data;

    } catch (error) { }
}

//trae a los actores de las peliculas
export const fetchActors = async(id) => {
    try{
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            idC: c['cast_id'],
            character : c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))
        return modifiedData;
    } catch (error) { }
}