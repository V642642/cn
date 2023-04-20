import { Button, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import hplogo from "../../public/images/logo-header.webp";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../public/image_processing20200709-23232-ig3q2v.gif";

function ComingSoon({ setOpen, open }) {
  const wrapperRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[800px] w-80 -top-28">
              <div className="flex  font-primary w-full items-start flex-col rounded-xl justify-center bg-white p-4 px-4 sm:px-20 sm:py-10">
                <p className="text-[30px] w-full text-left">
                  <span className="w-[60px] inline-block bg-black p-[2px] mb-[8px]"></span>
                  Coming Soon
                </p>
              <div className="w-full flex items-center justify-between">
              <div className="w-full flex flex-col items-start justify-between">
                 <p className="text-[50px] w-full text-left">Get Notified </p>
                <p className="text-[50px] w-full text-left">When we Launch</p>
                 </div>
                 <Image src={img} alt={img} width={300} height={300} className="my-5" />
                 
                 </div> 
                
                <label className="flex items-center justify-between  gap-1 w-full mt-10">
                  {/* <input
                    className="w-full border h-12 px-2 rounded-sm"
                    placeholder="Enter your email address"
                  /> */}
                  <TextField
                        label="Enter your email address"
                        variant="outlined"
                        className="w-full"
                      />

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
                  <Button
                    variant="contained"
                    className="bg-green-600 h-[53px] whitespace-nowrap  px-5 hover:bg-green-600 text-white"
                    type="submit"
                    // color="success"
                    style={{BackgroundColor : "#00a63f"}}
                  >
                    Notify Me
                  </Button>
                </label>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default ComingSoon;
