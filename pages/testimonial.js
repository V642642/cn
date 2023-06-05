import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createClient } from "../prismicio";
import VSS from "../public/images/testimonial.png";
import { useFormData } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function testimonial({ cards }) {

  const { loaderProp } = useFormData();
  return (
    <div>
      <Header />
      <div className="bg-no-repeat font-primary bg-right-top bg-cover relative flex  justify-center w-full gap-2 items-center -mt-[100px] flex-col bg-testimonial h-[80vh] md:h-[70vh]"></div>
      <div className="w-full flex items-center justify-center my-20">
        <div className="flex sm:w-10/12 w-full flex-wrap items-center justify-center flex-col sm:gap-10 gap-5 ">
          {cards?.map((data, index) => (
            <div
              key={index}
              
              className={` ${index % 2 ? "ml-auto " : "mr-auto "} card w-11/12  gap-8 bg-white rounded-[8px]  cursor-pointer boxShadow  h-full py-4 px-4 group flex items-center justify-center flex-row transition-all relative `}
            >
              <Image
                width={500}
                height={500}
                className="md:w-[500px] md:h-[400px] rounded-full object-contain  cursor-pointer"
                src={VSS}
                alt="clients"
                loader={loaderProp}
              />
              <div className="flex items-start justify-center flex-col">
              <p className="text-[16px] font-primary text-start leading-[1.8] text-black">
                <FontAwesomeIcon className="text-[45px] mr-6 text-gray-400" icon={faQuoteLeft} />
                {data?.data.heading}
                {data?.data.heading}
                {data?.data.heading}
                <FontAwesomeIcon className="text-[36px] ml-6 text-gray-400" icon={faQuoteRight} />
              </p>
              <p className="text-[14px] font-primary text-start text-black">
                {data?.data.para}
              </p>
              </div>
              
              
              {/* <div className="hover-card1 absolute gap-4 px-6 min-h-[400px] bg-white flex items-center justify-center flex-col translate-y-[80px] opacity-0 group-hover:opacity-[1]  group-hover:translate-y-1 duration-300 transition-all">
                <Image
                  width={200}
                  height={70}
                  src={data?.data.hover_img.url}
                  alt={VSS}
                  className="w-[200px]"
                  // loader={loaderProp}
                />
                <p className="text-[16px] font-primary text-center leading-[1.8] text-black">
                  {data?.data.hover_heading}
                </p>
                <p className="text-[14px] font-primary text-center text-black">
                  {data?.data.hover_para}
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="text-white rounded-[6px] font-primary bg-[#00a63f] px-4 py-1"
                >
                  Play Video
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  try {
    const cards = await client.getAllByType("clientcards");

    return {
      props: {
        cards,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
