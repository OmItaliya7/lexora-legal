// import { FiCheck } from "react-icons/fi";
// import arrowDecor from "../../../assets/decorations/about-story-arrow.png";

// const AboutCard = ({title, heading, description, image, points}) => {
//   return (
//     <section className="relative overflow-hidden">

//       <img src={arrowDecor} alt="arrowDecor" className="hidden lg:block absolute w-full h-full pointer-events-none opacity-70 select-none" />

//       {/* CONTENT */}
//       <div className="relative z-10 flex flex-col lg:flex-row justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[213px] py-16 md:py-20 lg:py-25 gap-12 md:gap-16 lg:gap-[90px] xl:gap-[146px] 2xl:gap-[200px]">
//         {/* IMAGE */}

//         {/* IMAGE */}
//         <div className="shrink-0 overflow-hidden border border-[#FEFCE1]  sm:max-w-[320px] md:max-w-[360px] lg:w-[376px] lg:h-[507px] xl:w-[406px] xl:h-[528px] ">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="w-full max-w-[505px] 2xl:max-w-[580px] flex flex-col justify-center gap-5">
//           <div className="flex flex-col gap-10">
//             {/* SMALL TITLE */}
//             <h3 className="text-[#FEFCE1] text-[28px] sm:text-[34px] lg:text-[40px] 2xl:text-[46px] font-semibold leading-[120%]">
//               {title}
//             </h3>

//             {/* HEADING */}
//             <h2 className="text-[#FEFCE1] text-[40px] 2xl:text-[46px] font-bold leading-[120%]">
//               {heading}
//             </h2>
//           </div>
          
//           <div className="flex flex-col gap-[36px]">
//             {/* DESCRIPTION */}
//             <p className="text-[#D8D6BF]/60 text-sm 2xl:text-base font-medium">
//               {description}
//             </p>

//             {/* POINTS */}
//             <ul className="flex flex-col gap-4">

//               {points.map((point, index) => (
//                 <li key={index} className="flex items-center gap-2 text-[#D8D6BF] text-base lg:text-lg">
//                   <FiCheck className="w-5 h-5 text-[#FEFCE1] shrink-0" />
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default AboutCard;















import checkedArrow from "../../../assets/images/about/checked-arrow.svg"

const AboutCard = ({title, heading, description, image, points, imageAlt}) => {
  return (

      <section className="relative overflow-hidden z-10 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-[90px] xl:gap-[146px]">

        {/* IMAGE */}
        <div className="w-full max-w-[406px] aspect-[406/528] overflow-hidden shrink-0">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full max-w-[500px] flex flex-col justify-center gap-5">
          <div className="space-y-8">
            {/* SMALL TITLE */}
            <h3 className="text-[#FEFCE1] text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[120%]">
              {title}
            </h3>

            {/* HEADING */}
            <h4 className="text-[#FEFCE1] text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[120%]">
              {heading}
            </h4>
          </div>
          
          <div className="flex flex-col gap-[36px]">
            {/* DESCRIPTION */}
            <p className="text-[#D8D6BF]/60 text-sm 2xl:text-base font-medium">
              {description}
            </p>

            {/* POINTS */}
            <ul className="space-y-4">

              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-[#D8D6BF] text-base lg:text-lg">
                  <img src={checkedArrow} alt="" className="size-5 text-[#FEFCE1] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

  );
};

export default AboutCard;