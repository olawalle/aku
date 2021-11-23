import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import emailjs from "emailjs-com";

export const BtnInput = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    let templateParams = {
      from_name: email,
      to_name: "achugo2017@gmail.com",
      subject: "NEW CONTACT EMAIL",
      message: `New contact email is ${email}`,
    };
    emailjs
      .send(
        "service_bfkjgzm",
        "template_h9qskio",
        templateParams,
        "user_6kzuCPtmURYzBjgaoN4US"
      )
      .then((res) => {
        console.log("this is our response " + res);
      })
      .finally(() => {
        setEmail("");
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <p style={{ marginTop: 40 }}>Submitting email...</p>
      ) : (
        <div className="relative flex inp-wrap md:w-full">
          <input
            type="text"
            className="email-input"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="round-btn right-4" onClick={handleSubmit}>
            <img src="/assets/right-arrow.svg" alt="" />
          </button>
        </div>
      )}
    </>
  );
};

function payments(props) {
  return (
    <div className="w-full light-bg">
      <header className="light-gradient mb-24 h-85_ md:h-auto overflow-hidden">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap justify-between relative">
          <div className="w-1/2 md:w-full flex flex-col justify-center mt-20 md:mt-10 md:text-center">
            <h1 className="medium md:text-5xl md:text-4xl">
              Beyond
              <span className="block">Payments </span>
            </h1>
            <p className="c3 mt-4 w-3/4 md:w-11/12">
              We give organisations, entrepreneurs and customers the ability to
              make and receive secure, frictionless payments, whether you have a
              POS, smartphone or feature phone. Be the first to know when we
              launch
            </p>
            <BtnInput />
          </div>
          <div className="w-1/2 md:w-full relative">
            <img
              src="/assets/payment.png"
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
