import React from "react";
import { Partners } from ".";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

function team(props) {
  const members = [
    {
      name: "Jane Etim",
      dept: "Growth",
      image: "/jane.png",
    },
    {
      name: "Umoh Bassey-Duke",
      dept: "CTO, Engineering",
      image: "/umoh.png",
    },
    {
      name: "Emeka Achugo",
      dept: "Engineering",
      image: "/achugo.png",
    },
    {
      name: "Wisdom Uzoaru",
      dept: "Engineering",
      image: "/wisdom.png",
    },
    {
      name: "Adaeze Ogakwu",
      dept: "Co founder & CEO",
      image: "/adaeze.png",
    },
    {
      name: "Venon Mapfunde",
      dept: "Engineering",
      image: "/venon.png",
    },
    {
      name: "Mukhtar Oyelayo",
      dept: "Engineering",
      image: "/muktr.png",
    },
    {
      name: "Richard Edekhe",
      dept: "HR",
      image: "/richard.png",
    },
    {
      name: "Patrick Onwumere",
      dept: "Cofounder",
      image: "/patrick.png",
    },
    {
      name: "Olawale Mosuro",
      dept: "Growth",
      image: "/olawale.png",
    },
    {
      name: "Tosin Akomolafe",
      dept: "Engineering",
      image: "/tosin.png",
    },
    {
      name: "David Okeke",
      dept: "Product",
      image: "/david.png",
    },
    {
      name: "Bisola Dere",
      dept: "Business Development",
      image: "/bisola.png",
    },
    {
      name: "Israel Alegbeleye",
      dept: "Engineering",
      image: "/isreal.png",
    },
    {
      name: "Ginika Obinna-Okorie",
      dept: "Operations",
      image: "/ginika.png",
    },
  ];
  return (
    <div className="w-full light-bg">
      <header className="banner-bg h-70_ overflow-hidden md:h-auto">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap relative">
          <div className="w-1/2 md:w-full flex flex-col justify-center mt-10">
            <h1 className="medium md:text-5xl md:text-5xl">
              Democratizing
              <span className="block md:inline"> access to </span>
              <span className="block md:inline">financial services.</span>
            </h1>
            <p className="c3 mt-4 w-3/4">
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
          <div className="w-1/2 md:w-full relative">
            <img
              src="/assets/guy.png"
              className="w-10/12 h-auto absolute -top-14 md:top-0 md:relative md:w-full home-banner"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className="white-bg container py-16 px-40 lg:px-6 lg:px-6 mt-16  mx-auto pb-0">
        <h2 className="medium md:text-3xl md:mb-5">Meet Our Team</h2>
        <p className="c2 w-1/3 md:w-10/12">
          We are committed to growing diverse teams where every member is valued
          and empowered to grow.
        </p>
      </section>

      <section className="white-bg container py-16 px-40 lg:px-6 lg:px-6 pt-0  mx-auto flex flex-wrap">
        <div className="flex flex-wrap justify-center py-12 -ml-12 -mr-12 md:ml-0 md:mr-0">
          {members.map((me, i) => (
            <div
              key={i}
              className="me text-center w-1/4 mb-12 px-16 md:w-1/2 md:px-0"
            >
              <img
                src={`/assets${me.image}`}
                className="mb-3 mx-auto w-full md:w-10/12"
                alt=""
              />
              <p className="c4 ft-16 medium">{me.name}</p>
              <p className="c3 ft-14">{me.dept}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="md:flex md:flex-wrap container py-16 px-40 lg:px-6 lg:px-6 md:py-0 md:-mb-10">
        <h2 className="medium w-1/2 md:w-full md:text-3xl">
          We’ve Worked with them, We Trust Each Other
        </h2>
        <p className="c2 w-1/3 mt-4 mb-12 md:w-full">
          Our team provides high-level creative education to a global audience
          of students, educators, and entrepreneurs all over the world
        </p>
      </div>
      <Partners />
      <Footer />
    </div>
  );
}

export default team;
