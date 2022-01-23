import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images
import sliderFour from "../assets/sliderImages/sliderFour.png";
import sliderThree from "../assets/sliderImages/sliderThree.jpg";
import all from "../assets/sliderImages/all.jpeg";
import all1 from "../assets/sliderImages/all1.jpg";
import styled from "styled-components";
import { small } from "../responsive";

const SliderDiv = styled.div`
  ${small({ display: "none" })}
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all}
            alt="slideimage"
          />
        </div>
        {/* <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={nykaa}
            alt="slideimage"
          />
        </div> */}
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={sliderFour}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={sliderThree}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all1}
            alt="slideimage"
          />
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
