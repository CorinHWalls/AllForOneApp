// import "./App.css";
import React, {useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Slider from "react-slick";
import astronaut from "../assets/astronaut.png";
import celebrating from "../assets/celebrating.png";
import education from "../assets/education.png";
import taken from "../assets/taken.png";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

const images =[astronaut, celebrating, education, taken]

function Dashboard() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Dashboard">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Dashboard;
