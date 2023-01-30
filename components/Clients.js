import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import first from "../public/images/Clients/1to-1help-logo-colour.png";
import second from "../public/images/Clients/anarock-logo-colour.png";
import third from "../public/images/Clients/bharat-pe-logo-colour.png";
import fourth from "../public/images/Clients/Byju-logo-colour.png";
import fifth from "../public/images/Clients/capgemini-logo-colour.png";
import sixth from "../public/images/Clients/cirrus-logo-colour.png";
import seven from "../public/images/Clients/Knowcross.jpeg";
import eight from "../public/images/Clients/live-nation-logo-colour.png";
import nine from "../public/images/Clients/Meyer.jpeg";
import ten from "../public/images/Clients/oswaal-logo-colour.png";
import eleven from "../public/images/Clients/Protiviti_Logo.jpg";
import twelve from "../public/images/Clients/tata-metaliks-logo-colour.png";

export default function Clients() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex items-center py-10 justify-center">
      <Slider {...settings} className="w-full">
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={first}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={second}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={third}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={fourth}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={fifth}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={sixth}
            alt="clients"
          />
        </div>
        {/* <div>
        <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={seven} alt="clients" />
      </div> */}
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={eight}
            alt="clients"
          />
        </div>
        {/* <div>
        <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={nine} alt="clients" />
      </div> */}
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={ten}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={eleven}
            alt="clients"
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={twelve}
            alt="clients"
          />
        </div>
      </Slider>
    </div>
  );
}
