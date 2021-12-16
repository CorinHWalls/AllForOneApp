import React, { useState } from "react";
import Slider from "react-slick";
import hello from "../assets/SayHello.png";
import askingquestion from "../assets/AskingQuestions.png";
import addingNumbers from "../assets/AddingNumbers.png";
import reverse from "../assets/Reverse.png";
import oddEven from "../assets/OddEven.png";
import GreaterOrLess from "../assets/GreaterLess.png";
import magic8ball from "../assets/8Ball.png";
import madlibs from "../assets/MadLibs.jpg";
import restaurant from "../assets/Picker.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  hello,
  askingquestion,
  GreaterOrLess,
  magic8ball,
  oddEven,
  reverse,
  addingNumbers,
  madlibs,
  restaurant,
];
const paths = [
  "/Say-Hello",
  "/Asking-Questions",
  "/Greater-Less",
  "/Magic-8-Ball",
  "Odd-Even",
  "Reverse-It",
  "/Add-2-Numbers",
  "/MadLibs",
  "/Restaurant-Picker",
];
function GameSelection() {

  const [imageIndex, setImageIndex] = useState(0);

  // Custom Arrows
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

  //////react-slick Carousel
  const settings = {
    infinite: true,
    lazyLoad: true,

    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Link to={paths[idx]}>
              <img src={img} alt={img} />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default GameSelection;
