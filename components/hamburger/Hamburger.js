import React, { useRef, useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, MenuButton, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import link from "next/link";

function Hamburger({ white }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [state, setState] = useState();
  const menuItems = [
    {
      text: "Payments",
      link: "/payments",
    },
    {
      text: "Savings",
      link: "/savings",
    },
    {
      text: "Loan",
      link: "/loan",
    },
    {
      text: "Personal Banking",
      link: "/personal-banking",
    },
    {
      text: "Disbursements",
      link: "/disbursements",
    },
  ];
  return (
    <div className="h-full flex items-center">
      <div
        className={`hamburger hidden md:block ${isOpen ? "open" : ""}`}
        id="nav-icon3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="flex items-center h-28 md:hidden">
        <Link href="/team">
          <span className={`ml-6 pointer ${white ? "c-white" : ""}`}>
            Company
          </span>
        </Link>
        <span
          className={`ml-6 flex-row flex pointer ${white ? "c-white" : ""}`}
          ref={ref}
          onMouseEnter={() => setState("open")}
        >
          Products <img src="/assets/caret.svg" alt="" className="ml-2 w-3" />
        </span>
        <ControlledMenu
          transition
          state={state}
          anchorRef={ref}
          onMouseLeave={() => setState("closed")}
          onClose={() => setState("closed")}
        >
          {menuItems.map((itm, i) => (
            <MenuItem key={i}>
              <Link href={itm.link}>
                <div className="p-2 w-40">{itm.text}</div>
              </Link>
            </MenuItem>
          ))}
        </ControlledMenu>
        <Link href="/join">
          <button className="main-btn ml-6">We are hiring</button>
        </Link>
      </div>

      {isOpen && (
        <div className="menu-contents md:block 2xl:hidden text-center">
          {menuItems.map((itm, i) => (
            <Link href={itm.link} key={i}>
              <p className=" py-6" onClick={() => setIsOpen(false)}>
                {itm.text}
              </p>
            </Link>
          ))}
          <Link href="/join">
            <button className="main-btn mt-4">We are hiring</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
