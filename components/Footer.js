import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hplogo from "../public/images/footer-logo.webp";
import Award_icon from "../public/images/Award_icon.webp";
import Awardpopup from "./popups/Awardpopup";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full flex items-center flex-col text-[#808080]  justify-center ">
      <div className="w-full py-9 flex items-center justify-center bg-[#2f2f2f]">
        <div className="w-full  lg:w-7/12 font-primary flex items-center justify-center flex-col gap-4">
          <Image src={hplogo} alt="hplogo" />
          <Awardpopup open={open} setOpen={setOpen} />
          <ul className="w-full flex items-center justify-center gap-6 flex-wrap">
            <li>
              <Link
                href="/"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/employers"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                EMPLOYERS
              </Link>
            </li>
            <li>
              <Link
                href="/recruitment-agencies"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                RECRUITMENT AGENCIES
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                CAREERS
              </Link>
            </li>
            <li>
              <Link
                href="https://blog.hiringplug.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                OUR HR BLOG
              </Link>
            </li>
            <li>
              <Link
                href="https://www.hiringplug.com/techhr"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                TECHHR 2022
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                CASE STUDIES
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                WHITEPAPERS
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                IN THE PRESS
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                href="/refer"
                className="text-[12px] hover:text-white cursor-pointer uppercase"
              >
                COLLABORATE
              </Link>
            </li>
            <li onClick={() => setOpen(true)} className="text-[12px] flex items-center hover:text-white cursor-pointer uppercase">
              <Image src={Award_icon} alt="Award_icon" className="w-[25px]" />
              WINNER &quot;BEST RESOURCING SOFTWARE 2019&quot;
            </li>
          </ul>
          <div className="flex items-center justify-center sm:gap-8 gap-4">
            <a
              href="https://www.facebook.com/hiringplugofficial"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faFacebookF}
              />
            </a>
            <a href="https://twitter.com/hiringplug" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/hiringplug"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faLinkedinIn}
              />
            </a>
            <a href="https://www.instagram.com/hiringplug/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faInstagramSquare}
              />
            </a>
            <a href="https://in.pinterest.com/hiringplug/">
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faPinterestP}
              />
            </a>
            <a href="https://www.youtube.com/hiringplug" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faYoutube}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+16513957580&text=Hi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-[28px] text-[#808080] hover:text-green-500 cursor-pointer"
                icon={faWhatsapp}
              />
            </a>
          </div>
          <p className="">
            <a target="_blank" rel="noreferrer" href="https://www.hiringplug.com/privacy.php" className="hover:text-white text-[14px] cursor-pointer">
              Privacy Policy
            </a>
            |
            <a target="_blank" rel="noreferrer" href="https://my.hiringplug.com/agency-recruiter-terms-of-use" className="hover:text-white text-[14px] cursor-pointer">
              
              Terms & Conditions
            </a>
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
