import React from 'react'

const ActorsCard = ({c}) => {
    
    const {img, character, name} = c

    return (
        <div className='col-md-3  text-center'>
            <img className='img-fluid mx-auto d-block rounded'
             src={img} alt={name}/>
             <div>
            <p className=' text-center'>{name}</p>
            <p className='text-center fw-bold'> {character}</p>
            </div>
        </div>
    )
}

export default ActorsCard
