import React from 'react';
import one from "../../public/images/client.webp";
import two from "../../public/images/hassle-free.webp";
import three from "../../public/images/single-window.webp";
import four from "../../public/images/cloud.webp";
import five from "../../public/images/organise.webp";
import six from "../../public/images/vendor.webp";
import seven from "../../public/images/Intelligence.webp"
import simplified from "../../public/images/simplified.webp"
import Image from 'next/image';

export default function Abenifits() {
  return (
    <div className="w-full border-b-4 border-green-600  gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32">
    <p className="text-[35px] text-center text-orange-500">
      <b className="text-gray-700 ">Recruitment Agencies </b> Benefits
    </p>
    <div className="w-full lg:w-8/12 md:w-11/12  flex items-center justify-center gap-6 flex-col md:flex-row px-2">
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/client.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Boost productivity</p>
        <p className="text-center text-[14px]">
        Gain complete visibility on the performance of agencies to make data-driven decisions.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">It`&apos;`s free to join</p>
        <p className="text-center text-[14px]">
        Ubiquitous access on the cloud and regular updates using our integrated ATS.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hassle-free.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Single Window</p>
        <p className="text-center text-[14px]">
        Ubiquitous access on the cloud and regular updates using our integrated ATS.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Intelligence.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Replacement guarantee</p>
        <p className="text-center text-[14px]">
        Ubiquitous access on the cloud and regular updates using our integrated ATS.

        </p>
      </div>
    </div>
    <div className="w-full lg:w-8/12 md:w-11/12 flex items-center justify-center flex-col md:flex-row gap-6 px-2">
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/single-window.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Cloud based</p>
        <p className="text-center text-[14px]">
        Intelligent online recruitment platform with Machine learning capabilities that calibrates for a better hire every time.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Applicant Tracking System</p>
        <p className="text-center text-[14px]">
        Engage instantly and cut down on your administrative efforts of vendor onboarding.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/simplified.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Vendor Management System</p>
        <p className="text-center text-[14px]">
        With up to 90 days of replacement guarantee against any early attrition, your risks are covered.

        </p>
      </div>
      <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
        <img src={`${process.env.NEXT_PUBLIC_S3_URL}/images/cloud.webp`} alt="images" className="w-[90px]" />
        <p className="text-orange-500 text-[18px] text-center">Artificial Intelligence</p>
        <p className="text-center text-[14px]">
        With up to 90 days of replacement guarantee against any early attrition, your risks are covered.

        </p>
      </div>
    </div>
  </div>
  )
}
