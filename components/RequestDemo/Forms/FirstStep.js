import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../../../context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function FirstStep({ setStep }) {
  const { data, setFormValues } = useFormData();
  const [phone, setPhone] = useState("+1");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    if (mobile.length === 0) {
      setError({ status: true, message: "Phone number is required !" });
      return false;
    } else if (mobile.length < 10) {
      setError({
        status: true,
        message: "Phone number must be at least 10 numbers !",
      });
      return false;
    } else {
      setFormValues({ ...values, phone: phone });
      setStep(1);
    }
  };

  const handleOnChangeNumber = (value, data, event, formattedValue) => {
    setPhone(value);
    setMobile(value.slice(data.dialCode.length));
  };

  useEffect(() => {
    if (mobile.length === 0 && isSubmitted) {
      setError({ status: true, message: "Phone number is required !" });
    } else if (mobile.length < 10 && isSubmitted) {
      setError({
        status: true,
        message: "Phone number must be at least 10 numbers !",
      });
    } else {
      setError({ status: false, message: "" });
    }
  }, [mobile, isSubmitted]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col"
    >
      <label className="w-full relative flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800">
          <span className="text-red-800 ">*</span>Full Name :
        </p>
        <input
          name="fullname"
          {...register("fullname", {
            required: "Please enter your name",
            pattern: {
              value: /^[a-zA-Z ]*$/,
              message: "Name should not contain numbers",
            },
          })}
          type="text"
          className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
        />
        {errors.fullname ? (
          <span className="absolute  font-gothic top-[58px] text-[12px] text-red-500 left-0">
            {errors.fullname.message}
          </span>
        ) : (
          ""
        )}
      </label>
      <label className="w-full flex items-start relative justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Email :
        </p>
        <input
          name="email"
          {...register("email", {
            required: "Email is requied",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          type="text"
          className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
        />
        {errors.email ? (
          <span className="absolute  font-gothic top-[58px] text-[12px] text-red-500 left-0">
            {errors.email.message}
          </span>
        ) : (
          ""
        )}
      </label>
      <label className="w-full relative flex items-start justify-center flex-col">
        <p className="text-[15px] font-semibold text-gray-800">
          <span className="text-red-800">*</span> Phone No :
        </p>

        <PhoneInput
          className="phoneInput text-[14px] "
          containerClass="phoneInput"
          inputClass="phoneInput"
          enableSearch={true}
          countryCodeEditable={false}
          // disableCountryCode={true}
          // buttonStyle={{width : "20%"}}
          value={phone}
          onChange={handleOnChangeNumber}
          country="ca"
        />
        {error.status ? (
          <span className="absolute  font-gothic top-14 text-[12px] text-red-500 left-0">
            {error.message}
          </span>
        ) : (
          ""
        )}
      </label>
      <button
        type="submit"
        className="w-full mt-3 text-center leading-[40px] cursor-pointer bg-[#00a63f] h-10 text-white text-[15px] rounded-[4px]"
      >
        Get Started
      </button>
      {/* <p className="text-[10px] text-gray-700">
        By submitting your information, you agree to Hiringplug
        <a className="underline">Terms of Service</a> and
        <a className="underline">Privacy Policy</a>. You can opt out anytime.
      </p> */}
    </form>
  );
}
