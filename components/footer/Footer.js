import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="">
      <div className="container py-10 px-40 lg:px-6 lg:px-6 md:pb-0  mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col w-1/3 md:w-full md:mb-10">
          <Link href="/">
            <img
              src="/assets/logo-min.png"
              alt=""
              className="mb-8 w-10 cursor-pointer"
            />
          </Link>
          <p className="ft-14 c2 md:w-3/4" style={{ fontWeight: 300 }}>
            2021 AKU. All rights reserved. “AKU” is a trademark of Aku Fintech
            Services Limited, No 1, Remi Olowude, Lekki Phase 1, Lagos.
          </p>
        </div>

        <div className="flex flex-row flex-wrap w-1/2 md:w-full">
          <div className="w-1/3 md:w-full md:mb-10" style={{ fontWeight: 300 }}>
            <p className="ft-16 mb-6 c2" style={{ fontWeight: 500 }}>
              Company
            </p>

            <p className="c2 mb-4 md:text-sm">About</p>
            <p className="c2 mb-4 md:text-sm">Careers</p>
            <p className="c2 mb-4 md:text-sm">Contact us</p>
          </div>
          <div className="w-1/3 md:w-full md:mb-10" style={{ fontWeight: 300 }}>
            <p className="ft-16 mb-6 c2" style={{ fontWeight: 500 }}>
              Products
            </p>

            <p className="c2 mb-4 md:text-sm">Aku Digital Bank</p>
            <p className="c2 mb-4 md:text-sm">AkuPay Disburse</p>
          </div>
          <div className="w-1/3 md:w-full md:mb-10" style={{ fontWeight: 300 }}>
            <p className="ft-16 mb-6 c2" style={{ fontWeight: 500 }}>
              Legal
            </p>

            <p className="c2 mb-4 md:text-sm">Terms of use</p>
            <p className="c2 mb-4 md:text-sm">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="container py-10 px-40 md:pt-0 lg:px-6 lg:px-6  mx-auto justify-between">
        <div
          className="w-full py-5 c2 ft-12 md:pt-0"
          style={{ fontWeight: 300 }}
        >
          © 2021 AKU Microfinance Bank (RC1853865). All rights reserved. All
          deposits are insured by the Nigerian Deposit Insurance Corporation
          (NDIC). AKU Microfinance Bank is licensed by the Central Bank of
          Nigeria. “Aku” is a trademark of Aku Fintech Services Ltd Lagos: 1A
          Remi Olowude Street, Lagos Court of Arbitration Building, Lekki,
          Lagos.
        </div>

        <div className="w-full py-5 pt-2 c2 ft-12" style={{ fontWeight: 300 }}>
          AKU Current Account is provided through AKU Microfinance Bank. All
          text, graphics, audio files, code, downloadable material, and other
          works on this website are the copyrighted works of AKU Microfinance
          Bank. All Rights Reserved. Any unauthorized redistribution or
          reproduction of any copyrighted materials on this website is strictly
          prohibited. Other product and company names are trademarks of their
          respective owners. This website contains simulated images; actual
          appearance may vary.
        </div>
      </div>{" "}
      <div className="bt w-full">
        <div className="container py-6 px-40 lg:px-6 lg:px-6  mx-auto flex justify-between items-center">
          <p className="c2 ft-12">Copyright © 2021 Terms Privacy Legal</p>

          <div className="flex flex-row">
            <img src="/assets/facebook.svg" className="ml-4" alt="" />
            <img src="/assets/twitter.svg" className="ml-4" alt="" />
            <img src="/assets/ig.svg" className="ml-4" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
