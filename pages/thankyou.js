import React from "react";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignupForm from "../components/Thankyou/SignupForm";
import ThankyouPageLayout from "../components/Thankyou/ThankyouPageLayout";
import { createClient } from "../prismicio";

function thankyou({ cards }) {
  return (
    <>
      <Header />
      <div className="w-full flex items-center pb-10 sm:pb-[60px] gap-10 sm:gap-20 justify-center flex-col sm:flex-row">
        <ThankyouPageLayout />
        <SignupForm />
      </div>

      <Clients cards={cards} />
      <Footer />
    </>
  );
}

export default thankyou;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const cards = await client.getAllByType("clientcards");
  return {
    props: {
      cards,
    },
  };
}
