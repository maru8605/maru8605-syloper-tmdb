 import React, {useState, useEffect} from 'react'
import {fetchMovieDetail} from '../service/index';
import { fetchActors } from '../service';
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import ActorsCard from '../components/ActorsCard'


const Movie = ({match}) => {
     let params = match.params

     const [moviedetail, setMovieDetail] = useState([])
     const [actors, setActors] = useState([]);

     const { title,  poster_path, overview, vote_average} = moviedetail;
     

     useEffect(() => {
         const fetchApi = async() => {
            setMovieDetail( await fetchMovieDetail(params.id))
            setActors ( await fetchActors(params.id))
         }
        
         fetchApi()
     }, [params.id])

     
    return (

        <div className='row mt-3 mb-5 mx-2'>
            <div className='col-md-8 col-sm-6'>
                <div className='container'>
                    <div className='row mt-2'>
                        <div className='col text-center'style={{width: '100%'}}>
                            <img className='img-fluid'
                                src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                                alt={title} />           
                        </div>
                    </div> 
                </div>
            </div>
            <div className='col-md-4 col-sm-6'>
                <h2>{title}</h2>
                <div className='d-flex  align-item-center' >
                    <ReactStars count={vote_average} size={20} color='#f4c10f' />
                    <p className='fw-bold ps-3'> {vote_average} </p>
                </div>
                <p className='pe-3'>{overview}</p>
                <Link to={'/'}>
                    <input
                        type='button'
                        value='Regresar'
                        className='regresar-btn'
                    />
                </Link>
            </div>
            <div className='row mt-5   '>
            {actors.slice(0, 6).map((c, i) => (
                <ActorsCard
                    key={i}
                    c={c}
                />
            ))}
            </div>
           
       </div>
    )
}

export default Movie
 //<ActorsDetails match={match}/>
//  {actors.slice(0, 6).map((index, item) => (
//                 <ActorsCard
//                     key={index}
//                     item={item}
//                 />
//             ))}