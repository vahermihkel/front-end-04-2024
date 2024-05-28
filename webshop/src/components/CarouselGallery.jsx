import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {

  const [pictures, setPictures] = useState([]);
  const url = process.env.REACT_APP_PICTURES_DB_URL;
 
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setPictures(json || []));
  }, [url]);

  return (
    <Carousel data-bs-theme="dark">
      
      {pictures.map(p => 
      <Carousel.Item>
        <img
          src={p.url}
          alt={p.alt}
        />
        <Carousel.Caption>
          <h5>{p.header}</h5>
          <p>{p.text.length > 50 ? p.text.substring(0,50) + " ..." : p.text}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
      
    </Carousel>
  );
}

export default CarouselGallery;