import React from "react";
import ABanner from "../components/Agencies/ABanner";
import Abenifits from "../components/Agencies/Abenifits";
import ANextSteps from "../components/Agencies/ANextSteps";
import AProductBanner from "../components/Agencies/AProductBanner";
import CustomerSpeak from "../components/Agencies/CustomerSpeak";
import Request from "../components/Employer/Request";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function recruitmentAgencies() {
  return (
    <div>
      <Header active={"agencies"} />
      <ABanner />
      <AProductBanner />
      <Abenifits />
      <CustomerSpeak />
      <ANextSteps />
      <Request />
      <Footer />
    </div>
  );
}
