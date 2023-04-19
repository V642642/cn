import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import agency from "../public/images/agev2.webp";
import employer from "../public/images/empv2.webp";


export default function ProductSlider() {

  
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="w-full py-20">
      <Slider {...settings}  className="w-full flex items-center justify-center">
        
        <div id="slider1" className="w-full flex items-center justify-start flex-col md:flex-row gap-2  p-2">
          <div className=" inline-flex w-full md:w-7/12">
            <Image
              src={agency}
              alt="agency"
              className="object-contain  w-full md:min-h-[500px]"
            />
          </div>

          <div className="md:w-5/12  font-primary mt-10 w-full inline-block items-center justify-center flex-col">
            <h2 className="text-[40px] font-semibold text-gray-500 leading-[1.2]">Agencies seamlessly engage with multiple employers</h2>
            <p className="text-gray-500 my-4 leading-[1.6]">
            Build your databank and propose candidates easily using resume parsing & other productivity features
            </p>
            <ul className="list-disc list-inside marker:text-green-500">
              <li>Easy to engage & communicate with Employers</li>
              <li>Multi user environment with Real time insights</li>
              <li>Transparent commercials & candidate status</li>
              <li>Continuous flow of job mandates</li>
            </ul>
          </div>
        </div>
        <div id="slider2" className="w-full gap-2 flex items-center justify-start flex-col md:flex-row p-2  ">
          <div className=" inline-flex w-full md:w-7/12">
            <Image
              src={employer}
              alt="employer"
              className="object-contain  w-full md:min-h-[500px]"
            />
          </div>

          <div className="md:w-5/12 gap-3  font-primary mt-10 w-full inline-block items-center justify-center flex-col">
            <h2 className="text-[40px] font-semibold text-gray-500 leading-[1.2]">Employers easily track and manage applicants</h2>
            <p className="text-gray-500 my-4">
              Integrated tools enable seamless management in accordance to your
              recruitment workflow and enhance recruiter’s efficiency
            </p>
            <ul className="list-disc list-inside marker:text-green-500">
              <li>Marketplace of specialist recruiters</li>
              <li>Customizable Applicant Tracking System (ATS)</li>
              <li>Easy Candidate assessment & sharing interface</li>
              <li>Multi user environment with Real time insights</li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  );
}
