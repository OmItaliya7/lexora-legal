// const PricingItem = ({title,description,highlight,premium,nonMember,compactSpacing,}) => {
//   return (
//     <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 py-5">

//       {/* LEFT */}
//       <div className="w-full lg:max-w-[260px]">

//         {title && (   
//           <h3 className="mb-4 lg:mb-6 font-semibold text-lg lg:text-2xl text-[#FEFCE1]">
//             {title}
//           </h3>
//         )}
//         <p className="font-medium text-sm text-[#D8D6BF]">
//           {highlight && (
//             <span className="pr-1 font-extralight text-2xl leading-none">{`{`}</span>
//           )}
//             {description}
//           {highlight && (
//             <span className="pl-1 font-extralight text-2xl leading-none align-bottom">{`}`}</span>
//           )}
//         </p>

//       </div>

//       {/* RIGHT */}
//       <div className={`flex justify-center sm:justify-end lg:justify-between w-full gap-14 sm:gap-20 ${compactSpacing ? "lg:max-w-[490px]" : "lg:max-w-108.75"}`}>

//         {/* PREMIUM */}
//         <div className="text-center">
//           <h4 className={`font-semibold text-[32px] leading-normal text-[#FEFCE1] ${premium.note ? "mb-4 lg:mb-6" : ""}`}>
//             {premium.price}
//           </h4>

//           {premium.note && (
//             <p className="text-sm max-w-42.5 text-[#D8D6BF]">
//               {premium.note}
//             </p>
//           )}
//         </div>

//         {/* NON MEMBER */}
//         <div className="lg:min-w-[170px] text-center">

//           <h4 className={`font-semibold text-[32px] leading-normal text-[#FEFCE1] ${nonMember.note ? "mb-4 lg:mb-6" : ""}`}>
//             {nonMember.price}
//           </h4>

//           {nonMember.note && (
//             <p className="text-sm text-[#D8D6BF]">
//               {nonMember.note}
//             </p>
//           )}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default PricingItem;







const PricingItem = ({title,description,highlight,premium,nonMember,compactSpacing,}) => {
  return (
    <article className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 py-5">

      {/* LEFT */}
      <div className="w-full lg:max-w-[260px]">

        {title && (   
          <h3 className="mb-4 lg:mb-6 font-semibold text-lg lg:text-2xl text-[#FEFCE1]">
            {title}
          </h3>
        )}
        <p className="font-medium text-sm text-[#D8D6BF]">
          {highlight && (
            <span className="pr-1 font-extralight text-2xl leading-none">{`{`}</span>
          )}
            {description}
          {highlight && (
            <span className="pl-1 font-extralight text-2xl leading-none align-bottom">{`}`}</span>
          )}
        </p>

      </div>

      {/* RIGHT */}
      <div className={`flex justify-center sm:justify-end lg:justify-between w-full gap-14 sm:gap-18 ${compactSpacing ? "lg:max-w-[490px]" : "lg:max-w-112.75"}`}>

        {/* PREMIUM */}
        <div className="text-center">
          <p className={`font-semibold text-[28px] lg:text-[32px] leading-normal text-[#FEFCE1] ${premium.note ? "mb-4 lg:mb-6" : ""}`}>
            {premium.price}
          </p>

          {premium.note && (
            <p className="text-sm max-w-42.5 text-[#D8D6BF]">
              {premium.note}
            </p>
          )}
        </div>

        {/* NON MEMBER */}
        <div className="lg:min-w-[170px] text-center">

          <h4 className={`font-semibold text-[28px] lg:text-[32px] leading-normal text-[#FEFCE1] ${nonMember.note ? "mb-4 lg:mb-6" : ""}`}>
            {nonMember.price}
          </h4>

          {nonMember.note && (
            <p className="text-sm text-[#D8D6BF]">
              {nonMember.note}
            </p>
          )}

        </div>

      </div>

    </article>
  );
};

export default PricingItem;