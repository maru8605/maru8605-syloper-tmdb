import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const MoviesCard = ( {item} ) => {

    const {title, poster, rating, id} = item;
    return (
        <div className='col-md-3 col-sm-6 mb-3'>
            <div className='card'>
                <Link to={`/movie/${id}`}>
                    <img src={poster} alt={title} className='img-fluid'/>                   
                </Link>               
            </div>   
            <div className='mt-3'>
                <p style={{fontWeight : 'bolder'}}>{title}</p>
                <div className='d-flex justify-content-between' >
                    <ReactStars count={rating} size={20} color={'#f4c10f'} className='d-inline'/>
                    <p className='fw-bold'>   {rating} </p>
                </div>
            </div>     
        </div>
    )
}

export default MoviesCard
