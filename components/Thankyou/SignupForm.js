import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ContactUsMail from "../../mailer/contact-us-mail";
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
  let router = useRouter();
  const [ipaddress, setIpaddress] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setIpaddress(res?.data.ipAddress));
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setEdit(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  function onSubmit(data) {
    setIsLoading(true);
    let postData = {
      fullname: data.name,
      phone: data.phone,
      companyname: data.companyname,
      location: data.location,
      type: data.type.value === "Other" ? data.typeother : data.type.value,
      email: data.email,
      source: "contact-us",
      enquiry : data.enquiry,
      ipaddress: ipaddress
    };
   
    axios
    .post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/create-demo`,
      postData
    )
    .then((res) => {
      setIsLoading(false);
      if (res?.data?.status) {
        try {
          axios
            .post(
              `https://api-in.hiringplug.com/manage-mail-service/v1/add-wa-number`,
              {
                wanumber: data.phone,
                acctype: "EMPR",
              }
            )
            .then(() => {
                axios.post(
                  `https://api-in.hiringplug.com/manage-mail-service/v1/send-custom-sms`,
                  { wamessage: `test`, mobile: [{ mobile: data.phone }] }
                );
              
            });
        } catch (err) {
          console.log(err);
        }
        router.push("/thankyou");
        ContactUsMail(postData.email, postData.fullname, "");
      } else {
        alert("Something went wrong");
      }
    });

  }
  console.log(name);

  return (
    <div className="w-full font-primary flex items-start justify-center flex-col sm:w-5/12">
      <div className="w-full gap-6 mb-5 flex items-start  flex-col justify-start">
        <p
          className="text-[40px] gap-2 flex  bg-gradient-to-r bg-clip-text  
            animate-text"
        >
          <span className="text-center">
            Thanks {name.fullname ? name.fullname : <></>}, we&apos;ve received
            your request!
          </span>
        </p>
        <p className="text-center">
          While the team gets ready to schedule a call with you, Go ahead and
          explore the following resources.
        </p>
      </div>
      <Demo open={demo} setOpen={setDemo} />
      <SignupPop open={open} setOpen={setOpen} />
      <div className="w-full  flex items-center justify-center ">
        <div className="w-11/12  flex  flex-col items-center justify-start">
          <p className=" w-full text-left">
            <span className="inline-block w-4/12"> Full name :</span>
            <span>{name?.fullname}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Email :</span>
            <span>{name?.email}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Phone No :</span>
            <span>{name?.phone}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">You are a :</span>
            <span>{name?.type}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Location :</span>
            <span>{name?.location}</span>
          </p>
          <p className=" w-full text-left">
            <span className="inline-block w-4/12">Company/entity name : </span>
            {name?.companyname}
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
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Full Name :
              </p>
              <input
                name="fullname"
                disabled
                {...register("fullname", { required: true })}
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
            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800 ">
                <span className="text-red-800 ">*</span> I&apos;m :
              </p>
              {name.type !==
              ("Employer" ||
                "Recuritment" ||
                "Independent Recuritement" ||
                "I am seeking employment" ||
                "Business colloboration") ? (
                <>
                  <input
                    name="type"
                    disabled
                    {...register("type")}
                    type="text"
                    className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
                  />
                </>
              ) : (
                <select
                  disabled
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
                  <option value="I am seeking employment">
                    I am seeking employment
                  </option>
                  <option value="Business colloboration">
                    Business colloboration
                  </option>
                  <option value="Other">Other</option>
                </select>
              )}
            </label>

            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[15px] font-semibold text-gray-800 ">
                <span className="text-red-800 ">*</span> Location :
              </p>

              <input
                name="location"
                disabled
                {...register("location",)}
                className="h-10 px-2 w-full text-[14px] accent-green-800 appearance-none bg-white outline-green-900 border border-gray-400  rounded-[3px]"
              />
            </label>

            <label className="w-full flex items-start justify-center flex-col">
              <p className="text-[12px] font-semibold text-gray-800">
                <span className="text-red-800 ">*</span> Company/entity Name :
              </p>
              <input
                name="companyname"
                {...register("companyname", { required: true })}
                type="text"
                className="h-10 text-[14px] px-2 w-full outline-green-900 border border-gray-400 rounded-[3px]"
              />
            </label>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-3 justify-center w-full">
            <Link
              href={"/request-a-demo"}
              className="rounded-md w-[50%] text-center  sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-600 text-gray-600 "
            >
              <span className="absolute w-[290px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-24 bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-28 ease"></span>
              <span className="relative text-gray-600 transition duration-300 group-hover:text-white text-center ease">
              Start over
              </span>
            </Link>
            <p>OR</p>
            {edit === 1 ?  <button
              type="submit"
              className="rounded-md w-[50%] sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  text-white bg-green-500  border-green-500"
            >
              <span className="absolute w-[300px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-28 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-[122px] ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-green-500 ease">
                {isLoading ? "Please Wait...." : "Submit"}
              </span>
            </button> : <a
              href="/resources"
              className="rounded-md w-[50%] text-center sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  text-white bg-green-500  border-green-500"
            >
              <span className="absolute w-[300px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-28 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-[122px] ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-green-500 ease">
                {isLoading ? "Please Wait...." : "Resources"}
              </span>
            </a>}
           
            
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
