import Image from "next/image";
import React from "react";
import manage from "../public/images/manage.webp";
import organise from "../public/images/organise.webp";
import track from "../public/images/track.webp";
import Intelligence from "../public/images/Intelligence.webp";
import singlewindow from "../public/images/single-window.webp";
import replacement from "../public/images/replacement.webp";


export default function KeyBenifit() {
  return (
    <div className="w-full border-b-4 border-green-600  gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32">
      <p className="text-[35px] text-green-600">
        <b className="text-gray-700">Key</b> Benefits
      </p>
      <div className="w-full xl:w-6/12 md:w-10/12 flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={manage} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">RaaS<sup>TM</sup> Marketplace</p>
          <p className="text-center text-[14px]">
          Gain complete visibility on the performance of agencies to make data-driven decisions.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={organise} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">Manage</p>
          <p className="text-center text-[14px]">
          Ubiquitous access on the cloud and regular updates using our integrated ATS.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={track} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">Track</p>
          <p className="text-center text-[14px]">
          Ubiquitous access on the cloud and regular updates using our integrated ATS.

          </p>
        </div>
      </div>
      <div className="w-full xl:w-6/12 md:w-10/12  flex items-center justify-center flex-col md:flex-row gap-6">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={Intelligence} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">Artificial Intelligence</p>
          <p className="text-center text-[14px]">
          Intelligent online recruitment platform with Machine learning capabilities that calibrates for a better hire every time.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={singlewindow} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">Single window</p>
          <p className="text-center text-[14px]">
          Engage instantly and cut down on your administrative efforts of vendor onboarding.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={replacement} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px] text-center">Replacement Guarantee</p>
          <p className="text-center text-[14px]">
          With up to 90 days of replacement guarantee against any early attrition, your risks are covered.

          </p>
        </div>
      </div>
    </div>
  );
}
