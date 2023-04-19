import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Referbanner from '../components/Refer/Referbanner';
import Refercontent from '../components/Refer/Refercontent';
import Dropdowns from '../components/Refer/Dropdowns';

export default function Refer() {
  return (
    <div className='flex items-center justify-center flex-col w-full'>
        <Header />
        <Referbanner />
        <Refercontent />
        <Dropdowns />
        <Footer />
    </div>
  )
}
