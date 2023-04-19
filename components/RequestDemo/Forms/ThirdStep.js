import React from 'react'

export default function ThirdStep({setStep}) {
  return (
    <div className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col">
        <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800 ">
          <span className="text-red-800 ">*</span> Signup as :
        </p>
        {/* <input
          type="email"
          className="h-10 px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
        /> */}
        <select className="h-10 px-2 font-primary w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]">
          <option value=""> -- Please Select --</option>
          <option value="Employer">An Employer</option>
          <option value="Agency">An Agency</option>
          
        </select>
        
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800">
          <span className="text-red-800 ">*</span> First Name :
        </p>
        <input type="text" className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]" />
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800">
          <span className="text-red-800"></span> Last Name :
        </p>
        <input type="text" className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]" />
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Email :
        </p>
        <input type="email" className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]" />
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Phone No :
        </p>
        <input type="number" className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]" />
      </label>
      <label className="w-full flex items-start justify-center flex-col">
        <p className="text-[12px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Company Name :
        </p>
        <input
          type="text"
          className="h-10 px-2 text-[14px] w-full outline-green-900 border border-gray-400 rounded-[3px]"
        />
      </label>
      <label className='text-[14px] cursor-pointer flex items-center justify-start gap-2 flex-wrap w-full'>
      <input
          type="checkbox"
          className="h-5 accent-green-800 w-5 cursor-pointer rounded-[3px]"
        />
        <span>I have read and agree to the Terms of Use and Privacy Policy.</span>
      </label>
      <button onClick={() => setStep(0)} className="w-full bg-green-800 h-10 text-white text-[15px] rounded-[4px]">
        
        Get Started
      </button>
      <p className="text-[10px] text-gray-700">By submitting your information, you agree to Hiringplug <a className="underline">Terms of Service</a> and <a className="underline">Privacy Policy</a>. You can opt out anytime.</p>
    </div>
  )
}
