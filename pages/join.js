import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";

function join(props) {
  const jobs = [
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
    {
      title: "Snr. Software Engineer (Backend)",
      location: "Lagos, NG. Full-TimeTechnology",
    },
  ];
  return (
    <div className="w-full light-bg">
      <header className="black-bg h-70_ overflow-hidden md:h-auto">
        <Navbar white />
        <div className="container py-16 pt-36 px-40 lg:px-6  lg:px-6  md:pb-0  mx-auto flex flex-wrap relative">
          <div className="w-1/2 flex flex-col justify-center mt-20 md:w-full">
            <h1 className="medium c-white md:text-5xl md:text-5xl">
              Join the Movement
            </h1>
            <p className="c-white mt-4 w-3/4 md:w-full">
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
          <div className="w-1/2 relative md:w-full">
            <img
              src="/assets/girl.png"
              className="w-11/12 h-auto home-banner absolute -top-16 md:relative md:top-0"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className=" white-bg container py-16 px-40 lg:px-6  lg:px-6  md:pb-0  mx-auto flex flex-wrap relative">
        <h2 className="c4 md:text-3xl md:mb-5">Open positions</h2>

        {jobs.map((job, i) => (
          <Link href="/job-description" key={i}>
            <div
              className={`flex justify-between py-10 cursor-pointer w-full ${
                i < jobs.length - 1 ? "bb" : ""
              }`}
            >
              <div className="flex-col">
                <p className="ft-16 c4">{job.title}</p>
                <p className="ft-16 c2">{job.location}</p>
              </div>
              <img src="/assets/caret-right.svg" alt="" />
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default join;
