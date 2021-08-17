import axios from 'axios';

const apiKey = 'a2c5b0aa63f4810637029fdd61a1549b'
const url = 'https://api.themoviedb.org/3'
const nowPlayingUrl =  `${url}/movie/now_playing`;
const movieURL = `${url}/movie`;
const personUrl = `${url}/trending/person/week`;

//Funciones de consulta a la api
export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
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