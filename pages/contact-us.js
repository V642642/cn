import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactus from "../components/ContactUs/Contactus";
import ContactForm from "../components/ContactUs/ContactForm";
import CBanner from "../components/ContactUs/CBanner";
import Crypto from "../encryption";

export default function ContactUS() {

  console.log(Crypto())
  return (
    <div className="w-full font-primary flex flex-col items-center justify-center">
      <Header />
      <CBanner />
      <Contactus />
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.562939629451!2d77.1924493146781!3d28.552853882449362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2755645d9db%3A0xe0b62be7cb010d9e!2sTalenTECH+Solutions+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1493280591936"
        width="100%"
        height="250"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="w-full px-2 flex items-start py-10 lg:w-8/12 justify-center flex-col gap-4 bg-white text-black">
        <p className="font-semibold">Let&apos;s Connect</p>
        <div className="w-full flex items-center justify-start md:flex-row flex-col gap-2">
          <p className="md:w-[25%] w-full"> Office Address</p>
          <p className="w-full md:w-[75%]">
            L-3, Ashirvad Commercial Complex 1, Block-D, Green Park Main, New
            Delhi - 110016, INDIA
          </p>
        </div>
        <div className="w-full flex items-center justify-start md:flex-row flex-col gap-2">
          <p className="md:w-[25%] w-full"> Email Address</p>
          <p className="w-full md:w-[75%]">contact@hiringplug.com</p>
        </div>
        <div className="w-full flex items-center justify-start md:flex-row flex-col gap-2">
          <p className="md:w-[25%] w-full"> Phone(s)</p>
          <p className="w-full md:w-[75%]">+91-991033 4500</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
