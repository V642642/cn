import Image from "next/image";
import Link from "next/link";
import React from "react";
import hplogo from "../public/images/logo-header.png";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}`;

  return (
    <div className="w-full sticky top-0  z-10 font-primary  flex items-center bg-black bg-opacity-70	 justify-center">
      <div
        className="w-11/12 flex py-5 items-center
        justify-between"
      >
        <Link href="/">
          {" "}
          <Image src={hplogo} alt="logo" priority />
        </Link>
        <ul className="sm:flex hidden text-white items-center justify-between gap-2">
          <li>
            <Link
              className={`${
                pathname === "/employers" ? "bg-green-500" : ""
              } px-3 transition-all py-[6px] hover:underline hover:bg-green-500 border-white hover:border-white cursor-pointer uppercase text-[12px]`}
              href="/employers"
              target="_blank"
            >
              Employers
            </Link>
          </li>
          <li className="px-3 transition-all py-1 hover:underline hover:bg-green-500  cursor-pointer uppercase text-[12px]">
            <Link
              target="_blank"
              className={`${
                pathname === "/recruitment-agencies" ? "bg-green-500" : ""
              } px-3 transition-all py-[6px] hover:underline hover:bg-green-500 border-white hover:border-white cursor-pointer uppercase text-[12px]`}
              href="/recruitment-agencies"
            >
              Recruitment Agencies
            </Link>
          </li>
          <li>
            <Link
              className="px-3 transition-all py-1 hover:underline hover:bg-green-500  cursor-pointer uppercase text-[12px]"
              target={pathname === "/" ? "" : "_blank"}
              href={pathname === "/" ? "#howitworks" : `${origin}/#howitworks`}
            >
              How it Works
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/resources" ? "bg-green-500" : ""
            } px-3 group  transition-all py-1 relative  cursor-pointer uppercase text-[12px]`}
          >
            Resources
            <ul className="flex transition-all duration-300 h-0 group-hover:h-auto  hover:bg-green-500  opacity-0 group-hover:opacity-[1] left-0 translate-y-9 group-hover:translate-y-0 flex-col items-start py-4 rounded-[5px] justify-center absolute bg-green-500 w-[120px]">
              <li>
                <Link
                  className="px-3 transition-all py-1  hover:underline cursor-pointer uppercase text-[12px]"
                  href={`https://blog.hiringplug.com/`}
                  target="_blank"
                >
                  our blog
                </Link>
              </li>
              <li>
                <Link
                  className={` px-3 transition-all py-1 hover:underline  cursor-pointer uppercase text-[12px]`}
                  href={`/resources`}
                >
                  case studies
                </Link>
              </li>

              <li className="px-3 transition-all py-1 hover:underline border-white  cursor-pointer uppercase text-[12px]">
                in the press
              </li>
            </ul>
          </li>
          <li>
         <Link className="px-3 transition-all py-1 hover:underline hover:bg-green-500 cursor-pointer uppercase text-[12px]" href='https://my.hiringplug.com/' target="_blank">Login</Link>   
          </li>
          <li>
           <Link className="px-3 transition-all py-1 hover:underline hover:bg-green-500 cursor-pointer uppercase text-[12px]" href="https://my.hiringplug.com/agency-signup" target="_blank">Sign Up</Link> 
          </li>

          <li
            href="#_"
            className="cursor-pointer text-[14px] rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">REQUEST DEMO</span>
          </li>
        </ul>

        <div className="flex sm:hidden items-center justify-center flex-col gap-1">
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
        </div>
      </div>
    </div>
  );
}
