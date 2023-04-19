import React from "react";

export default function VerificationResponce({step}) {
  return (
    <div className={`${
        step === 3 ? "content-w show-w " : "content-w"
      } w-full font-primary`}>
      <p className="text-[22px] text-center w-full  font-medium">
        Hi Vishal,
      </p>
      <p className="text-[16px] text-center text-gray-600 mt-5 w-full font-semibold">
      We have received your request to modify / delete your account information available with us. The team shall re-validate the request and take necessary action within 72 working hours. There is no further action required from your end. 
      </p>
      <p className="text-[16px] text-center text-gray-600 mt-5 w-full font-semibold">Thank you</p>
    </div>
  );
}
