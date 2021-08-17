import React from 'react'

const Carousel = ({item}) => {

const {title, backPoster} = item;

    return (
      
      <div style={{ height: 500, width: "100%" }} >
            <div className='carousel-center'>
                <img style={{height: 600}} alt={title} src={backPoster}  />
                
            </div>
            <div className='position-absolute bottom-0 start-50 translate-middle-x fs-3 bg-light transparent mb-2 px-2'>{title}</div>
            
        </div>
    
    )
}

export default Carousel
