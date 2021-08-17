import React  from 'react'
import Carousel from '../components/Carousel'



const Home = () => {

    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2 mx-4> Cartelera</h2>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Home
