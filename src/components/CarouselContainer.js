import React, {useState, useEffect} from 'react'
import RBCarousel from 'react-bootstrap-carousel';

import {fetchMovies} from '../service';
import Carousel from './Carousel'

const CarouselContainer = () => {
    const [playingnow, setPlayingNow] = useState([])

    useEffect(() => {
        const fetchApi = async() => {
            setPlayingNow( await fetchMovies())
           
        }
        
        fetchApi()
        
    }, []);

 return(
    
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
     
    
 )   


    
}

export default CarouselContainer


// const movies = playingnow.slice(0, 5).map((item, index) => {
//     return (
//         <div style={{ height: 500, width: "100%" }} key={index}>
//             <div className='carousel-center'>
//                 <img style={{height: 600}} alt={item.title} src={item.backPoster}  />
//             </div>
//         </div>
//     )
// })
// return (
//     <RBCarousel
//         animation={true}
//         autoplay={true}
//         pauseOnVisibility={true}
//         slidesshowSpeed={5000}
//         version={4}
//     >
//         {movies}
//     </RBCarousel>
// )