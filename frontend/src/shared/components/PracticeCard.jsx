import { Link } from "react-router-dom";
import ArrowIcon from "@/shared/icons/ArrowIcon";
import React from "react";

const PracticeCard = ({ icon, title, desc, slug}) => {
  const Icon = icon;
  return (
    <article className="group flex flex-col items-start justify-between p-6 sm:p-7 lg:p-8 gap-4 border border-light/60 hover:bg-light transition-colors duration-300">
      {/* ICON */}
      <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-tertiary group-hover:bg-[#0E100F26] transition-all duration-200">
        <Icon aria-hidden="true" className="practice-icon size-8" />
      </div>

      {/* TITLE */}  
      <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-light group-hover:text-primary">
        {title}
      </h3>

      {/* DESC */}
      <p className="flex-1 font-medium text-sm sm:text-base text-gray/70 group-hover:text-dark-gray/70">
        {desc}
      </p>

      {/* BUTTON */}
      <Link to={`/practicearea/${slug}`} aria-label={`Learn more about ${title}`} className="inline-flex items-center py-4 gap-4 text-secondary font-semibold transition-colors duration-300">
        Learn More <ArrowIcon className="text-light group-hover:text-secondary transition-colors duration-300" />
      </Link>

    </article>
  );
};

export default React.memo(PracticeCard);