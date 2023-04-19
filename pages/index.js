const Banner =  dynamic(() => import("../components/Banner"), { ssr: true }); // from "../components/Banner";
import KeyBenifit from "../components/KeyBenifit";
import Marquee from "../components/Marquee";
import Parallex from "../components/Parallex";
import Social from "../components/Social";
import ProductSlider from "../components/ProductSlider";
const Clients =  dynamic(() => import("../components/Clients"), { ssr: false }); // from "../components/Clients";
import Footer from "../components/Footer";
import OurClient from "../components/OurClient";
import Request from "../components/Employer/Request";
import dynamic from "next/dynamic";
import { createClient } from "../prismicio";
import Blog from "../components/Blog"
const WhyHp = dynamic(() => import("../components/WhyHp"), { ssr: false });

export default function Home({ marquee, cards }) {
  return (
    <div className="w-full relative flex items-center justify-center flex-col overflow-x-hidden">
      <Marquee marquee={marquee?.data} />
      <Banner />
      <Clients cards={cards} />
      <WhyHp />
      <KeyBenifit />
      <Parallex />
      <ProductSlider />
      <OurClient />
      <Blog />
      <Social />
      <Request />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const marquee = await client.getSingle("marquee");
  const cards = await client.getAllByType("clientcards");
  return {
    props: {
      marquee,
      cards,
    },
  };
}


