import Image from 'next/image';
import React from 'react';
import Case from "../../public/images/case-study-1.webp";
import Case2 from "../../public/images/case-study-2.webp";
import isight_header from "../../public/images/isight_header.jpeg";


export default function CaseStudies() {
  return (
    <div className="w-full py-20 flex items-center justify-center flex-col gap-20">
        <h2 className='text-[32px] text-gray-600 font-primary font-bold'>Case Studies</h2>
        <div className='w-full flex  items-center justify-center flex-col md:flex-row gap-10'>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={Case} alt={'case-studies'} className="h-[270px]"  />
                <h2 className='text-[25px]'>EdTech startup hiring</h2>
                <p className='text-[14px]'>A new EdTech startup having to quickly scale operations during Covid-19 lockdown...</p>
                <p className='text-green-500 cursor-pointer hover:text-black'>Read More</p>
            </div>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={Case2} alt={'case-studies'} className="h-[270px]" />
                <h2 className='text-[25px]'>Global Enterprise hiring</h2>
                <p className='text-[14px]'>A Large global conglomerate with hiring requirements across sectors and functions...</p>
                <p className='text-green-500 cursor-pointer hover:text-black'>Read More</p>
            </div>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={isight_header} alt={'case-studies'} className="h-[270px]" />
                <h2 className='text-[25px]'>Future of jobs</h2>
                <p className='text-[14px]'>Future of jobs. Explore the journey of jobs in 2021.</p>
                <p className='text-green-500 cursor-pointer hover:text-black'>Read More</p>
            </div>
        </div>
    </div>
  )
}
