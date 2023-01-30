import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import RBanner from '../components/Resources/RBanner';
import CaseStudies from '../components/Resources/CaseStudies';

export default function resources() {
  return (
    <div>
        <Header />
        <RBanner />
        <CaseStudies />
        <Footer />
    </div>
  )
}
