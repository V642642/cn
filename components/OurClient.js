import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "20px" }}
      onClick={onClick}
    />
  );
}

export default function OurClient() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex bg-fixed border-t-8 border-green-500 bg-no-repeat bg-cover bg-[50%] flex-col  w-full gap-2 items-center bg-[url('../public/images/base5.gif')]  justify-center py-24">
      <h2 className="text-[38px] font-primary font-bold mb-14 text-white">
        Our Happy <span className="text-green-500">Clients</span>
      </h2>

      <Slider {...settings} className="w-full flex items-center justify-center">
        <div
          id="slider3"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10">
            Easily aligns to our depth & scale of hiring
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            {" "}
            <i>
              {" "}
              Being a large firm, our talent acquisition requirements are
              diverse & targeting best of the talent in industry. hiringplug
              comes across as a reliable aggregator platform that easily aligns
              to our depth & scale of hiring with quick turnaround time. It is
              clearly simplicity at its best!
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Big 4 Consulting firm
          </p>
        </div>
        <div
          id="slider4"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10">
            single point coordination system
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            {" "}
            <i>
              {" "}
              hiringplug is a great agency aggregator that’s helped us ramp-up
              our hiring requirements. They align well with our contingent
              hiring needs and the single point coordination system makes it
              very easy to manage vendor performance.
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - International Property Consultant
          </p>
        </div>
        <div
          id="slider5"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10">
            Culture Fitment
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            {" "}
            <i>
              {" "}
              In a startup, culture fitment becomes the first parameter for
              selection of candidates. HiringPlug’s intervention provides access
              to culturally suitable, highly skilled candidates.
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Drone Technology startup
          </p>
        </div>
        <div
          id="slider6"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10">
            Accelerating Hiring Turnaround Time
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            {" "}
            <i>
              A great experience in accelerating hiring turnaround time and
              value add to our business.
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Large Aviation Technology conglomerate
          </p>
        </div>
        <div
          id="slider7"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10">
            One Stop Solution for Every Hiring Need
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            {" "}
            <i>
              {" "}
              The best part their business model is the quick turnaround time
              and variety. Hiringplug is one stop solution for every hiring need
              and we now go nowhere else.
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Retail Technology company
          </p>
        </div>
      </Slider>
    </div>
  );
}
