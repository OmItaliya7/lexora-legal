import { Link } from "react-router-dom";
import ArrowIcon from "../../shared/icons/ArrowIcon";
import Header from "../../shared/layout/Header";
import Footer from "../../shared/layout/Footer";
import bgImage from "../../assets/images/auth/login-bg.webp";
import error404 from "../../assets/images/error/not-found.png";

const ErrorPage = () => {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${bgImage})`}}/>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col max-w-[1440px] mx-auto px-5">

        {/* HEADER */}
        <Header />

        {/* CENTER CONTENT */}
        <div className="flex items-center justify-center px-4 sm:px-6 pt-17 pb-42.5">
          <div className="flex flex-col gap-13.5 items-center text-center">

            {/* 404 IMAGE */}
            <img src={error404} alt="404" loading="eager" />
            {/* SUBTITLE */}
            <p className="text-[#FEFCE1] text-[28px] sm:text-[34px] lg:text-[40px] font-extralight">
              page not found
            </p>
            
            {/* TEXT CONTENT WRAPPER */}
            <div className="flex flex-col justify-center items-center gap-3">
              
              {/* MAIN HEADING */}
              <h1 className="text-[#FEFCE1] text-[28px] sm:text-[34px] lg:text-[38px] font-semibold leading-12">
                Seems you are lost, go back home.
              </h1>

              {/* DESCRIPTION */}
              <p className="max-w-[500px] text-[#D8D6BF] text-sm sm:text-base lg:text-lg">
                Sorry but the page you are looking for does not exist,
                have been removed, name changed or is temporarily unavailable
              </p>

            </div>

            {/* BUTTON */}
            <Link to="/" className="self-center flex items-center gap-4 bg-[#FC8608] hover:opacity-90 transition-opacity text-[#0E100F] font-semibold px-10 py-4 rounded-full text-sm md:text-base">
              Back To Homepage
              <ArrowIcon className="text-[#0E100F]" />
            </Link>
            
          </div>
        </div>
      </div>

    </section>
    <div className="pt-16 lg:pt-25">
      <Footer />
    </div>
    </>
  );
};

export default ErrorPage;