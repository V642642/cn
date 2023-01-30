import React from "react";
import Header from "./Header";

export default function Banner() {
  return (
    <div className="w-full h-[100vh]">
      <Header active={''} />
      {/* <div className="relative videocontainer top-[-100px]">
        <video autoPlay loop muted >
          <source
            src="https://www.hiringplug.com/images/hiringplug.mp4"
            type="video/mp4"
          />
          <source src="../public/hiringplug.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div class="relative videocontainer top-[-100px]">
		  <video autoplay="" loop="" muted="">
			<source src="../images/hiringplug.mp4" type="video/mp4;"/>
			<source src="../images/hiringplug.webm" type="video/webm"/>
			<source src="../images/hiringplug.ogv" type="video/ogg"/>
		  </video>
		</div>
    </div>
  );
}
