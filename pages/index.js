import Image from "next/image";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  "/assets/tr1.png",
  "/assets/tr2.png",
  "/assets/tr3.png",
  "/assets/tr4.png",
  "/assets/tr5.png",
  "/assets/tr6.png",
];
let arr = new Array(10).fill([...partners]).flat();

export const Partnering = () => (
  <div className="w-full shadow-2 px-12 py-20 md:px-5 md:py-5 rounded-3xl mt-12 bg-map">
    <h2 className="md:w-5/12 md:w-full mb-4 md:text-3xl">
      Interested in partnering with us
    </h2>
    <div className="flex flex-wrap w-full justify-between">
      <p className="c2 w-1/3 md:text-sm md:w-9/12">
        If you’re keen to hear more about our plans to be Africa’s micro/small
        business bank of choice, please get in touch.
      </p>
      <div className="shadow-1 bg-white rounded-full w-16 h-16 md:w-12 md:h-12 flex items-center justify-center side-to-side-2">
        <img src="/assets/blue-arrow-right.svg" className="w-6 md:w-4" alt="" />
      </div>
    </div>
  </div>
);

export const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div className="container py-16 px-40 lg:px-6 lg:px-6  mx-auto">
      <Slider {...settings}>
        {arr.map((link, i) => (
          <div key={i} className="md:w-1/3 md:w-5/12 lg:w-2/12 md:mb-7 mr-1">
            <img key={i} src={link} alt="" className="h-12 md:h-10" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full light-bg">
      <header className="banner-bg">
        <Navbar />
        <div className="container pt-36 px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap justify-between">
          <div className="w-1/2 md:w-full flex flex-col justify-center -mt-12 md:mt-10">
            <h1 className="md:text-5xl md:text-4xl medium">
              Building Wealth{" "}
              <span className="block md:inline">at the base of</span> the
              Pyramid
            </h1>
            <p className="c3 mt-4 w-3/4">
              We leverage the power of tech to drive financial inclusion - one
              mobile device at a time.
            </p>
            <img
              src="/assets/c-arrow-down.svg"
              className="w-10 mt-4 up-to-down"
              alt=""
            />
          </div>
          <div className="w-1/2 md:w-full md:mt-10">
            <img
              src="/assets/vv-min.png"
              className="w-full side-to-side-2 home-banner"
              alt=""
            />
          </div>
        </div>
        <div className="container px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap justify-between">
          <p className="blue ft-14">Trusted by</p>
        </div>
        <Partners />
      </header>
      <section className="container py-16 px-40 lg:px-6 lg:px-6  mx-auto flex flex-col flex-wrap justify-between">
        <h2 className="w-1/2 md:text-3xl md:w-full mb-4 mt-16 medium">
          Democratizing access to financial services.
        </h2>
        <p className="c3 mb-10 w-2/5 md:w-3/4">
          We leverage the power of tech to drive financial inclusion - one
          mobile device at a time.
        </p>

        <div className="flex justify-between flex-wrap">
          <div className="half_ md:w-full md:h-auto md:mb-12 relative shadow-2 overflow-hidden bg-white rounded-3xl">
            <div className="p-12">
              <h2 className="mb-4 medium md:text-3xl">The People’s Bank</h2>
              <p className="c2 w-10/12 ft-14">
                Democratizing Access to financial services. Easy payments,
                simple banking. For everyone.
              </p>
            </div>

            <img
              src="/assets/couple.png"
              className="absolute bottom-0 md:relative  swell"
              alt=""
            />
          </div>
          <div className="half_ md:w-full md:h-auto shadow-2 overflow-hidden blue-gradient rounded-3xl">
            <h2 className="px-12 py-12 c-white mb-0 medium md:text-3xl">
              Bulk disbursment made easy
            </h2>
            <img
              src="/assets/computer-min.png"
              className="ml-24 my-2 md:ml-0 swell"
              style={{ width: "110%" }}
              alt=""
            />
            <p className="ft-18 px-12 py-6 c-white mb-4 w-10/12 md:w-full">
              With AkuPay disburse, you can make bulk payments, verify account
              details, notify and more to your beneficiaries
            </p>
          </div>
        </div>
        <Partnering />
      </section>
      <section className="deep-gradient my-10 c-white">
        <div className="container py-16 px-40 lg:px-6 lg:px-6  mx-auto flex flex-wrap justify-between md:py-14 flex flex-wrap">
          <div className="w-1/4 md:w-1/2 md:mb-10 text-center">
            <h1 className="bold md:text-5xl md:text-4xl">$28M+</h1>
            <p className="ft-14 md:text-sm md:w-3/4 md:w-7/12 mx-auto">
              In micro-loans disbursed
            </p>
          </div>
          <div className="w-1/4 md:w-1/2 md:mb-10 text-center">
            <h1 className="bold md:text-5xl md:text-4xl">4.2M</h1>
            <p className="ft-14 md:text-sm md:w-3/4 md:w-7/12 mx-auto">
              Entrepreneurs reached
            </p>
          </div>
          <div className="w-1/4 md:w-1/2 text-center">
            <h1 className="bold md:text-5xl md:text-4xl">52%</h1>
            <p className="ft-14 md:text-sm md:w-3/4 md:w-7/12 mx-auto">
              Women entrepreneurs
            </p>
          </div>
          <div className="w-1/4 md:w-1/2 text-center">
            <h1 className="bold md:text-5xl md:text-4xl">2.5K+</h1>
            <p className="ft-14 md:text-sm md:w-3/4 md:w-7/12 mx-auto">
              Agents in network
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
