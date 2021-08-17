import React  from 'react'
import CarouselContainer from '../components/CarouselContainer'



const Home = () => {

    
    return (
        
        <div className='container'>
            <div className='row mt-2'>
                <div className='col'>
                    <h2 className='my-4'> Cartelera</h2>
                    
                    <CarouselContainer/>

                    <h2 className='my-4'> Peliculas </h2>
                </div>
            </div>
        </div>
        
    )
}

export default Home
