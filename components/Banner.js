import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ComingSoon from "./popups/ComingSoon";

export default function Banner() {
  
  const [open , setOpen] = useState(false);

  useEffect(() => {
     const timer = setTimeout(() => setOpen(false),1000);

     return () => {
      clearTimeout(timer)
     }
  },[])

  return (
    <div className="w-full relative h-[90vh] md:h-[85vh]">
      <Header active={""}  />
      <ComingSoon open={open} setOpen={setOpen} />
      <div className="relative videocontainer   top-[-100px]">
        <video autoPlay loop muted id="myVideo">
          <source src="/hiringplug.mp4" type="video/mp4" />
          <source src="../public/hiringplug.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div class="relative videocontainer top-[-100px]">
		  <video autoplay="" loop="" muted="">
			<source src="../public/hiringplug.mp4" type="video/mp4;"/>
			<source src="../public/hiringplug.webm" type="video/webm"/>
			<source src="../public/hiringplug.ogv" type="video/ogg"/>
		  </video>
		</div> */}
      <div className="absolute flex items-start justify-center flex-col gap-2 font-primary top-[25%] px-2 lg:ml-[15%] md:ml-[20%]">
        <h2 className="text-[38px] leading-[1px] sm:leading-[58px] sm:text-[55px] text-white font-bold">
          PLUG-IN FOR
        </h2>
        <h2 className="text-[38px] sm:leading-[58px] sm:text-[55px] text-white font-bold">
          FASTER HIRING
        </h2>
        <p className="text-white flex items-start justify-center flex-col">
          <span>Engage with a large pool of qualified talent through our</span>
          <span>Curated Marketplace of Recruitment Agencies</span>
        </p>

        <Link
          href="/request-a-demo"
          className="cursor-pointer text-[16px] rounded px-8 py-4 overflow-hidden group bg-[#00a63f] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">REQUEST A DEMO</span>
        </Link>
      </div>
    </div>
  );
}
