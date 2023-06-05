import axios from 'axios';
import React from 'react';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from "../components/Header";
import CaseStudies from '../components/Resources/CaseStudies';
import RBanner from '../components/Resources/RBanner';

export default function resources({blog}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Header />
        <RBanner />
        <CaseStudies />
        <Blog blog={blog} />
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
  try {
    const blogCards = await axios.get(
      `https://www.hiringplug.com/blog_json.php`
    );
    const blog = blogCards.data

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

