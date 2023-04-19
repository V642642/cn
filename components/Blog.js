import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect } from "react";
import Blog1 from "../public/images/blog1.webp";
import Blog2 from "../public/images/blog2.webp";
import Blog3 from "../public/images/blog3.webp";

export default function Blog() {

  const [play , setPlay ] = React.useState(true)

//  useEffect(() => {

//   if(!play){
//     var msg = new SpeechSynthesisUtterance();
//     msg.text = "Science agrees that the ageless skill of Procrastination is a sign of high IQ. But, there's a catch!";
//     window.speechSynthesis.speak(msg);
//     msg.onend = function(){
//       setPlay(true);
//     }
//   }else{
//     msg.paused()
//   }

//  },[play])
    
    

  


  return (
    <div className="w-full font-primary flex-col flex items-center justify-center gap-2 bg-white py-20">
      <p className="text-[30px] sm:text-[35px] font-semibold text-gray-500">
        Recruiter<span className="font-medium  text-[#00a63f]">Times</span>
      </p>

      <p className="mb-16 text-[12px] text-center">
        Talent Acquisition can be fun with our online recruitment platform! <br />
        Visit our <span className="text-[#00a63f]">blog</span> for your Daily
        dose of Tips, Tricks, Insights & Trends in Recruitments!
      </p>
      <div  className="w-full gap-6   flex items-start justify-center flex-row flex-wrap">
        <div className="flex items-start gap-4 justify-center w-[90%] sm:w-[400px] flex-col">
          <Image src={Blog1} width={300} height={70} className="w-full" />
          <p className="text-blue-500 text-[12px] text-left">
            <span>Piyush Sharma,  </span>
            <span>15 December, 2022</span>
          </p>
          <p className="text-[24px]">
          Intelligence of Procrastination
          </p>
          <p className="text-[14px]">Science agrees that the ageless skill of Procrastination is a sign of high IQ. But, there's a catch! ...</p>
          <p className="text-[10px] text-[#00a63f]">Read More</p>
          <div className="w-full border-2 border-gray-700 rounded-[5px] p-2">
            <p className="cursor-pointer  " onClick={() => setPlay(v => !v)}><FontAwesomeIcon icon={play ? faPlay : faPause} /></p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center w-[90%] sm:w-[400px] flex-col">
          <Image src={Blog2} width={300} height={70} className="w-full" />
          <p className="text-blue-500 text-[12px] text-left">
            <span>Mahita Kesharwani,    </span>
            <span>02 November, 2022</span>
          </p>
          <p className="text-[24px]">
          Dirty little secrets of HR
          </p>
          <p className="text-[14px]">Applying for a job to HR? Shhh! you have no idea who you're dealing with ;) Check-out these Dirty little secrets of HR. ...</p>
          <p className="text-[10px] text-[#00a63f]">Read More</p>
        </div>
        <div className="flex items-start gap-4 justify-center w-[90%] sm:w-[400px] flex-col">
          <Image src={Blog3} width={300} height={70} className="w-full" />
          <p className="text-blue-500 text-[12px] text-left">
            <span>Editor,   </span>
            <span>30 October, 2022</span>
          </p>
          <p className="text-[24px]">
          Halloween: 10 Horrifying Candidates for Recruiters
          </p>
          <p className="text-[14px]">Halloween is a reminder on what really horrifies the Recruiters all over the world. 10 types of candidates that scare them....</p>
          <p className="text-[10px] text-[#00a63f]">Read More</p>
        </div>
      </div>
    </div>
  );
}
