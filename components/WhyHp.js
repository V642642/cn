import React from "react";


export default function WhyHp() {
  return (
    <div className="flex items-center font-primary w-full justify-center flex-col gap-8 bg-[#fffaef] py-20">
      <div className="w-full flex items-center justify-center flex-col ">
        <p className="text-center text-[16px]">AN INSIDE LOOK</p>
        <h2 className="text-center text-[35px]">Why Hiringplug?</h2>
        <p className="text-center text-[14px]">
          “Let’s hire the best talent!”, says everyone.
        </p>
        <p className="text-center text-[14px]">
          “Let’s get the best recruiter!”, said no one ever! Let’s change
        </p>
        <video
        autoPlay controls loop muted className="boxShadow my-4 sm:my-20"
        >
          <source src="/hp.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}
