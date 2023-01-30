import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import howItWorks from "../public/images/how-it-works.png"
export default function Parallex() {
  return (
    <>
      {" "}
      <div id="howitworks" className="flex bg-fixed bg-no-repeat bg-cover bg-[50%]  w-full gap-2 items-center bg-[url('../public/images/img-14.jpg')]  justify-center">
        <div className="w-full md:w-8/12 py-14 flex items-center justify-around gap-5 flex-col md:flex-row">
          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-4 border-green-700">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[60px] text-white"
              />
            </div>
            <p className="text-[25px] font-primary text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6">
              I'M AN EMPLOYER
            </p>
          </div>
          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-4 border-green-700">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[60px] text-white"
              />
            </div>
            <p className="text-[25px] font-primary  text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6">
              I'M AN AGENCY
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-14 bg-blue-600 flex-col md:flex-row">
        <div className="flex w-full md:w-4/12 text-white items-center justify-center flex-col">
          <p className="text-center font-primary  text-[35px] font-semibold">How it Works</p>
          <p className="text-center font-primary text-[20px] font-medium">Power-up with RaaS<sup>TM</sup> for faster hiring.</p>
          <p className="text-center font-primary">
            Introducing the RaaSTM - 'Recruitment as a Service' Marketplace, an
            online recruitment platform which enables you to engage with
            multiple Recruiting agencies to fulfil your job requirements by
            getting access to a large pool of passive candidates and array of
            integrated tools resulting in faster hiring.
          </p>
        </div>
        <div className="flex w-full md:w-4/12 relative items-center justify-center flex-col gap-2">
        <Image src={howItWorks} alt="howItWorks" className="md:absolute top-[-155px]" />
        </div>
       
      </div>
    </>
  );
}
