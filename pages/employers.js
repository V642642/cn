import React from "react";
import Customers from "../components/Employer/Customers";
import Ebanner from "../components/Employer/Ebanner";
import EBenifits from "../components/Employer/EBenifits";
import ENextSteps from "../components/Employer/ENextSteps";
import EProductbanner from "../components/Employer/EProductbanner";
import Request from "../components/Employer/Request";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function employers() {
  return (
    <div className="w-full relative flex items-center justify-center flex-col overflow-x-hidden">
      <Header active={"employers"} /> 
      <Ebanner />
      <EProductbanner />
      <EBenifits />
      <Customers />
      <ENextSteps />
      <Request />
      <Footer />
    </div>
  );
}
