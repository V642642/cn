import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import requestImage from "../public/images/request.webp";

export default function Marquee({marquee}) {

  const [state , setState] = useState(true);
  const [request , setRequest] = useState(false);

  const wrapperRef = useRef(null);

 

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setRequest(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <>{state ? <div className={`bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-full p-2 md:block hidden text-center font-primary relative z-10 text-[14px] transition-height duration-500 ease-in-out ${!state ? "h-0 p-0 overflow-hidden" : "min-h-10 "} `}>
    <p>{marquee?.marquee[0]?.text}</p>
    <button onClick={() => setState(false)} className="text-[20px] font-semibold absolute top-1 right-2"><FontAwesomeIcon icon={faTimes} /></button>
  </div> : ""}
  
  <div ref={wrapperRef} className={`fixed top-[30%] flex items-start justify-center transition-all duration-300   z-[100]  ${request ? "right-0" : "right-[-255px]"}`}>
    <Image alt="requestImage" onClick={() => setRequest(!request)} src={requestImage} className="cursor-pointer" />
    <div className="min-w-[250px] gap-2 w-full bg-[#4b4b4b] p-3  flex items-center justify-center flex-col">
    <input placeholder="*Name" name="fullname" type="text" className="h-10 text-[14px] bg-[#4b4b4b] border-2 px-2 w-full outline-green-900  border-white  text-white" />
    <input placeholder="*Email" name="fullname" type="text" className="h-10 text-[14px] bg-[#4b4b4b] border-2 px-2 w-full outline-green-900  border-white " />
    <input placeholder="*Phone" name="fullname" type="text" className="h-10 text-[14px] bg-[#4b4b4b] border-2 px-2 w-full outline-green-900  border-white " />
    <select name='type'  className="h-10 px-2 w-full text-[14px] accent-white bg-[#4b4b4b] border-2 outline-green-900  border-white text-white  rounded-[3px]">
          <option value="">I&apos;m</option>
          <option value="Employer">An Employer</option>
          <option value="Recuritment">A Recruitment Firm</option>
          <option value="Independent Recuritement">
            An Independent Recruiter
          </option>
        </select>
        <input placeholder="*Compamy Name" name="fullname" type="text" className="h-10 text-[14px] bg-[#4b4b4b] border-2 px-2 w-full outline-green-900  border-white " />
        <textarea rows="4" placeholder="*Your Enquiry" name="fullname" type="text" className=" text-[14px] bg-[#4b4b4b] border-2 p-2 w-full outline-green-900  border-white " />
        <button type="submit" className="w-full bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]">
        Submit
      </button>
    </div>
  </div>
  </>
  );
}
