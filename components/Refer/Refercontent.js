import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function Refercontent() {

  const {register , handleSubmit , formState : {errors}  } = useForm({mode : "onChange"});

  const onSubmit = (data) => {
  axios.post(`https://prod-in-api.hiringplug.com/manage-web-service/v1/create-career`, data);
  }
  
  return (
    <div className="flex w-11/12 lg:w-8/12 items-center justify-center flex-col font-primary">
      <p className="text-center text-[#00a63f] font-semibold text-[25px]">
        Client Referral Scheme (CRS)
      </p>
      <p className="text-[15px] border-t border-gray-300 py-3 leading-[35px]">
        
        <b>
          Is there someone you know who&apos;s actively hiring? Introduce them
          to us!
        </b>
        Not only will we help them
        <span className="text-[#00a63f]">hire5Xfaster</span>, but we&apos;ll
        also reward you handsomely! Begin by sharing details of your contact
        below, our team will get in touch with you and once they sign-up for
        free, your additional income begins.
      </p>
      <p className="text-[18px] w-full  text-left">
        <b>Reference Details</b>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex items-center justify-center py-6 flex-col gap-6">
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Company Name :
            </p>
            <input
              type="text"
              name="companyname"
              {...register("companyname" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Person Name :
            </p>
            <input
              type="text"
              name="firstname"
              {...register("firstname" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Email-ID :
            </p>
            <input
              type="text"
              name="email"
              {...register("email" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Contact Person Number :
            </p>
            <input
              type="number"
              name="phone"
              {...register("phone" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Message :
            </p>
            <textarea
              placeholder=" (Please provide as much details as possible)"
              rows="5"
              name="message"
              {...register("message" , {required : true})}
              className=" text-[14px] p-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <p className="text-[18px] w-full  text-left">
          <b>Your Details</b>
        </p>

        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Name :
            </p>
            <input
              type="text"
              name="referredbyfullname"
              {...register("referredbyfullname" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Email-ID :
            </p>
            <input
              type="text"
              name="referredbyemail"
              {...register("referredbyemail" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Your Phone Number :
            </p>
            <input
              type="text"
              name="referredbyphone"
              {...register("referredbyphone" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
          <label className="w-full  flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Best time to call :
            </p>
            <input
              type="text"
              name="referredbycontacttime"
              {...register("referredbycontacttime" , {required : true})}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
          </label>
        </div>
        <label className="text-[14px] cursor-pointer flex items-center justify-start gap-2 flex-wrap w-full">
          <input
            type="checkbox"
            name="checkbox"
            {...register("checkbox" , {required : true})}
            className="h-5 accent-green-800 w-5 cursor-pointer rounded-[3px]"
          />
          <span>I have read and fully agree to the terms below.</span>
        </label>
        <button type="submit" className="w-full bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]">
          Submit
        </button>
      </form>
    </div>
  );
}
