import checkedArrow from "@/assets/images/about/checked-arrow.svg"

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
            <h3 className="text-light text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[120%]">
              {title}
            </h3>

            {/* HEADING */}
            <h4 className="text-light text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[120%]">
              {heading}
            </h4>
          </div>
          
          <div className="flex flex-col gap-9">
            {/* DESCRIPTION */}
            <p className="text-gray/60 text-sm 2xl:text-base font-medium">
              {description}
            </p>

            {/* POINTS */}
            <ul className="space-y-4">

              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-gray text-base lg:text-lg">
                  <img src={checkedArrow} alt="" className="size-5 text-light shrink-0" />
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