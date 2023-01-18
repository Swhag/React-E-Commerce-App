import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { slideImages } from '../data/data';

function HeroSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100 slide-images'
          alt='First slide'
          src={slideImages[0]}
        />
        <Carousel.Caption>
          <h3>Step Into The Cool</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 slide-images'
          src={slideImages[1]}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Fashion Unscripted</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 slide-images'
          src={slideImages[2]}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Discover the Style Difference</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
