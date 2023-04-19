import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import first from "../public/images/Clients/1to-1help-logo-colour.webp";
import second from "../public/images/Clients/anarock-logo-colour.webp";
import third from "../public/images/Clients/bharat-pe-logo-colour.webp";
import fourth from "../public/images/Clients/Byju-logo-colour.webp";
import fifth from "../public/images/Clients/capgemini-logo-colour.webp";
import sixth from "../public/images/Clients/cirrus-logo-colour.webp";
import seven from "../public/images/Clients/Knowcross.jpeg";
import eight from "../public/images/Clients/live-nation-logo-colour.webp";
import nine from "../public/images/Clients/Meyer.jpeg";
import ten from "../public/images/Clients/oswaal-logo-colour.webp";
import quotes from "../public/images/quote-left.svg";
import twelve from "../public/images/Clients/tata-metaliks-logo-colour.webp";
import VSS from "../public/images/black_image_vss.webp";
import Clientspopup from "./popups/Clientspopup";

export default function Clients({cards}) {
 const [open , setOpen] = useState(false);

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
    <div className="w-full bg-[#f5f5f5] gap-12 flex flex-col font-primary items-center pb-20 justify-center">
      {/* <p className="text-[30px] sm:text-[40px] text-center font-semibold text-[#6e6e6e]">
        <span className="text-[#00a63f]">Trusted</span> by leading global brands
      </p> */}
      <Clientspopup open={open} setOpen={setOpen} />
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
        {/* <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={eleven}
            alt="clients"
          />
        </div> */}
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={twelve}
            alt="clients"
          />
        </div>
      </Slider>
      <div className="flex w-full flex-wrap items-center justify-center flex-col md:flex-row gap-5">
        {cards?.map((data, index) => (
          <div key={index} id="card1" className="card w-10/12 min-h-[400px] sm:w-[300px]  gap-8 bg-white rounded-[8px]  cursor-pointer boxShadow  h-full py-16 px-4 group flex items-center justify-center flex-col transition-all relative">
          <Image src={quotes} alt={quotes} />
          <p className="text-[16px] font-primary text-center leading-[1.8]">
            {data?.data.heading}
          </p>
          <p className="text-[14px] font-primary text-center">
          {data?.data.para}
          </p>
          <Image
          width={200}
          height={70}
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={data?.data.client_img.url}
            alt="clients"
          />
          <div  className="hover-card1 absolute gap-4 px-6 min-h-[400px] bg-white flex items-center justify-center flex-col translate-y-[80px] opacity-0 group-hover:opacity-[1]  group-hover:translate-y-1 duration-300 transition-all">
            <Image width={200}
          height={70} src={data?.data.hover_img.url} alt={VSS}className="w-[200px]" />
            <p className="text-[16px] font-primary text-center leading-[1.8]">
            {data?.data.hover_heading}
          </p>
          <p className="text-[14px] font-primary text-center">
          {data?.data.hover_para}
          </p>
          <button onClick={() => setOpen(true)} className="text-white rounded-[6px] font-primary bg-[#00a63f] px-4 py-1">Play Video</button>
          </div>
        </div>
        ))}
        
       
        
      
        
        
      </div>
    </div>
  );
}
