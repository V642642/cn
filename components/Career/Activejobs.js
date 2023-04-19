import Link from "next/link";
import React from "react";

export default function Activejobs({ jobs }) {

  return (
    <div
      id="ActiveJobs"
      className="w-full gap-5 px-2 font-primary py-10 flex items-start justify-center flex-col lg:w-8/12"
    >
      <p className="text-[30px] font-semibold">Open Positions</p>
      <div className="w-full flex gap-5 items-center justify-center flex-col">
        {jobs?.map((data , index) => (
          <div key={index} className="w-full flex border py-5 px-2 border-gray-300 rounded-[5px] items-start justify-between md:flex-row flex-col">
            <div>
              <p className="text-[24px]">
               {data?.data.job_title}
              </p>
              <p>
                <span className="text-gray-600">Position : </span> {data?.data.positions} in {data?.data.location}
              </p>
              <p>
                <span className="text-gray-600">Department : </span> {data?.data.department}
              </p>
              <p>
                <span className="text-gray-600">Experience : </span> {data?.data.experience}
                
              </p>
            </div>
            <div className="flex items-start justify-center gap-2 flex-col">
              <Link href={data?.data.view_link ? data.data.view_link : "/"} className="text-white rounded-[4px] py-1 w-[130px] bg-[#00a63f] text-center">
                View Job
              </Link>
              <Link href={data?.data.apply_link ? data.data.apply_link : "/"} className="text-white rounded-[4px] py-1 w-[130px] bg-[#00a63f] text-center">
                View & Apply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
