import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { useFormData } from "../context";
import { cards } from "../json/blog";
import quotes from "../public/images/quote-left.svg";
import Clientspopup from "./popups/Clientspopup";

export default function Clients() {
  const [open, setOpen] = useState({state : false , url : ''});
  const { loaderProp } = useFormData();

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
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/1to-1help-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/anarock-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/bharat-pe-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/Byju-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/capgemini-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/cirrus-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        {/* <div>
        <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={seven} alt="clients" />
      </div> */}
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/live-nation-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
        {/* <div>
        <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={nine} alt="clients" />
      </div> */}
        <div className="p-3">
          <Image
            className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/oswaal-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
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
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/tata-metaliks-logo-colour.webp`}
            alt="clients"
            width={200}
            height={70}
            loader={loaderProp}
          />
        </div>
      </Slider>
      <div className="flex w-full flex-wrap items-center justify-center flex-col md:flex-row gap-5">
        {cards.map((data, index) => (
          <div
            key={index}
            id="card1"
            className="card w-10/12 min-h-[600px] sm:w-[300px]  gap-8 bg-white rounded-[8px]  cursor-pointer boxShadow  h-full py-16 px-4 group flex items-center justify-center flex-col transition-all relative"
          >
            <Image
              width={30}
              height={30}
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/quote-left.svg`}
              alt={quotes}
              loader={loaderProp}
            />
            <p className="text-[16px] font-primary text-center leading-[1.8] text-black">
              {data.heading}
            </p>
            <p className="text-[14px] font-primary text-center text-black">
              {data.para}
            </p>
            <Image
              width={200}
              height={70}
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={data.client_img}
              alt="clients"
              loader={loaderProp}
            />
            <div onClick={() => setOpen({state : true , url : data.video})} className="hover-card1 absolute gap-4 px-6 min-h-[400px] bg-white flex items-center justify-center flex-col translate-y-[80px] opacity-0 group-hover:opacity-[1]  group-hover:translate-y-1 duration-300 transition-all">
              <Image
                width={200}
                height={70}
                src={data.image}
                alt="img_url"
                className="w-[200px]"
                loader={loaderProp}
              />
              <p className="text-[16px] font-primary text-center  text-black">
                {data.heading}
              </p>
              <p className="text-[14px] font-primary text-center text-black">
                {data.para}
              </p>
              <button
                
                className="text-white rounded-[6px] font-primary bg-[#00a63f] px-4 py-1"
              >
                Play Video
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
