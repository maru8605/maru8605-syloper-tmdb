import React, {useState, useEffect} from 'react'
import RBCarousel from 'react-bootstrap-carousel';

import {fetchMovies} from '../service';
import Carousel from './Carousel'

const CarouselContainer = () => {
    const [playingnow, setPlayingNow] = useState([])
    const {title} = playingnow

    useEffect(() => {
        const fetchApi = async() => {
            setPlayingNow( await fetchMovies())
           
        }
        
        fetchApi()
        
    }, []);

 return(
    <>
     <RBCarousel
        animation={true}
        autoplay={true}
        pauseOnVisibility={true}
        slidesshowSpeed={5000}
        version={4}
     >
        {playingnow.slice(0,5).map((item, index) => (
            <Carousel
                key={index}
                item={item}
            />
        ) )      
        }
      
     </RBCarousel>
     
     <div style={{color:'#000'}}> {title} hola</div>
    </>
 )   


    
}

export default CarouselContainer


