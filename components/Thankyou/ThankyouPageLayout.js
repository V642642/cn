import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ThankyouPageLayout() {
  return (
    <div className="sm:w-7/12 bg-thankyou bg-opacity-0 w-full flex-col font-primary gap-3 flex items-center justify-center   bg-cover bg-no-repeat sm:h-[80vh] ">
      {/* <div className=" sm:h-[150px] rounded-full  bg-slate-300 flex items-center justify-center sm:w-[150px]">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-gray-400  animate-bounce text-[50px] sm:text-[100px]"
        />
      </div>

      <p className="text-center text-[20px] font-medium ">
        We appreciate you contacting us.
        <br />
        We try to respond as soon as possible.
        <br />
        will get back to you soon.
      </p>
      <p
        className="sm:text-[60px] text-[30px] bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-900 via-purple-300 to-indigo-900
            animate-text"
      >
        Have a great day ahead!
      </p> */}
    </div>
  );
}

export default ThankyouPageLayout;
