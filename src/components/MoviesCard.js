import React from 'react'
import {Link} from 'react-router-dom'
const MoviesCard = ( {item} ) => {

    const {title, poster, rating, id} = item;
    return (
        <div className='col-md-3 col-sm-6'>
            <div className='card'>
                <Link to={`/movie/${id}`}>
                    <img src={poster} alt={title} className='img-fluid'/>
                    <p> Rated : {rating}</p>
                </Link>               
            </div>        
        </div>
    )
}

export default MoviesCard
