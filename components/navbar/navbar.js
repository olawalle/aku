import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";

function Navbar({ white }) {
  const [isTop, setIsTop] = useState(false);
  const handleScroll = (e) => {
    setIsTop(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`nav container h-24 md:h-16 px-40 md:px-6 lg:px-6  mx-auto flex flex-wrap justify-between items-center  lg:px-6 lg:px-6 fixed top-0 right-0 ${
        !isTop ? "" : "off-top bg-white"
      }`}
    >
      <Link href="/">
        {white && !isTop ? (
          <img
            src="/assets/logo-white.png"
            alt=""
            className="h-12 md:h-10 cursor-pointer logo"
          />
        ) : (
          <img
            src="/assets/logo-min.png"
            alt=""
            className="h-12 md:h-10 cursor-pointer logo"
          />
        )}
      </Link>
      <Hamburger white={white && !isTop} />
    </div>
  );
}

export default Navbar;
