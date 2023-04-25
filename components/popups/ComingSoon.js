import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import img from "../../public/image_processing20200709-23232-ig3q2v.gif";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "zod";
import { useFormData } from "../../context";
import ComingSoonSecondStep from "./ComingSoonSecondStep";
import axios from "axios";

function ComingSoon({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const [step, setStep] = useState(1);
  const handleClose = () => {
    setOpen(false);
  };
  const { subscribeData, setSubscribeValues } = useFormData();

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

  const { palette } = createTheme();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00a63f",
        contrastText: "white",
      },
    },
  });

  const registerSchema = object({
    email: string().nonempty("Email is required").email("Email is invalid"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [loading , setLoading] = useState(false);


  const onSubmit = (data) => {
    setLoading(true);
    setSubscribeValues(data);

    // 
    setStep(2); 
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/manage-web-service/v1/subscribe`,
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
            <div className="relative  my-6 mx-auto lg:w-[800px] w-80 -top-28 rounded-xl  bg-white p-4 px-4 sm:px-20 sm:py-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${step === 1 ? "content-w show-w" : "content-w"}
                flex  font-primary w-full items-start flex-col  justify-center `}
              >
                <p className="text-[30px] w-full text-left">
                  <span className="w-[50px] inline-block bg-black p-[2px] mb-[8px] mr-[2px]"></span>
                  Coming <span className="text-green-500">Soon</span>
                </p>
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex flex-col items-start justify-between">
                    <p className="text-[50px] w-full text-left">
                      Get <span className="text-green-500">Notified</span>{" "}
                    </p>
                    <p className="text-[50px] w-full text-left">
                      When we Launch
                    </p>
                  </div>
                  <Image
                    src={img}
                    alt={img}
                    width={300}
                    height={300}
                    className="my-5"
                  />
                </div>

                <label className="flex items-center justify-between  gap-1 w-full mt-10">
                  <Controller
                    name={"email"}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        error={!!errors["email"]}
                        helperText={
                          errors["email"] ? errors["email"].message : ""
                        }
                        label="Enter your email address"
                        variant="outlined"
                        className="w-full"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />

                  {/* <TextField
                    label="Enter your email address"
                    variant="outlined"
                    className="w-full"
                  /> */}

                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      className="bg-green-600 h-[53px] whitespace-nowrap  px-5 hover:bg-green-600 text-white"
                      type="submit"
                      // color="success"
                      style={{ BackgroundColor: "#00a63f" }}
                    >
                      {loading ? "Please wait...." : "Notify Me"}
                    </Button>
                  </ThemeProvider>
                </label>
              </form>

              <ComingSoonSecondStep setStep={setStep} step={step} />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default ComingSoon;
