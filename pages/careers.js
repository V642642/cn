import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Careerbanner from "../components/Career/Careerbanner";
import Careerform from "../components/Career/Careerform";
import Activejobs from "../components/Career/Activejobs";
import { createClient } from "../prismicio";
import EmailConfirmation from "../components/popups/EmailConfirmation";

export default function Careers({ jobs }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="w-full  flex items-center justify-center flex-col">
      <Header />
      <Careerbanner />
      <Careerform />
      <EmailConfirmation setOpen={setOpen} open={open} />
      <Activejobs jobs={jobs} />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const jobs = await client.getAllByType("career_page");

  return {
    props: {
      jobs,
    },
  };
}
