import Image from 'next/image';
import React from 'react';
import { useFormData } from '../../context';
import Case from "../../public/images/case-study-1.webp";
import Case2 from "../../public/images/case-study-2.webp";
import isight_header from "../../public/images/isight_header.jpeg";


export default function CaseStudies() {

    const { loaderProp } = useFormData();



  return (
    <div className="w-full py-20 flex items-center justify-center flex-col gap-20 bg-white text-black    ">
        <h2 className='text-[32px] text-gray-600 font-primary font-bold'>Case Studies</h2>
        <div className='w-full flex  items-center justify-center flex-col md:flex-row gap-10'>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={Case} alt={'case-studies'} className="h-[270px]"   loader={loaderProp} />
                <h2 className='text-[25px] text-black'>EdTech startup hiring</h2>
                <p className='text-[14px] text-black'>A new EdTech startup having to quickly scale operations during Covid-19 lockdown...</p>
                <a target="_blank" href={'/case-study-startups-hiring.pdf'} className='text-green-500 cursor-pointer hover:text-black'>Read More</a>
            </div>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={Case2} alt={'case-studies'} className="h-[270px]"  loader={loaderProp} />
                <h2 className='text-[25px] text-black'>Global Enterprise hiring</h2>
                <p className='text-[14px] text-black'>A Large global conglomerate with hiring requirements across sectors and functions...</p>
                <a target="_blank" href={'/case-study-large-enterprises.pdf'}  className='text-green-500 cursor-pointer hover:text-black'>Read More</a>
            </div>
            <div className='w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col'>
                <Image src={isight_header} alt={'case-studies'} className="h-[270px]"  loader={loaderProp} />
                <h2 className='text-[25px] text-black'>Future of jobs</h2>
                <p className='text-[14px] text-black'>Future of jobs. Explore the journey of jobs in 2021.</p>
                <a target="_blank" href={'/case-study-startups-hiring.pdf'} className='text-green-500 cursor-pointer hover:text-black'>Read More</a>
            </div>
        </div>
    </div>
  )
}
