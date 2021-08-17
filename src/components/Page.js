import React from 'react'
import Carousel  from 'react-bootstrap-carousel'
const Page = ({item}) => {
const {title, backPoster} = item
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={backPoster}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{title}</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    )
}

export default Page
//<div key={index}>
    //              <div className='carousel-center'>
    //                  <img style={{height: 600}} alt={item.title} src={item.backposter} />
    //              </div>
    //          </div>