import quote from "../../assets/icons/testimonials/quote.svg";
import React from "react";

const TestimonialCard = React.memo(({ item, cardRef }) => {
    return(
        <article ref={cardRef} className="box-border border border-light px-8 flex flex-col shrink-0 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-60px)/3)]">
            {/* TOP */}
            <div className="flex justify-between items-center mb-10 lg:mb-21.25">
                <img src={item.profile} alt={`${item.name} profile picture`} loading="lazy" className="w-18 h-18 object-cover mt-4" />
                <div className="flex items-center gap-2">
                    <img src={item.logo} alt="" aria-hidden="true" loading="lazy" className="w-6 h-6" />
                    <p className="text-sm lg:text-lg text-gray">{item.companyname}</p>
                </div>
            </div>

            <img src={quote} alt="" aria-hidden="true" className="mb-8 lg:mb-10 size-5" />

            <p className="mb-10 lg:mb-18 text-base lg:text-2xl text-gray">
                {item.text}
            </p>

            <div className="mt-auto pl-4 mb-8 border-l border-gray font-medium text-gray">
                <p className="text-base mb-2">{item.name}</p>
                <p className="text-xs">{item.role}</p>
                <p className="text-xs">{item.role2}</p>
            </div>

        </article>
    );
});

export default TestimonialCard;