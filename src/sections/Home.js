import React  from 'react'
import CarouselContainer from '../components/CarouselContainer'
import MoviesCardsContainer from '../components/MoviesCardsContainer'


const Home = () => {

    
    return (
        
        <div className='container'>
            <div className='row mt-2'>
                <div className='col'>
                    <h2 className='my-4'> Cartelera</h2>
                    
                    <CarouselContainer/>

                    <h2 className='my-4'> Peliculas </h2>

                    <MoviesCardsContainer/>
                </div>
            </div>
        </div>
        
    )
}

export default Home
