import React, {useState, useEffect} from 'react'
import RBCarousel from 'react-bootstrap-carousel';
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {fetchMovies} from '../service';
import Page from '../components/Page'

const Carousel = () => {
    const [playingnow, setPlayingNow] = useState([])

    useEffect(() => {
        const fetchApi = async() => {
            setPlayingNow( await fetchMovies())
           
        }
        
        fetchApi()
        
    }, []);

       const movie = playingnow.slice(0, 5).map((item, index) => {
           return (
              <div key={index}>
                  <div className='carousel-center'>
                      <img style={{height: 600}} alt={item.title} src={item.backPoster} />
                  </div>
              </div>
           )
       })
    return (
        <RBCarousel 
        
        >
            {movie}
        </RBCarousel>
    )
}

export default Carousel
