import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import HRAIAward from "../../public/images/HRAIAward.jpeg";

export default function Careerbanner() {
  return (
    <div className="w-full px-2 font-primary md:pt-20 flex-col flex bg-gradient-to-r from-violet-100 to-fuchsia-200 items-center justify-center h-[90vh] md:h-[60vh]">
      <div className="w-full flex gap-4 justify-center xl:w-8/12 lg:w-9/12 md:w-10/12 items-start md:flex-row flex-col">
        <div className="w-full md:w-6/12">
          <p className="text-[30px] leading-[55px] font-semibold md:text-[45px]">
            hiringplug<sup>TM</sup> is built on the pillars of innovation,
            integrity and relationships
          </p>
          <p className="text-[18px]">
            As we shape the future of Talent acquisition industry by crafting a
            world-class product, we rely on People - our greatest asset in
            addressing arduous challenges to fulfil our Vision.If you believe to
            have the intelligence, loyalty and passion to write our next
            chapter, we’re ready to welcome you to our family. If this resonates
            with your aspirations, we’re eager to hear from you.
          </p>
          <a href="#ActiveJobs" className="text-[15px] mt-5 inline-block   font-primary px-8 py-2 text-white rounded-[5px] bg-[#00a63f]"> <FontAwesomeIcon icon={faArrowDown} /> View Open Positions</a>
        </div>
        <div className="w-full md:w-6/12">
          <Image alt="HRAIAward" src={HRAIAward} className="w-[90%] rounded-[12px] boxShadow" />
        </div>
      </div>
    </div>
  );
}
