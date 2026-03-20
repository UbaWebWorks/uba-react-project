import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "assets/images/FrontPageSlider/1.png";
import slider2 from "assets/images/FrontPageSlider/2.png";
import slider3 from "assets/images/FrontPageSlider/3.jpeg";
import slider4 from "assets/images/FrontPageSlider/4.jpg";
import slider5 from "assets/images/FrontPageSlider/5.jpg";
import slider6 from "assets/images/FrontPageSlider/6.jpg";
import slider7 from "assets/images/FrontPageSlider/7.jpeg";
import slider8 from "assets/images/FrontPageSlider/8.jpeg";
import slider9 from "assets/images/FrontPageSlider/9.jpeg";
import slider10 from "assets/images/FrontPageSlider/10.jpeg";
import slider11 from "assets/images/FrontPageSlider/11.jpeg";
import slider12 from "assets/images/FrontPageSlider/12.jpg";
const FrontPageCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider7} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider8} alt="Eighth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider9} alt="Ninth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider10} alt="Tenth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider11} alt="Eleventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider12} alt="Twelfth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default FrontPageCarousel;
