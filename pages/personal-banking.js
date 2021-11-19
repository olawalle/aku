import React from "react";
import { Partnering } from ".";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";

function team(props) {
  return (
    <div className="w-full light-bg">
      <header className="light-gradient mb-24 h-70_ md:h-auto overflow-hidden">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap justify-between relative">
          <div className="w-1/2 md:w-full flex flex-col justify-center mt-20 md:mt-10">
            <h1 className="medium md:text-5xl md:text-4xl mt-12 md:mt-0">
              The People’s Bank
            </h1>
            <p className="c3 w-2/3 mt-4 ft-16 md:w-full">
              We use accessible technology to help entrepreneurs get paid
              seamlessly and securely + grow their wealth through savings and
              access to credit.
            </p>
            <img
              src="/assets/c-arrow-down.svg"
              className="w-10 mt-4 up-to-down"
              alt=""
            />
          </div>
          <img
            src="/assets/couple2.png"
            className="absolute right-8 home-banner mt-0 w-1/2 md:relative md:w-full md:right-0 md:mt-12"
            alt=""
          />
        </div>
      </header>

      <section className="white-bg container py-16 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap justify-between mb-40">
        <div className="w-1/2 md:w-full pb-32">
          <h2 className="medium mb-10">
            Easy Payments,
            <span className="block">Simple Banking</span>
          </h2>
          <Link href="/payments">
            <div className="pointer c2 ft-16 mb-10 w-3/4 md:w-11/12 flex items-start">
              <img src="/assets/bank1.svg" alt="" />
              <div className="block pl-5">
                <p className="ft-20 c4 medium mb-2">Payments</p>
                We give organisations, entrepreneurs and customers the ability
                to make and receive secure, frictionless payments, whether you
                have a POS, smartphone or feature phone.
              </div>
            </div>
          </Link>
          <Link href="/savings">
            <div className="pointer c2 ft-16 mb-10 w-3/4 md:w-11/12 flex items-start">
              <img src="/assets/bank2.svg" alt="" />
              <div className="block pl-5">
                <p className="ft-20 c4 medium mb-2">Savings</p>
                We empower users to save as they earn. Every time you get paid,
                automate a variable deduction towards a specific savings goal.
              </div>
            </div>
          </Link>
          <Link href="/loan">
            <div className="pointer c2 ft-16 mb-10 w-3/4 md:w-11/12 flex items-start">
              <img src="/assets/bank3.svg" alt="" />
              <div className="block pl-5">
                <p className="ft-20 c4 medium mb-2">Credit</p>
                We give organisations, entrepreneurs and customers the ability
                to make and receive secure, frictionless payments, whether you
                have a POS, smartphone or feature phone.
              </div>
            </div>
          </Link>
          <Link href="/get-paid">
            <div className="pointer c2 ft-16 mb-10 w-3/4 md:w-11/12 flex items-start">
              <img src="/assets/bank4.svg" alt="" />
              <div className="block pl-5">
                <p className="ft-20 c4 medium mb-2">Get Paid and Grow</p>
                Secure, frictionless payments. No app-download required.
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/2 md:w-full pb-32">
          <img src="/assets/phone.png" className="float-right" alt="" />
        </div>
        <div className="w-1/2 md:w-full mb-10">
          <img
            src="/assets/guy2.png"
            className="float-right w-10/12 mr-20"
            alt=""
          />
        </div>

        <div className="w-1/2 md:w-full mb-10">
          <h2 className="medium mb-10 mt-12  md:text-3xl">
            Partnering with
            <span className="block">entrepreneurs to get</span>
            paid and grow wealth
          </h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-full">
              <p className="ft-20 c4 w-3/4 md:w-full mb-2 medium">
                Zero fee payment processing
              </p>
              <p className="c2 ft-16 mb-10 w-3/4 md:w-full">
                Get paid seamlessly without getting charged a slew of payment
                processing fees
              </p>
              <p className="ft-20 c4 w-3/4 mb-2 medium">Save as you earn</p>
              <p className="c2 ft-16 mb-10 w-3/4 md:w-full">
                Every time you get paid, automate a variable deduction towards a
                specific savings goal.
              </p>
            </div>
            <div className="w-1/2 md:w-full">
              <p className="ft-20 c4 w-3/4 md:w-full mb-2 medium">
                Earn Points – redeemable as cash
              </p>
              <p className="c2 ft-16 mb-10 w-3/4 md:w-full">
                Earn Aku points in your AkuPay business wallet every time you
                get paid.
              </p>
              <p className="ft-20 c4 w-3/4 md:w-full mb-2 medium">
                Zero transaction fees
              </p>
              <p className="c2 ft-16 mb-10 w-3/4 md:w-full">
                Zero charge for all AkuPay transfers made from your AkuPay
                business wallet.
              </p>
            </div>
          </div>
        </div>
        <Partnering />
      </section>
      <Footer />
    </div>
  );
}

export default team;
