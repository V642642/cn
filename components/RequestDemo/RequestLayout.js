import Image from "next/image";
import React, { useState } from "react";
import DemoImage from "../../public/images/demo-cand.jpeg";
import FirstStep from "./Forms/FirstStep";
import SecondStep from "./Forms/SecondStep";

export default function RequestLayout() {
  const [step, setStep] = useState(0);


  return (
    <div className="min-h-[100vh] py-20 sm:py-1 font-primary flex items-center justify-center">
      <div className=" flex items-center  justify-center flex-col md:flex-row gap-8 lg:w-10/12 w-[95%]">
        <div className="w-full bg-gradient-to-b gap-4 from-rose-100 to-teal-100 flex md:w-[50%] rounded-[8px] sm:p-28 flex-col items-center justify-center">
          <h2 className="text-[30px]  leading-[50px] text-center md:text-[35px] font-medium">
            The Gold Standard for People Success
          </h2>
          <p className="text-[14px] font-extralight text-center">
            Gain 195% three-year ROI from People Success, cut annual employee
            review time in half, and reduce attrition by nearly 40% with
            Lattice.
          </p>
          <p className="text-[12px] font-extralight text-center">
            Lattice commissioned study by Forrester Consulting™️
          </p>

          <video
            autoPlay
            controls
            loop
            muted
            className="boxShadow w-full my-8 rounded-[8px]"
          >
            <source src="/hp.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div
        
          className="w-full  md:p-28 flex md:w-[50%] flex-col items-center justify-start"
        >
          <h2 className="text-[30px]  leading-[50px] text-center md:text-[30px] font-medium">
            Request a demo
          </h2>
          <p className="text-[18px] font-extralight text-center">
            Get a live demo & your questions answered with one of our product
            experts.
          </p>
          <Image src={DemoImage} alt={DemoImage} className="w-[120px] my-5" />
          {step === 0 ? (
            <FirstStep setStep={setStep} />
          ) : step === 1 ? (
            <SecondStep  />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
