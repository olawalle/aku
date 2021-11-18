import Image from "next/image";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className="w-full light-bg">
      <header className="banner-bg min-h-90 md:min-h-0 overflow-x-hidden">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap justify-between relative">
          <div className="w-1/2 md:w-full flex flex-col justify-center mt-12 md:mt-10">
            <h1 className="md:text-5xl md:text-4xl medium mt-20 md:mt-0">
              Bulk
              <span className="block md:inline"> disbursment</span>
              <span className="block md:inline"> made easy</span>
            </h1>
            <p className="c3 mt-4 w-8/12">
              With AkuPay disburse, you can make bulk payments, verify account
              details, notify and more to your beneficiaries
            </p>
            <img
              src="/assets/c-arrow-down.svg"
              className="w-10 mt-4 up-to-down"
              alt=""
            />
          </div>
          <div className="w-2/3 md:w-full">
            <img
              src="/assets/sm1.png"
              className="absolute left-96 ml-48 up-to-down -bottom-32 w-96 z-20 lg:hidden"
              alt=""
            />
            <img
              src="/assets/computer-min.png"
              className="absolute right-0 disbanner w-8/12 md:w-full md:relative top-40 z-10 lg:relative lg:bottom-0 -lg:right-20 lg:bottom-0 -lg:right-20"
              alt=""
            />
          </div>
        </div>
      </header>
      <section className="container py-16 px-40 lg:px-6 lg:px-6  mx-auto mt-16">
        <div className="flex justify-between flex-wrap">
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g1.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              Real-time <span className="block">disbursement</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Real-time disbursements to banked or unbanked beneficiaries
            </p>
          </div>
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g2.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              Beneficiary ID/ <span className="block">Name validation</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Validation of beneficiaries before making payments reduces chances
              of erroneous transactions.
            </p>
          </div>
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g3.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              Duplicate transaction <span className="block">resolution</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Automated flagging of fraudulent and duplicate transactions.
            </p>
          </div>
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g4.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              Customer support/
              <span className="block">touch-points include;</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Professional call centre, 2-way SMS, USSD and nationwide agent
              network.
            </p>
          </div>
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g5.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              API/Integration to
              <span className="block">receive whitelist</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Beneficiary whitelists can be uploaded manually as CSV file or
              automated via API integration.
            </p>
          </div>
          <div className="w-1/3 my-5 lg:w-1/2 md:w-full">
            <img src="/assets/g6.svg" className="h-9" alt="" />
            <p className="ft-20 medium c4 my-6">
              Multiple concurrent <span className="block">programmes</span>
            </p>
            <p className="c2 ft-16 w-2/3 md:w-11/12">
              Platform supports multiple disbursement programmes under a single
              client account running concurrently.
            </p>
          </div>
        </div>

        <h2 className="medium mt-40">How does it work?</h2>

        <div className="container py-8 mx-auto flex flex-wrap">
          <div className="w-1/4 md:w-full lg:w-1/2  lg:mb-12  relative">
            <div className="w-16 h-16 md:w-12 md:h-12  rounded-full light-blue-bg blue ft-20 medium has-line flex items-center justify-center">
              1
            </div>
            <p className="ft-20 medium c4 my-6 md:my-3">Setup</p>
            <p className="c2 ft-16 w-2/3 md:w-11/12 md:mb-8">
              Aku sets up client account and access -White-labeled dashboard
            </p>
          </div>
          <div className="w-1/4 md:w-full lg:w-1/2  lg:mb-12  relative">
            <div className="w-16 h-16 md:w-12 md:h-12  rounded-full light-blue-bg blue ft-20 medium has-line flex items-center justify-center">
              2
            </div>
            <p className="ft-20 medium c4 my-6 md:my-3">Send whitelist</p>
            <p className="c2 ft-16 w-2/3 md:w-11/12 md:mb-8">
              Client sends Whitelist with Beneficiaries - via API or email
            </p>
          </div>
          <div className="w-1/4 md:w-full lg:w-1/2  lg:mb-12  relative">
            <div className="w-16 h-16 md:w-12 md:h-12  rounded-full light-blue-bg blue ft-20 medium has-line flex items-center justify-center">
              3
            </div>
            <p className="ft-20 medium c4 my-6 md:my-3">Transfer funds</p>
            <p className="c2 ft-16 w-2/3 md:w-11/12 md:mb-8">
              Client transfers beneficiary funds to be disbursed with
              instructions
            </p>
          </div>
          <div className="w-1/4 md:w-full lg:w-1/2  lg:mb-12  relative">
            <div className="w-16 h-16 md:w-12 md:h-12  rounded-full light-blue-bg blue ft-20 medium  flex items-center justify-center">
              4
            </div>
            <p className="ft-20 medium c4 my-6 md:my-3">Monitor disburement</p>
            <p className="c2 ft-16 w-2/3 md:w-11/12 md:mb-8">
              Seat back and monitor transparent disbursement progress via Client
              Dashboard.
            </p>
          </div>
        </div>
      </section>
      <section className="deep-gradient my-10 c-white mb-24">
        <div className="container py-16 px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap">
          <div className="w-1/2 md:w-full">
            <h2 className="medium md:text-3xl md:mb-6">
              Getting started takes less than 10 minutes.
            </h2>
          </div>
          <div className="w-1/2 md:w-full pl-20 md:pl-0">
            <button className="blue-btn md:w-full md:my-2 lg:w-full">
              Start now
            </button>
            <button className="blue-ghost-btn ml-4 md:w-full lg:w-full lg:ml-0 lg:mt-4 md:my-2 md:ml-0">
              Talk to sales team
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
