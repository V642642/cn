import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";
import ComingSoonSecondStep from "./ComingSoonSecondStep";

function ComingSoon({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const [step, setStep] = useState(1);
  const handleClose = () => {
    setOpen(false);
  };
  const { subscribeData, setSubscribeValues, loaderProp } = useFormData();

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
    // eslint-disable-next-line
  }, [wrapperRef]);

  // const { palette } = createTheme();
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#00a63f",
  //       contrastText: "white",
  //     },
  //   },
  // });

  // const registerSchema = object({
  //   email: string().nonempty("Email is required").email("Email is invalid"),
  // });

  const {
    
    handleSubmit,
    formState: { errors },
    register
  } = useForm(
    // {   resolver: zodResolver(registerSchema),}
    );

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setSubscribeValues(data);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/subscribe`,
        data
      )
      .then((res) => {
        setLoading(false);
        if (res?.data?.status) {
          localStorage.setItem("delreqid", res?.data?.data.delreqid);
          setStep(2);
        }
      });
  };

  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[800px] w-80 sm:w-[400px] top-0  border-4 border-gray-500 bg-white ">
              <div
                
                className={`${step === 1 ? "content-w show-w" : "content-w"}
                flex  font-primary w-full items-start flex-col  justify-center `}
              >
                 <img onClick={handleClose} src="/images/closebutton.png" className="absolute w-[30px] md:w-[40px] top-0 right-0 cursor-pointer" />
                <p className="px-2 md:py-2 py-4 bg-[#00a63f] text-[25px] md:text-[40px] text-center text-white  w-full ">
                  <b>Get involved</b> in the future of hiring!
                </p>
                <p className="px-4 py-3 bg-gray-500 text-[20px] font-light text-center text-white  w-full ">
                  We&rsquo;re getting all wired-up to unveil an awesome hiring
                  experience. Drop in your details for an Early invitation.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex items-center justify-center flex-col lg:flex-row my-8">
                  <div className="lg:w-6/12 w-full relative flex items-center justify-end">
                    <label className="flex absolute top-[24%] left-0  lg:left-[-10px] items-start justify-between  gap-1 w-full mt-10">
                      <input
                        className="w-full placeholder-[#00a63f] font-bold placeholder:font-bold italic bg-white px-4 text-[#00a63f] outline text-[20px] outline-4 outline-gray-600 border-gray-500 border-3 rounded-[35px] md:h-[75px] h-[51px]"
                        {...register("email", {
                          required: "Email is required !",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}  
                        type="email"      
                        placeholder="Your email..."
                      />
                    </label>
                    
                    <img
                      src="/images/comingsooncircle.png"
                      alt="circle"
                      className="w-10/12"
                    />
                    
                  </div>
                  {loading ? <p className="font-bold ml-4 text-[20px]">Please wait...</p> :  <button type="submit" >
                  <img
                    src="/images/comingsoonbtn.png"
                    alt="btn"
                    className="w-[100px] mb-2 cursor-pointer"
                  />
                  </button>
                  }
                
                </form>
              </div>

              <ComingSoonSecondStep
                handleClose={handleClose}
                setStep={setStep}
                step={step}
              />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default ComingSoon;
