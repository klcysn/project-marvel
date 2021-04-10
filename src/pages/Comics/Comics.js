import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import fetchData from '../../helpers/fetchData'

import ComicsCard from '../../Components/ComicsCard/ComicsCard'

import './Comics.scss'

const Comics = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData('comics', '', '', '30').then(data => setData(data))
  }, [])
  console.log(data)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: 1, // optional, default to 1.
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  return (
    <div className='carousel-wrapper'>
      <h1 className='comics'>COMICS</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        // autoPlay
        // autoPlaySpeed={200}
        keyBoardControl
        // partialVisbile
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        className='carousel'
      >
        {data.map((item) => !(item.thumbnail.path.includes("image_not_available")) && <ComicsCard item={item} />)}
      </Carousel>

    </div>
  )
}

export default Comics
