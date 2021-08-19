import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
import '../sass/component/_carousel.scss';


const Carousel = ({item}) => {

const {title, backPoster, id, overview} = item;

    return (  
        <div className='carrusel' >
            <div className='carousel-center img-movie'>
                <Link to={`/movie/${id}`}>
                    <img className='img-fluid position-relative' alt={title} src={backPoster}  />
                </Link> 
                <div className='description-container'>
                    <div className='overview position-absolute bottom-0 start-50 translate-middle-x   mb-2 px-2'>
                        <div className=' text-center'>{title}</div>
                        <p className=' '>{overview}</p>
                    </div>
                </div>    
            </div>            
        </div>
    
    )
}
Carousel.propTypes = {
    item: PropTypes.object.isRequired  
 }
export default Carousel;
