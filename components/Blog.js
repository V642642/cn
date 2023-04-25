import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog({ blog }) {

  return (
    <div className="w-full font-primary flex-col flex items-center justify-center gap-2 bg-white py-20">
      <p className="text-[30px] sm:text-[35px] font-semibold text-gray-500">
        Recruiter<span className="font-medium  text-[#00a63f]">Times</span>
      </p>

      <p className="mb-16 text-[12px] text-center">
        Talent Acquisition can be fun with our online recruitment platform!{" "}
        <br />
        Visit our <span className="text-[#00a63f]">blog</span> for your Daily
        dose of Tips, Tricks, Insights & Trends in Recruitments!
      </p>
      <div className="w-full gap-6   flex items-start justify-center flex-row flex-wrap">
        {blog?.map((data) => (
          <div key={data.BlogID} className="flex items-start gap-4 justify-center w-[90%] sm:w-[400px] flex-col">
          <Link href={`https://blog.hiringplug.com/post/${data.BlogID}/${data.Slug}`} target="_blank">
         <Image alt="blog" src={`https://blog.hiringplug.com/uploads/blogimages/bigimages/${data.BigImage}`} width={300} height={70} className="w-full" />
         </Link> 
            <p className="text-blue-500 text-[12px] text-left">
              <span>Piyush Sharma, </span>
              <span>{moment(data.DOC).format('DD MMMM , YYYY')}</span>
            </p>
            <p className="text-[24px]">{data.Name}</p>
            <p className="text-[14px] ">
              {data.BriefDescription}
            </p>
            <Link className="text-[10px] text-[#00a63f]" href={`https://blog.hiringplug.com/post/${data.BlogID}/${data.Slug}`} target="_blank">
            Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
