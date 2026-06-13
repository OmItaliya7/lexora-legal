// import hammer from "../../../assets/images/home/hammer-rotate.jpg";
// import Header from "../../../shared/layout/Header";
// import { Link } from "react-router-dom";
// import ArrowIcon from "../../../shared/icons/ArrowIcon";

// const HomeHero = () => {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Header */}
//       <div className="relative z-30 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 2xl:px-0">
//         <Header />
//       </div>

//       {/*  Hammer Image */}
//       <div className="absolute top-16 right-0 translate-x-[15%] w-[380px] sm:w-[520px] md:w-[650px] lg:w-[780px] xl:w-[880px] 2xl:w-[968px] z-10 pointer-events-none mix-blend-screen select-none">
//         <img src={hammer} alt="Judge's Gavel" loading="eager" decoding="async" className="w-full object-contain"/>
//         <div className="absolute inset-0 bg-linear-to-b from-[#000000] via-[#00000017] to-transparent pointer-events-none" />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 2xl:px-0 py-12.5 lg:pt-19.25 lg:pb-37.5">

//         {/* HUGE TEXT */}
//         <div className="space-y-5 font-bold text-[55px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] leading-[120%] text-[#FEFCE1]">
//           <p>Reputation.</p>
//           <p className="text-center">Respect.</p>
//           <p className="ml-[30%] md:ml-[35%] lg:ml-[55%]">Result.</p>
//         </div>

//         {/* BOTTOM CONTENT */}
//         <div className="pt-10 lg:pt-0 lg:mt-[-120px]">

//           {/* Brackets Text */}
//           <div className="flex gap-2 sm:gap-3.5 mb-8">
//             <span className="font-extralight text-[40px] md:text-[48px] leading-none text-[#D8D6BF]">{"{"}</span>
//             <p className="max-w-64 xl:max-w-92 font-medium text-sm sm:text-base xl:text-lg text-[#D8D6BF]/60">
//               The best law practice & services for all your legal needs.
//             </p>
//             <span className="font-extralight text-[40px] md:text-[48px] leading-none text-[#D8D6BF]">{"}"}</span>
//           </div>

//           {/* Button */}
//           <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-4 bg-[#FC8608] hover:opacity-90 transition-opacity rounded-full font-semibold text-sm md:text-base text-[#0E100F]">
//             Contact Us <ArrowIcon className="text-[#0E100F]" />
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHero;






import hammer from "../../../assets/images/home/hammer-rotate.webp";
import Header from "../../../shared/layout/Header";
import { Link } from "react-router-dom";
import ArrowIcon from "../../../shared/icons/ArrowIcon";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/*  Hammer Image */}
      <div className="absolute top-16 right-[-120px] sm:right-[-150px] md:right-[-190px] xl:right-0 xl:left-[50%] w-[380px] sm:w-[520px] md:w-[650px] lg:w-[780px] xl:w-[880px] 2xl:w-[968px] z-10 pointer-events-none mix-blend-screen select-none">
        <img src={hammer} alt="Law firm attorney legal services gavel" loading="eager" decoding="async" className="w-full object-contain"/>
        <div className="absolute inset-0 bg-linear-to-b from-[#000000] via-[#00000017] to-transparent pointer-events-none" />
      </div>
      {/* Header */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto">
          <Header />

          {/* Content Container */}
          <div className="py-12.5 lg:pt-19.25 lg:pb-37.5">
            {/* HUGE TEXT */}
            <h1 className="space-y-5 font-bold text-[55px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] leading-[120%] text-[#FEFCE1]">
              <span className="block">Reputation.</span>
              <span className="block text-center">Respect.</span>
              <span className="block ml-[40%] lg:ml-[55%]">Result.</span>
            </h1>

            {/* BOTTOM CONTENT */}
            <div className="pt-10 lg:pt-0 lg:mt-[-120px]">
              {/* Brackets Text */}
              <div className="flex gap-2 sm:gap-3.5 mb-8">
                <span aria-hidden="true" className="font-extralight text-[40px] md:text-[48px] leading-none text-[#D8D6BF]">
                  {"{"}
                </span>
                <p className="max-w-64 xl:max-w-92 font-medium text-sm sm:text-base xl:text-lg text-[#D8D6BF]/60">
                  The best law practice & services for all your legal needs.
                </p>
                <span aria-hidden="true" className="font-extralight text-[40px] md:text-[48px] leading-none text-[#D8D6BF]">
                  {"}"}
                </span>
              </div>

              {/* Button */}
              <Link to="/contact" aria-label="Contact our law firm for legal consultation" className="inline-flex items-center gap-4 px-10 py-4 bg-[#FC8608] hover:opacity-90 transition-opacity rounded-full font-semibold text-sm md:text-base text-[#0E100F]">
                Contact Us <ArrowIcon className="text-[#0E100F]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;