const Banner = dynamic(() => import("../components/Banner"), { ssr: true }); // from "../components/Banner";
import axios from "axios";
import dynamic from "next/dynamic";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import KeyBenifit from "../components/KeyBenifit";
import OurClient from "../components/OurClient";
import Parallex from "../components/Parallex";
import ProductSlider from "../components/ProductSlider";
import Dropdowns from "../components/Refer/Dropdowns";
import Social from "../components/Social";
import { createClient } from "../prismicio";
const Clients = dynamic(() => import("../components/Clients"), { ssr: true }); // from "../components/Clients";
const WhyHp = dynamic(() => import("../components/WhyHp"), { ssr: false });

export default function Home({ blog }) {


  return (
    <div className="w-full relative flex items-center justify-center flex-col overflow-x-hidden">
      {/* <Marquee  marquee={marquee?.data} /> */}
      <Banner  />
      <Clients />
      <WhyHp />
      <KeyBenifit />
      <Parallex />
      <ProductSlider />
      <p className="text-[40px] my-10 pt-10 font-primary w-full text-center border-t-4 border-green-500">FAQs</p>
      <Dropdowns />
      <OurClient />
      <Blog blog={blog?.slice(0,3)} />
      <Social />
      {/* <Request /> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps({ previewData }) {
  // const client = createClient({ previewData });
  try {
    const blogCards = await axios.get(
      `https://www.hiringplug.com/blog_json.php`
    );
    const blog = blogCards.data
    // const marquee = await client.getSingle("marquee");
    // const cards = await client.getAllByType("clientcards");

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
