import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";



export default function ContactForm() {
  
  const {register , handleSubmit , formState : {errors}  } = useForm({mode : "onChange"});

  const onSubmit = (data) => {
  axios.post(`https://prod-in-api.hiringplug.com/manage-web-service/v1/create-career`, data);
  }
  
 

  

  return (
    <div className="w-full px-2 lg:w-8/12 py-10 md:py-20 flex items-center justify-center flex-col">
      <div className="w-full  flex items-start justify-center flex-col">
        <p className="text-[30px]">
       <b>Contact US Directly</b>  
        </p>
        <p>
          Just fill out the form below and one of our agents will get back to
          you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center justify-center flex-col gap-4 py-6"
      >
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> First Name :
            </p>
            <input
              type="text"
              name="firstname"
              {...register("firstname" , {
                required: true,
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: "Name should not contain numbers",
                },
              })}
              className={`h-10 text-[14px] px-2 w-full  border  rounded-[3px] ${errors.firstname ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
            />
            {errors.firstname ? (
          <span className="absolute  font-gothic top-[58px] text-[12px] text-red-500 left-0">
            {errors.firstname.message}
          </span>
        ) : (
          ""
        )}
        
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 opacity-0">0</span> Last Name :
            </p>
            <input
              type="text"
              name="lastname"
              {...register("lastname")}
              className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
            />
       
          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Email-ID :
            </p>
            <input
              type="email"
              name="email"
              {...register("email" , {required : true})}
              className={`h-10 text-[14px] px-2 w-full  border  rounded-[3px] ${errors.email ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
            />
          
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Phone Number :
            </p>
            <input
              type="number"
              name="phone"
              {...register("phone" , {required : true})}
              className={`h-10 text-[14px] px-2 w-full  border  rounded-[3px] ${errors.phone ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
            />

          

          </label>
        </div>
        <div className="w-full md:flex-row flex-col flex items-center justify-center gap-4">
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 ">*</span> Company Name :
            </p>
            <input
              type="text"
              name="companyname"
              {...register("companyname" , {required : true})}
              className={`h-10 text-[14px] px-2 w-full  border  rounded-[3px] ${errors.companyname ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
            />

            
          </label>
          <label className="w-full relative flex items-start justify-center flex-col">
            <p className="text-[12px] font-semibold text-gray-800">
              <span className="text-red-800 opacity-0 ">s</span>
            </p>
            <select
              name="source"
              {...register("source" , {required : true})}
              className={` h-10 text-[14px] bg-white appearance-none px-2 w-full  border  rounded-[3px] ${errors.source ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
            >
              <option value="">How did you hear about us ?</option>
              <option value="Google search">Google search</option>
              <option value="Blog @ www.RecruiterTimes.com">
                Blog @ www.RecruiterTimes.com
              </option>
              <option value="HR Event">HR Event </option>
              <option value="Email">Email</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Facebook">Facebook</option>
              <option value="Youtube">Youtube</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Pinterest">Pinterest</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>
         
          </label>
        </div>
        <label className="w-full relative flex items-start justify-center flex-col">
          <p className="text-[12px] font-semibold text-gray-800">
            <span className="text-red-800 ">*</span> Message :
          </p>
          <textarea
            name="enquiry"
            {...register("enquiry" , {required : true})}
            rows="5"
            placeholder="Message"
            className={` text-[14px] bg-white appearance-none p-2 w-full  border  rounded-[3px] ${errors.enquiry ? "border-red-600 " :  "border-gray-400 outline-green-900"}`}
          />
        
        </label>
        
        <div className="w-full flex items-center justify-start">
          <button type="submit" className="px-4 bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]">
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
