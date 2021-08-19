import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const Card = ({item}) => {
const {id, poster_path, title, vote_average} = item
    return (
      <div className='col-md-3 col-sm-6 mb-3 mx-auto'>
      <div className='card'>
          <Link to={`/movie/${id}`}>
              <img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt={title} className='img-fluid'/>                   
          </Link>               
      </div>   
      <div className='mt-3'>
          <p style={{fontWeight : 'bolder'}}>{title}</p>
          <div className='d-flex justify-content-between' >
              <ReactStars count={vote_average} size={20} color={'#f4c10f'} className='d-inline'/>
              <p className='fw-bold'> {vote_average} </p>
          </div>
      </div>     
  </div>
    )
}

export default Card
