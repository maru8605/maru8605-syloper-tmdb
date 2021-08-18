import React from 'react'

const ActorsCard = ({c}) => {
    
    const {img, character, name} = c

    return (
        <div className='col-md-3  text-center'>
            <img className='img-fluid mx-auto d-block rounded'
             src={img} alt={name}/>
            <p className='font-weight-bold text-center'>{name}</p>
            <p className='text-center'> {character}</p>
        </div>
    )
}

export default ActorsCard
