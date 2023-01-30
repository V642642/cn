import Image from "next/image";
import React from "react";
import manage from "../public/images/manage.png";
import organise from "../public/images/organise.png";
import track from "../public/images/track.png";
import Intelligence from "../public/images/Intelligence.png";
import singlewindow from "../public/images/single-window.png";
import replacement from "../public/images/replacement.png";


export default function KeyBenifit() {
  return (
    <div className="w-full border-b-4 border-green-600  gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32">
      <p className="text-[35px] text-green-600">
        <b className="text-gray-700">Key</b> Benefits
      </p>
      <div className="w-full md:w-6/12 flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={manage} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">RaaS<sup>TM</sup> Marketplace</p>
          <p className="text-center text-[14px]">
          Gain complete visibility on the performance of agencies to make data-driven decisions.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={organise} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">Manage</p>
          <p className="text-center text-[14px]">
          Ubiquitous access on the cloud and regular updates using our integrated ATS.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={track} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">Track</p>
          <p className="text-center text-[14px]">
          Ubiquitous access on the cloud and regular updates using our integrated ATS.

          </p>
        </div>
      </div>
      <div className="w-full md:w-6/12 flex items-center justify-center flex-col md:flex-row gap-6">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={Intelligence} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">Artificial Intelligence</p>
          <p className="text-center text-[14px]">
          Intelligent online recruitment platform with Machine learning capabilities that calibrates for a better hire every time.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={singlewindow} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">Single window</p>
          <p className="text-center text-[14px]">
          Engage instantly and cut down on your administrative efforts of vendor onboarding.

          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image src={replacement} alt="images" className="w-[90px]" />
          <p className="text-green-600 text-[22px]">Replacement Guarantee</p>
          <p className="text-center text-[14px]">
          With up to 90 days of replacement guarantee against any early attrition, your risks are covered.

          </p>
        </div>
      </div>
    </div>
  );
}
