import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/l1.svg";
import rightArrow from "../../assets/r1.svg";
//import loading from "../../assets/loading.svg";
import AnimatedBar from "../lottie/animated-bar";
import loading from "../../assets/loading.svg";

import "./carousel.scss";

export default function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={rightArrow} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={leftArrow} />
      </div>
    );
  }

  const photos = [
    {
      name: "1",
      url:
        "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",

      image: { loading },
    },
    {
      name: "2",
      url:
        "https://images.unsplash.com/photo-1570057625911-b768d8b8562a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=623&q=80",
    },
    {
      name: "3",
      url:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80",
    },
    {
      name: "4",
      url:
        "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    //lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //dotsClass: "slick-dots slick-thumbs",
    autoplaySpeed: 5000,

    appendDots: (dots) => (
      <div
        style={{
          //backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          color: "black",
        }}
      >
        <ul className="append" style={{}}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="ft-slick__dots--custom"
        style={
          {
            // width: "20px",
            // height: "10px",
            // color: "blue",
            // background: "black",
            // border: "1px black solid",
          }
        }
      >
        {<div className="loading" />}
      </div>
    ),

    cssEase: "linear",
    accessibility: true,

    // dotsClass: "slick-dots slick-thumb",
    //arrows: true,
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className="App" key={photo.toString()}>
              <img src={photo.url} />
              <h3 className="text">
                Live your dream
                <br /> and rise
              </h3>
              <AnimatedBar />
              {/* <h2 className="label"> {photo.name}</h2> */}
              {/* <span>
                <img src={photo.image} />
              </span> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
