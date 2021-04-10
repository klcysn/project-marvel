import react, { useState } from "react"
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './HomeCarousel.scss';

function ControlledCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div className="DivCarousel">
      <Carousel className="Carousel">
        <Carousel.Item>
          <ReactPlayer
            width='1000px'
            height="540px"
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Carousel.Item>
        <Carousel.Item>
          <ReactPlayer
            width='1000px'
            height="540px"
            url='https://www.youtube.com/watch?v=TcMBFSGVi1c' />
        </Carousel.Item>
        <Carousel.Item>
          <ReactPlayer
            width='1000px'
            height="540px"
            url='https://www.youtube.com/watch?v=nW948Va-l10' />
        </Carousel.Item>
      </Carousel>
    </div >

  );
}

export default ControlledCarousel;