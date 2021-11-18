import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";

function JobDesc(props) {
  return (
    <div className="w-full light-bg">
      <header className="banner-bg h-70_ overflow-hidden md:h-auto">
        <Navbar />
        <div className="container py-16 pt-36 px-40 lg:px-6  md:pb-20  mx-auto flex flex-wrap relative">
          <div className="w-1/2 flex flex-col justify-center mt-0 md:w-full">
            <h1 className="medium md:text-5xl md:text-5xl">
              Democratizing
              <span className="block md:inline"> access to </span>
              <span className="block md:inline">financial services.</span>
            </h1>
            <p className="c3 w-2/3 mt-4 ft-16 md:w-11/12">
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
            src="/assets/banner7.svg"
            className="w-6/12 md:w-full md:mt-12"
            alt=""
          />
        </div>
      </header>

      <section className="white-bg container py-16 px-40 lg:px-6  lg:px-6  md:pb-20  mx-auto relative">
        <p className="ft-16 medium c4 mb-4">Software Engineer (Backend)</p>

        <div className="block mb-12">
          <p className="c2 ft-14">
            Aku is a full-service, digital-only bank with a mission to make
            banking more accessible, affordable and rewarding for every African
            on the planet. Founded in 2019, Aku has offices in London and Lagos,
            Nigeria. The bank provides full banking services through its suite
            of apps for Android phones, iPhones and the web, allowing everyday
            Nigerians with internet access to operate a spending account, access
            instant credit, save money automatically and earn annual interest
            without the burden of traditional bank charges such as card
            maintenance fees, account maintenance fees and excessive transfer
            fees. Aku also provides its customers with free debit cards which it
            delivers across Nigeria at no extra cost.
          </p>
        </div>
        <p className="ft-16 medium c4 mb-4">Job Purpose</p>

        <div className="block mb-12">
          <p className="c2 ft-14">
            We are looking for a result-driven and analytical software engineer
            (backend) who will troubleshoot and improve existing backend
            applications and processes. S/he will use his or her understanding
            of programming tools and languages to analyze current codes,
            formulate more efficient processes, solve problems and create a more
            seamless experience for users.
          </p>
        </div>

        <p className="ft-16 medium c4 mb-4">Responsibilities</p>

        <div className="block mb-12">
          <p className="c2 ft-14">
            Take part in the entire application lifecycle, focusing on coding
            and debugging
          </p>
          <p className="c2 ft-14">
            Write quality code to develop functional web applications
          </p>
          <p className="c2 ft-14">
            Debug applications and detect and fix errors
          </p>
          <p className="c2 ft-14">
            Work together with engineers building client-facing applications to
            integrate UI elements with server-side logic
          </p>
          <p className="c2 ft-14">
            Implement modern technologies to improve legacy applications
          </p>
          <p className="c2 ft-14">
            Collect, analyse and address technical and design requirements
          </p>
          <p className="c2 ft-14">
            Help to create reusable code and libraries for future use
          </p>
          <p className="c2 ft-14">Train and support internal teams</p>
          <p className="c2 ft-14">
            Interact with developers, designers and system administrators to
            identify new features
          </p>
          <p className="c2 ft-14">Stay informed about emerging technologies</p>
          <p className="c2 ft-14"></p>
        </div>

        <p className="ft-16 medium c4 mb-4">Requirements</p>
        <div className="block mb-12">
          <p className="c2 ft-14">
            Strong computer science fundamentals, algorithms, and data
            structures background
          </p>
          <p className="c2 ft-14">3+ years of industry experience</p>
          <p className="c2 ft-14">
            Willing to embrace and enrich Kuda culture of empathy, teamwork and
            passion
          </p>
          <p className="c2 ft-14">
            Have a strong desire for learning and growth.
          </p>
          <p className="c2 ft-14">
            Passionate about improving developer productivity
          </p>
          <p className="c2 ft-14">Strive for speed and quality</p>
          <p className="c2 ft-14">Desire to automate</p>
          <p className="c2 ft-14">
            Model of software engineering best practices, including agile
            development, unit testing, code reviews, design documentation,
            debugging, and troubleshooting.
          </p>
          <p className="c2 ft-14">Solid experience with C#, .Net, .Net Core</p>
          <p className="c2 ft-14">
            Strong computer science fundamentals, algorithms, and data
            structures background
          </p>
          <p className="c2 ft-14">
            Bachelors or higher in Computer Science or a related field or
            equivalent experience
          </p>
          <p className="c2 ft-14">
            Have a deep understanding of Source Code Management
          </p>
          <p className="c2 ft-14">
            Have in-depth understanding of Cloud Technologies (Azure, AWS)
          </p>
          <p className="c2 ft-14">
            Have a great understanding of databases and SQL
          </p>
          <p className="c2 ft-14">
            Have in-depth understanding of REST APIs, SOAP & RPC
          </p>
          <p className="c2 ft-14">
            Have in-depth understanding of the Software Development Life Cycle
            (SDLC)
          </p>
          <p className="c2 ft-14">
            Are able to do technical writing and API documentation
          </p>
          <p className="c2 ft-14">
            Are familiar with project management tools (e.g Trello, Jira, etc)
          </p>
          <p className="c2 ft-14">Have good problem-solving skills</p>
          <p className="c2 ft-14">
            Have strong verbal and written communication skills
          </p>
        </div>

        <button className="main-btn">Apply now</button>
      </section>
      <Footer />
    </div>
  );
}

export default JobDesc;
