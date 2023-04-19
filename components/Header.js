import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hplogo from "../public/images/logo-header.webp";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { pathname } = useRouter();
  const [state, setState] = useState(true);
  const [close, setClose] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // const URL = `${origin}`;

  return (
    <div className="w-full h-[100px] sticky top-0  z-10 font-primary  flex items-center bg-black bg-opacity-70	 justify-center">
      <div
        className="w-11/12 xl:w-[70%] lg:w-10/12 flex py-5 items-center
        justify-between"
      >
        <Link href="/">
          
          <Image src={hplogo} alt="logo"  width={300} height={200} className="w-[250px]" />
        </Link>
        <ul className={`flex md:relative md:px-0 px-2 fixed md:flex-row items-start md:w-auto  w-[80%] flex-col top-0 right-0 md:h-auto h-[100vh] md:py-0 py-20 md:bg-opacity-100 bg-opacity-90 bg-black md:bg-transparent text-white md:items-center md:justify-between gap-2 transition-all duration-500 ease-in-out ${close ? "md:translate-x-0 translate-x-0" : "md:translate-x-0 translate-x-[1000px]"}`}>
          <FontAwesomeIcon onClick={() => setClose(!close)} icon={faTimes}  className="text-white absolute top-2 right-4 text-[30px] md:inline-block hidden"/>
          <li>
            <Link
              className={`${
                pathname === "/employers" ? "bg-[#00a63f]" : ""
              } px-3 transition-all md:py-[6px] py-2 inline-block hover:underline hover:bg-[#00a63f] border-white hover:border-white cursor-pointer font-primary  text-[14px]`}
              href="/employers"
              target="_blank"
            >
              Employers
            </Link>
          </li>
          <li className="px-3 transition-all whitespace-nowrap py-1 hover:underline hover:bg-[#00a63f]  cursor-pointer  text-[14px]">
            <Link
              target="_blank"
              className={`${
                pathname === "/recruitment-agencies" ? "bg-[#00a63f]" : ""
              } md:px-3 transition-all md:py-[6px] py-2 hover:underline hover:bg-[#00a63f]0 border-white hover:border-white cursor-pointer  text-[14px]`}
              href="/recruitment-agencies"
            >
              Recruitment Agencies
            </Link>
          </li>
          <li>
            <Link
              className="px-3 transition-all whitespace-nowrap md:py-[6px] py-2 hover:underline hover:bg-[#00a63f]  cursor-pointer  text-[14px]"
              target={pathname === "/" ? "" : "_blank"}
              href={`${origin}/#howitworks`}
            >
              How it Works
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/resources" ? "bg-[#00a63f]" : ""
            } px-3 group md:inline-flex gap-1 hidden transition-all py-1 relative  cursor-pointer  text-[14px]`}
          >
            Resources <FontAwesomeIcon icon={faCaretDown} />
            <ul className="flex transition-all duration-300 h-0 group-hover:h-auto  md:hover:bg-[#00a63f] ease-in-out md:opacity-0 md:group-hover:opacity-[1] top-[25px] left-0 translate-y-9 group-hover:translate-y-0 flex-col items-start py-4 rounded-[5px] justify-center md:absolute bg-[#00a63f] w-[120px]">
              <li>
                <Link
                  className="px-3 transition-all py-1  inline-block hover:underline cursor-pointer  text-[14px]"
                  href={`https://blog.hiringplug.com/`}
                  target="_blank"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  className={` px-3 transition-all inline-block py-1 hover:underline  cursor-pointer  text-[14px]`}
                  href={`/resources`}
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 transition-all py-1 inline-block hover:underline border-white  cursor-pointer  text-[14px]"
                  target="_blank"
                  href="/about-us"
                >
                  In the press
                </Link>
              </li>
            </ul>
          </li>
          <li className="md:hidden  ">
            <span
              onClick={() => setState(!state)}
              className={` ${
                pathname === "/resources" ? "bg-[#00a63f]" : ""
              } px-3  md:hidden inline-flex transition-all py-1 relative  cursor-pointer  text-[14px]`}
            >
              
              Resources <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <ul
              className={`flex items-start px-2  justify-center flex-col transition-height duration-500 ease-in-out ${
                state ? "h-0 p-0 overflow-hidden" : "min-h-10 "
              } `}
            >
              <li>
                <Link
                  className="px-3 transition-all py-1  inline-block hover:underline cursor-pointer  text-[14px]"
                  href={`https://blog.hiringplug.com/`}
                  target="_blank"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  className={` px-3 transition-all inline-block py-1 hover:underline  cursor-pointer  text-[14px]`}
                  href={`/resources`}
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 transition-all py-1 inline-block hover:underline border-white  cursor-pointer  text-[14px]"
                  target="_blank"
                  href="/about-us"
                >
                  In the press
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="px-3 transition-all inline-block md:py-[6px] py-2 hover:underline hover:bg-[#00a63f] cursor-pointer  text-[14px]"
              href="https://my.hiringplug.com/"
              target="_blank"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="px-3 transition-all inline-block whitespace-nowrap md:py-[6px] py-2 hover:underline hover:bg-green-500 cursor-pointer  text-[14px]"
              href="https://my.hiringplug.com/agency-signup"
              target="_blank"
            >
              Sign Up
            </Link>
          </li>

          {/* {pathname !== "/request-a-demo" &&
          pathname !== "/about-us" &&
          pathname !== "/careers" ? ( */}
            <li>
              <Link
                className="cursor-pointer whitespace-nowrap text-[14px] rounded px-5 py-2.5 overflow-hidden group bg-[#00a63f] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out md:inline-block hidden duration-300"
                href="/request-a-demo"
                target="_blank"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">REQUEST DEMO</span>
              </Link>
            </li>
          
        </ul>

        <div onClick={() => setClose(!close)} className="flex md:hidden items-center justify-center flex-col gap-1">
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
        </div>
      </div>
    </div>
  );
}
