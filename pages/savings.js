import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import { BtnInput } from "./payments";

function payments(props) {
  return (
    <div className="w-full light-bg">
      <header className="light-gradient mb-24 h-85_ md:h-auto overflow-hidden">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap justify-between relative">
          <div className="w-1/2 md:w-full flex flex-col justify-center mt-20 md:mt-10">
            <h1 className="medium md:text-5xl md:text-4xl">
              Secure
              <span className="block">Your Tomorrow </span>
            </h1>
            <p className="c3 mt-4 w-7/12">
              Saving towards your goals has never been easier. No hidden fees.
              No Serenren. Be the first to know when we launch
            </p>
            <BtnInput />
          </div>
          <div className="w-1/2 md:w-full relative">
            <img
              src="/assets/savings2.png"
              className="absolute right-90 -ml-20 up-to-down -bottom-60 w-96 z-20 md:bottom-12 md:w-64 md:ml-12"
              alt=""
            />
            <img
              src="/assets/savings.png"
              className="w-full h-auto absolute md:relative top-5 md:mt-12"
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
