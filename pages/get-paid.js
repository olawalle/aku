import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import { BtnInput } from "./payments";

function payments(props) {
  return (
    <div className="w-full light-bg">
      <header className="light-gradient mb-24 h-85_ md:h-auto overflow-hidden">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap justify-between relative">
          <div className="w-1/3 md:w-full flex flex-col justify-center mt-20 md:mt-10 md:text-center">
            <h1 className="medium md:text-5xl md:text-4xl">
              Get Paid
              <span className="block">and Grow</span>
            </h1>
            <p className="c3 mt-4 w-9/12 md:w-10/12 md:mx-auto">
              Secure, frictionless payments. No app-download required. Be the
              first to know when we launch
            </p>
            <BtnInput />
          </div>
          <div className="w-2/3 md:w-full relative">
            <img
              src="/assets/sm1.png"
              className="absolute -right-28 -ml-20 up-to-down -bottom-60 w-96 z-20 lg:w-60 md:relative md:left-0 pull-left md:ml-0"
              alt=""
            />
            <img
              src="/assets/get-paid.png"
              className="home-banner w-full h-auto absolute md:relative top-5 md:top-0 pull-me-up2"
              alt=""
            />
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}

export default payments;
