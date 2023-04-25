import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import handshake from "../../public/images/handshake.gif";
import Demo from "./Demo";

function SignupPop({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const [demo, setDemo] = useState(false);
  const [name, setName] = useState({});
  let router = useRouter()
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setName(
      localStorage.getItem("email")
        ? JSON.parse(localStorage.getItem("email"))
        : {}
    );
  }, []);

  console.log(name?.email?.split('@')[1]?.split('.')[0])


  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);
  const handleNavigate = () => {
    if(name?.email?.split('@')[1]?.split('.')[0] === 'gmail'){
      window.open(`https://mail.google.com/mail/u/0/#inbox`, '_blank', 'noopener,noreferrer')
    }else{
      router.push('/');
    }
  }

  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[600px] w-80 -top-28">
              <div ref={wrapperRef} className="flex bg-white py-10 px-2 rounded-[5px] flex-col w-full items-center justify-center relative">
              <Demo open={demo} setOpen={setDemo}  />
                <p onClick={handleClose} className="absolute cursor-pointer top-3 right-3 text-[20px] ">X</p>
                <p className="text-center text-[50px]">Thank You</p>
                <Image src={handshake} width={50} height={50} alt="handshake" />
                <p className="text-center text-[20px]">
                  Thank you for signing up with hiringplug™. Your login
                  credentials have been sent to your registered email.
                </p>
                <p
              onClick={() => handleNavigate()}
              className="rounded-md w-[50%] text-center  sm:my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-500 text-blue-500 "
            >
              <span className="absolute w-[275px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-blue-500 transition duration-300 group-hover:text-white text-center ease">
              Verify your mail
              </span>
            </p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default SignupPop;
