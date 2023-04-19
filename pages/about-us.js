import React from 'react'
import Header  from "../components/Header";
import Footer  from "../components/Footer";
import AboutusBaneer from '../components/About/AboutusBaneer';
import AboutUsContent from '../components/About/AboutUsContent';
import MyGallery from '../components/About/MyGallery';

export default function AboutUs() {
  return (
   <div className='w-full flex items-center justify-center flex-col'>
   <Header />
   <AboutusBaneer />
   <AboutUsContent />
   <MyGallery />
   <Footer />
   </div>
  )
}
