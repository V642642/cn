import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import hplogo from "../public/images/footer-logo.png";

export default function Footer() {
  return (
    <footer className="w-full flex items-center flex-col text-[#808080]  justify-center ">
      <div className="w-full py-9 flex items-center justify-center bg-[#2f2f2f]">
        <div className="w-full  lg:w-7/12 font-primary flex items-center justify-center flex-col gap-4">
          <Image src={hplogo} alt="hplogo" />
          <ul className="w-full flex items-center justify-center gap-6 flex-wrap">
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              HOME
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              EMPLOYERS
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              RECRUITMENT AGENCIES
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              ABOUT US
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              CAREERS
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              OUR HR BLOG
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              TECHHR 2022
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              CASE STUDIES
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              WHITEPAPERS
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              IN THE PRESS
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              TESTIMONIALS
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              CONTACT US{" "}
            </li>
            <li className="text-[12px] hover:text-white cursor-pointer uppercase">
              COLLABORATE
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon
              className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon
              className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
              icon={faInstagramSquare}
            />
            <FontAwesomeIcon
              className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
              icon={faPinterestP}
            />
          </div>
          <p className="">
            <span className="hover:text-white text-[14px] cursor-pointer">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:text-white text-[14px] cursor-pointer">
              {" "}
              Terms & Conditions
            </span>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-3  font-primary text-[12px] bg-[#252525]">
        <div className="w-full lg:w-7/12 px-2 flex items-center justify-between font-primary text-[12px] bg-[#252525]">
          <p>TalenTECH Solutions Pvt Ltd</p>
          <p>© copyright {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
