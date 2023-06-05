import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import OTPVerification from "./OTPVerification";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerificationResponce from "./VerificationResponce";

function EmailConfirmation({ setOpen, open }) {

  const wrapperRef = useRef(null);
  const [step , setStep] = useState(1);
  const [loading , setLoading] = useState(false);
  const onClose = () => {
    setOpen(false );
  };



  const registerSchema = object({
    name: string()
      .nonempty("Name is required")
      .max(32, "Name must be less than 100 characters"),
    email: string().nonempty("Email is required").email("Email is invalid"),
    phone: string("Not a valid phone number")
      .min(10, "Phone number must be greater than 10 characters")
      .max(15, "Phone number must be less than 15 characters")
      .optional(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
 
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
  }, [wrapperRef]);

  const onSubmit = (data) => {
    setLoading(true)
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/delete-user-data`,
        data
      )
      .then((res) => {
        setLoading(false)
        if (res?.data?.status) {
          localStorage.setItem('delreqid',res?.data?.data.delreqid)
          setStep(2);
        }
      });
  };


  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[700px] w-80 -top-28">
              <div className={` flex font-primary bg-white py-10 px-2 rounded-[5px] flex-col w-full items-center justify-center relative gap-3`}
              >
                 <IconButton
                  aria-label="close"
                  onClick={onClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
               {step >= 2 ? <IconButton
                  aria-label="close"
                  onClick={() => setStep(v => v-1)}
                 
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <ArrowBackIcon />
                </IconButton> : ""}
                
                <form onSubmit={handleSubmit(onSubmit)} className={`${
                  step === 1 ? "content-w show-w" : "content-w"
                } flex font-primary flex-col w-full items-center justify-center relative gap-3`}>
                <p className="text-[25px] w-full sm:w-10/12 font-semibold">
                  Verify Your email
                </p>
                

                <Stack
                  spacing={2}
                  direction="column"
                  width="100"
                  className="w-full sm:w-10/12"
                >
                  <Controller
                    name={"email"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        error={!!errors["email"]}
                        helperText={
                          errors["email"] ? errors["email"].message : ""
                        }
                        label="Email"
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />

                  <Controller
                    name={"name"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        error={!!errors["name"]}
                        helperText={
                          errors["name"] ? errors["name"].message : ""
                        }
                        label="Name"
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />

                  <Controller
                    name={"phone"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        error={!!errors["phone"]}
                        helperText={
                          errors["phone"] ? errors["phone"].message : ""
                        }
                        label="Phone (optional)"
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                        type="number"
                      />
                    )}
                  />

                  <Button
                    variant="contained"
                    className="bg-green-600 hover:bg-green-600 text-white"
                    endIcon={<SendIcon />}
                    type="submit"
                  >
                  {loading ? "Please wait...." : "Verify"}  
                  </Button>
                </Stack>
                <p className="w-full sm:w-10/12">
                  Quetions ? Email us at
                  <span className="text-green-500"> contact@hiringplug.com</span>
                </p>
                </form>
              <OTPVerification step={step} setStep={setStep} />
              <VerificationResponce step={step} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default EmailConfirmation;
