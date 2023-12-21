import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

function Home() {
  return (
    <div className='main'>
      <Carousel className="carousel" autoPlay interval={3000} transitionTime={2000} showThumbs={false} infiniteLoop>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014_1280.jpg" alt="Carousel Item 1" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg" alt="Carousel Item 2" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg" alt="Carousel Item 3" />
        </div>
      </Carousel>

      <div className="split-container">
        <div className="image-container">
          <img src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/FEATURES-OF-LIBRARY-MANAGEMENT-SYSTEM-SOFTWARE-min-768x673.png" alt="Image" />
        </div>
        <div className="content-container">
          <h2>LIBRARY MANAGEMENT SYSTEM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
