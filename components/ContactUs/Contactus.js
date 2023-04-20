import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Contactus() {

  return (
    <div className="w-full gap-4 font-primary mt-6 flex-wrap flex items-center bg-white justify-center">
      <div className=" w-11/12 sm:w-[400px] pt-10 min-h-[250px] border px-2 flex items-center justify-start  flex-col">
        <IconButton>
          <BusinessIcon className="text-gray-900 text-[60px]" />
        </IconButton>
        <p className="text-center">
          <b>L-3, Ashirvad Commercial Complex 1</b>
        </p>
        <p>Block-D, Green Park Main</p>
        <p>New Delhi - 110016, INDIA</p>
      </div>
      <div className=" w-11/12 sm:w-[400px] pt-10 min-h-[250px] border px-2 flex items-center justify-start  flex-col">
        <IconButton>
          <a href="https://www.facebook.com/hiringplugofficial" target="_blank">
          <FacebookIcon
            className="text-gray-900 text-[60px]"
          />
          </a>
          
        </IconButton>
        <a className="text-center break-all" href="https://www.facebook.com/hiringplugofficial" target="_blank"><b>www.facebook.com/hiringplugofficial</b></a>
      </div>
      <div className=" w-11/12 sm:w-[400px] pt-10 min-h-[250px] border px-2 flex items-center justify-start  flex-col">
        <IconButton>
        <a href="https://www.instagram.com/hiringplug/" target="_blank">
          <InstagramIcon
            className="text-gray-900 text-[60px]"
          />
          </a>
        </IconButton>
        <a className="text-center break-all" href="https://www.instagram.com/hiringplug/" target="_blank"><b>www.instagram.com/hiringplug</b></a>
      </div>
      <div className=" w-11/12 sm:w-[400px] pt-10 min-h-[250px] border px-2 flex items-center justify-start  flex-col">
        <IconButton>
          <a href="https://twitter.com/hiringplug" target="_blank">
          <TwitterIcon
            className="text-gray-900 text-[60px]"
          />
          </a>
        </IconButton>
        <a className="text-center break-all" href="https://twitter.com/hiringplug" target="_blank">
            <b>twitter.com/hiringplug</b>
          </a>
      </div>
    </div>
  );
}
