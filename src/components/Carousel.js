import React from 'react'

const Carousel = ({item}) => {

const {title, backPoster} = item;

    return (
      
      <div style={{ height: 500, width: "100%" }} >
            <div className='carousel-center'>
                <img style={{height: 600}} alt={title} src={backPoster}  />
                <h2>{title}</h2>
            </div>
            
            
        </div>
    
    )
}

export default Carousel
