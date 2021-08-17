import React, {useState, useEffect} from 'react'
import {fetchMovies} from '../service';
import MoviesCard from './MoviesCard';

const MoviesCardsContainer = () => {

    const [currentmovies, setCurrentMovies] = useState([])
    const {title} = currentmovies

    useEffect(() => {
        const fetchApi = async() => {
            setCurrentMovies( await fetchMovies())
           
        }
        
        fetchApi()
        
    }, []);

 return(
    <div className='row mt-3'>
    
    {currentmovies.map((item, index) => (
        <MoviesCard
            key={index}
            item={item}
        />
        ) )      
    }
      
    </div>
     
    
 )
}

export default MoviesCardsContainer
