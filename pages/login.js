import { faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import authService from "../src/services";

export default function Login() {
  const [show, setShow] = useState(false);
  const [isSubmitting, setiSubmmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let router = useRouter();


  const Submit = (data) => {
    setiSubmmitting(true);
    let payload = {
      username :data.username,
      password : data.password
    }

     authService().login('manage-web-service/v1/login', payload).then(res => {
      setiSubmmitting(false);
      if(res?.status  && res?.data?.access_token){
        Cookies.set("currentUser", JSON.stringify(res?.data));
        Cookies.set("Token", JSON.stringify(res?.data?.access_token));
        router.push("/admin-dashboard");
      }else if(!res?.status){
       alert(res?.message)
      }
     }).catch(error => {
      setiSubmmitting(false);
      alert(error.message)
     })
   
  };


  return (
    <>
      <header className="h-[70px] w-full px-20 py-10 flex items-center justify-between bg-[#2f2f2f] p-3">
        <Link href={`/admin-dashboard`}>
          <img
            src="images/logo-admin.png"
            alt="..."
            className="sm:w-[200px] w-[100px]"
          />
        </Link>
      </header>
      <div className="w-full flex-col font-primary flex items-center justify-center ">
        <div className="flex items-center justify-center w-full h-[646px]">
          <div className="hidden lg:block lg:w-8/12 h-[646px]">
            {/* <Suspense
              fallback={<div className="bg-gray w-full h-[646px] "></div>}
            > */}
            <img src="/pic2.jpg" className="w-full h-[646px]  " alt="" />
            {/* </Suspense> */}
          </div>
          {/* <SingleUser /> */}
          <div className="w-full gap-4 lg:w-6/12 h-full flex items-center justify-start flex-col bg-white py-14">
            <div className="w-11/12 flex items-center justify-end"></div>
            <p className="w-10/12 border-b border-border-col mb-10 pb-3 font-gothic text-left text-xl font-medium">
              Please login with your credentials
            </p>
            <form
              className="w-10/12 flex items-center justify-center flex-col gap-3"
              onSubmit={handleSubmit(Submit)}
            >
              <p className="w-full text-left text-xs font-gothic text-[#00a63f] ">
                Email
              </p>

              <label className="flex gap-2 items-start flex-row w-full">
                <i className=" flex flex-row">
                  <span className="mr-3 text-red-500">*</span>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-gray-400"
                  />
                </i>
                <input
                  type="text"
                  name="username"
                  {...register("username", { required: true })}
                  className={` ${
                    errors.username ? "border-red-500" : "border-[#00a63f]"
                  } border-b-2 font-gothic outline-none focus:outline-none  w-full`}
                />
              </label>
              <p className="w-full mt-4 text-left text-xs font-gothic text-[#00a63f] ">
                Password
              </p>

              <label className="flex relative gap-2 items-start flex-row w-full">
                <i className=" flex flex-row">
                  <span className="mr-3 text-red-500">*</span>
                  <FontAwesomeIcon
                    icon={faKey}
                    className="text-lg text-gray-400"
                  />
                </i>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  {...register("password", { required: true })}
                  className={`${
                    errors.email ? "border-red-500" : "border-[#00a63f]"
                  } border-b-2 font-gothic outline-none focus:outline-none  w-full`}
                />
                <FontAwesomeIcon
                  icon={show ? faEyeSlash : faEye}
                  onClick={() => setShow((v) => !v)}
                  className="text-lg right-0 cursor-pointer absolute text-gray-extra-light"
                />
              </label>
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="submit"
                className={` 
                ${isSubmitting ? "bg-white " : "bg-[#00a63f]"}
                 w-full text-center mt-5 py-[6px] text-[15px] leading-[1.5] font-gothic border-2 hover:bg-white hover:text-[#00a63f] transition-all duration-300 border-[#00a63f] text-white rounded-md`}
              >
                {isSubmitting ? (
                  <div className="w-full font-gothic text-[#00a63f] flex items-center justify-center">
                    <Spinner />
                    Please Wait...
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              {/* <div className="w-full flex mt-6 items-center justify-between">
                <div className="flex items-center justify-start">
                <Checkbox
                  checked={toggleCheckBox}
                  onChange={() => setToggleCheckBox((v) => !v)}
                  color="primary"
                />
                  <p className="font-gothic text-sm sm:text-lg"> Remember Me</p>
                </div>
                <Link
                  to="/forgot-password"
                  className="font-gothic text-sm sm:text-lg text-[#00a63f]"
                >
                  Forgot Password?
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
