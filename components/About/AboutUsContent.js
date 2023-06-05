import React from "react";

export default function AboutUsContent() {
  return (
    <div className="w-11/12 font-primary lg:w-7/12 md:w-9/12 flex items-start  justify-center flex-col bg-white text-black">
      <h2 className="text-[25px] font-semibold text-gray-600">
        About <span className="text-[#00a63f]">Us</span>
      </h2>
      <div className="w-full flex items-start gap-2 justify-start flex-col sm:flex-row">
        <div className="w-full sm:w-8/12 flex gap-6 px-2 items-center justify-center flex-col">
          <p className="text-[16px] font-primary">
            hiringplugTM is a curated Marketplace of Recruiters that enables
            Employers to acquire Quality talent, faster. The platform allows
            Employers and specialist Recruitment firms to seamlessly discover
            and engage with each other to acquire quality talent. hiringplugTM
            is free to join and has several integrated tools such as Intelligent
            matching, Resume Parsing, Applicant Tracking system (ATS), Interview
            scheduler, Vendor Management System (VMS), Candidate Ratings and
            communication modules, etc. to boost recruitment efficiency. The
            platform uses Artificial intelligence and Machine Learning to
            calibrate better matching suppliers and candidates to help employers
            <span className="text-[#00a63f] ml-1">#hire5Xfaster</span>
          </p>
          <p className="text-[16px] font-primary">
            hiringplugTM Marketplace helps organizations of all sizes to
            efficiently consolidate their permanent hiring and engage with
            multiple suppliers over a single platform. It also encourages
            entrepreneurship in Talent Acquisition by empowering Recruitment
            firms, Executive search consultants, independent recruiters and Gig
            recruiters to effortlessly work on job mandates and expand their
            business by focusing on their core strengths. An ideal platform for
            Niche hiring, head hunting, turnkey mandates, Diversity hiring and
            works across all sectors.
          </p>
          <p className="text-[15px] font-semibold">
            Established in 2016, the company launched operations in February
            2018 and was recently recognized as the “Best Resourcing Software” -
            2019 by HR Association of India.
          </p>
          <p className="text-green-500 text-left w-full">Our Vision</p>
          <p>
            We endeavour to make recruitments fast & easy, by empowering
            Recruiters and Employers to seamlessly discover & engage with each
            other to tap unexplored talent through technological advancements.
          </p>
          <div className="flex items-start justify-center w-full flex-col">
            <p className="w-full text-left">
              <span className="font-semibold ">Brand:</span>
              <a rel="noreferrer"  href="https://www.hiringplug.com" target="_blank" className="text-blue-700 ml-3">www.hiringplug.com</a>
            </p>
            <p className="w-full text-left">
              <span className="font-semibold ">Company:</span>
              <span className=" ml-3">TalenTECH Solutions Private Limited</span>
            </p>
            <p className="w-full text-left">
              <span className="font-semibold ">Linkedin:</span>
              <a rel="noreferrer"  href="https://www.linkedin.com/company/hiringplug" target="_blank" className="text-blue-700 ml-3 break-words">www.linkedin.com/company/hiringplug</a>
            </p>
          </div>
          <p>
            :  :
            
          </p>
        </div>
        <video autoPlay loop muted>
          <source src={`${process.env.NEXT_PUBLIC_S3_URL}/hpHRAIaward2019.mp4`} type="video/mp4;" />
        </video>
      </div>
    </div>
  );
}
