import Banner from "../components/Banner";
import KeyBenifit from "../components/KeyBenifit";
import Marquee from "../components/Marquee";
import Parallex from "../components/Parallex";
import Social from "../components/Social";
import ProductSlider from "../components/ProductSlider";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import OurClient from "../components/OurClient";

export default function Home() {
  return (
    <div className="w-full relative flex items-center justify-center flex-col overflow-x-hidden">
      <Marquee />
      <Banner />
      <KeyBenifit />
      <Parallex />
      <ProductSlider />
      <Clients />
      <OurClient />
      <Social />
      <Footer />
    </div>
  );
}
