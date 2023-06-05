import { IconButton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Thankyou from "../../public/images/thankyou.webp";
import { useFormData } from "../../context";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";

function CareerPopUp({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const { loaderProp } = useFormData();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[800px] w-11/12 top-0">
              <div className="flex bg-white rounded-md p-6 w-full flex-col items-center justify-center">
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
                <p className="text-[46px] text-center my-3">
                  Thank <span className="text-green-500">you</span>{" "}
                </p>
                <p className="text-[16px] text-center my-3">
                  Hey, Thanks for your interest in working with{" "}
                  <span className="text-green-500">hiringplug™&nbsp;</span>
                  We&apos;ll carefully evaluate your details and get in touch if
                  it matches our open requirements. Meanwhile, you may wish to
                  explore the below channels to stay updated on future openings
                  & latest trends in HR Technology.
                </p>
                <a
                  href="https://blog.hiringplug.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Our HR Blog
                </a>
                <div className="flex items-center justify-center gap-1 flex-row">
                  <IconButton>
                    <a
                      href="https://www.facebook.com/hiringplugofficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon className="text-blue-600 text-[40px]" />
                    </a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://www.instagram.com/hiringplug/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon className="text-pink-600 text-[40px]" />
                    </a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://twitter.com/hiringplug"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon className="text-blue-500 text-[40px]" />
                    </a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://in.pinterest.com/hiringplug/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <PinterestIcon className="text-red-500 text-[40px]" />
                    </a>
                  </IconButton>
                  <IconButton>
                    <a
                      href="https://www.linkedin.com/company/hiringplug"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon className="text-blue-500 text-[40px]" />
                    </a>
                  </IconButton>
                </div>

                <p className="text-[20px] my-5">Stay Plugged!</p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default CareerPopUp;
