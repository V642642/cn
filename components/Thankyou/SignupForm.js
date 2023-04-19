import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Demo from "../popups/Demo";
import SignupPop from "../popups/SignupPop";

export default function SignupForm() {
  const [edit, setEdit] = useState(null);
  const handletoggle = (id) => {
    if (edit === id) {
      return setEdit(null);
    }
    setEdit(id);
  };

  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  const [name, setName] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    reset(
      localStorage.getItem("demo")
        ? JSON.parse(localStorage.getItem("demo"))
        : {}
    );
    setName(
      localStorage.getItem("demo")
        ? JSON.parse(localStorage.getItem("demo"))
        : {}
    );
  }, [reset]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setEdit(1);
    }
  }, [isSubmitted]);
  function onSubmit(data) {
    setIsLoading(true);
    const postData = {
      name: data.companyname,
      type: data.type === "Employer" ? 2 : 3,
      firstName: data.fullname,
      // "agency_nam": data.agency_nam,
      agency_type: data.type,
      lastName: data.lastname,
      email: data.email,
      prime: 0,
      phone: data.phone,
      contractagreed: data.contract,
      clientRoles: {
        "realm-management": ["manage-users"],
      },
      enabled: true,
      groups: ["admin"],
      realmRoles: ["admin"],
      panel_user: 5,
      is_default_panel_user: 1,
      allowed_post_job: 10,
      user_fee: 100,
      is_whatsapp_contact_verified: 1,
      whatsapp_notification: 1,
      hide_callout: 1,
    };

    axios
      .post(
        `https://api-in.hiringplug.com/manage-user-service/v1/users`,
        postData
      )
      .then((res) => {
        setIsLoading(false);
        if (!res?.data?.status) {
          alert(res?.data?.message);
          localStorage.setItem("email", JSON.stringify({email: data.email}));
        }
        if (res?.data?.status) {
          setOpen(true);
          reset();
          localStorage.setItem("email", JSON.stringify({email: data.email}));
        }
      });
  }

  return (
    <div className="w-full font-primary flex items-start justify-center flex-col sm:w-5/12">
      <div className="w-full gap-6 mb-5 flex items-start  flex-col justify-start">
        <p
          className="text-[40px] gap-2 flex  bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-900 via-purple-300 to-indigo-900
            animate-text"
        >
          <span className="text-center">
            Thanks {name.fullname ? name.fullname : ""}, we've received your
            demo request!
          </span>
        </p>
        <p className="text-center">
          While the team gets ready to schedule a call with you, Go ahead and
          sign-up right away to see a preview of the Marketplace.
        </p>
      </div>
      <Demo open={demo} setOpen={setDemo} />
      <SignupPop open={open} setOpen={setOpen} />
      <div className="w-full  flex items-center justify-center ">
      <div className="w-11/12  flex  flex-col items-center justify-start">
        <p className=" w-full text-left">
          <span className="inline-block w-4/12"> Fullname :</span>
          <span>{name?.fullname}</span>
        </p>
        <p className=" w-full text-left">
          <span className="inline-block w-4/12">Company Name : </span>
          {name?.companyname}
        </p>
        <p className=" w-full text-left">
          <span className="inline-block w-4/12">Email :</span>
          <span>{name?.email}</span>
        </p>
        <p className=" w-full text-left">
          <span className="inline-block w-4/12">Your location :</span>
          <span>{name?.location}</span>
        </p>
        <p className=" w-full text-left">
          <span className="inline-block w-4/12">Phone :</span>
          <span>{name?.phone}</span>
        </p>
        <p className=" w-full text-left">
          <span className="inline-block w-4/12">You are a :</span>
          <span>{name?.type}</span>
        </p>
        <span
          onClick={() => handletoggle(1)}
          className="text-green-500 absolute right-5 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPencilAlt} /> Edit Details
        </span>
      </div>
      </div>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  flex  flex-col items-center justify-start"
      >
        <div className="w-full font-primary gap-4 md:w-11/12 flex items-start justify-center flex-col">
          <div
            className={`${
              edit === 1 ? "content show" : "content"
            }  w-full sm:px-0 px-3  gap-4  flex items-start justify-center flex-col`}
          >
            <p className="text-20px mt-10 w-full text-start">
              Signup as an Agency OR Employer
            </p>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800 ">
                <span className="text-red-800 ">*</span> I&apos;m :
              </p>

              <select
                name="type"
                {...register("type", { required: true })}
                className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
              >
                <option value="">I&apos;m</option>
                <option value="Employer">An Employer</option>
                <option value="Recuritment">A Recruitment Firm</option>
                <option value="Independent Recuritement">
                  An Independent Recruiter
                </option>
              </select>
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> First Name :
              </p>
              <input
                name="fullname"
                {...register("fullname", { required: true })}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Last Name :
              </p>
              <input
                name="lastname"
                {...register("lastname")}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Company Name :
              </p>
              <input
                name="companyname"
                {...register("companyname", { required: true })}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800">*</span> Email :
              </p>
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800">*</span> Phone No :
              </p>
              <input
                name="phone"
                {...register("phone", { required: true })}
                type="number"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-3 justify-center w-full">
            <button
              type="submit"
              className="rounded-md w-[50%] sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-600 text-green-600 "
            >
              <span className="absolute w-[280px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-green-600 transition duration-300 group-hover:text-white ease">
                {isLoading ? "Please Wait...." : "Yes, Sign me up"}
              </span>
            </button>

            <p>OR</p>

            <Link
              href={'/'}
              className="rounded-md w-[50%] text-center  sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-600 text-gray-600 "
            >
              <span className="absolute w-[280px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-gray-600 transition duration-300 group-hover:text-white text-center ease">
                I'd do this later
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 sm:p-0 p-2">
            <input
              type="checkbox"
              name="contract"
              {...register("contract", { required: true })}
              className={` ${
                errors.contract ? "border outline-red-500" : ""
              } w-6 cursor-pointer accent-green-500 h-6`}
            />
            <p className={`${errors.contract ? "text-red-500" : ""}`}>
              I have read and agree to the Terms of Use and Privacy Policy.
            </p>
          </div>
          {/* <p className="text-[13px] mt-[-5px] text-gray-700">
            By submitting your information, you agree to hiringplug
            <a className="underline">Terms of Service</a> and
            <a className="underline">Privacy Policy</a>. You can opt out
            anytime.
          </p> */}
        </div>
      </form>
    </div>
  );
}
