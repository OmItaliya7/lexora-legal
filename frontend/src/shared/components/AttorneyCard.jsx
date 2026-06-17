import ArrowIcon from "../../shared/icons/ArrowIcon";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const AttorneyCard = ({image, name, role, desc, slug, arrowColor = "text-[#FEFCE1]"}) => {
  const [active, setActive] = useState(false);

  const handleCardClick = () =>{
    if(window.innerWidth < 1024){
      setActive(!active);
    }
  }

  return (
    <article onClick={handleCardClick} className={`group relative overflow-hidden border border-[#FEFCE1] transition-all duration-500 ${active ? "bg-[#FEFCE1] border-transparent" : "bg-transparent lg:hover:bg-[#FEFCE1] lg:hover:border-transparent"}`}>
      {/* IMAGE */}
      <div className="w-full max-w-[370px] h-[521px] mx-auto">
        <img src={image} alt={`${name} - ${role}`} loading="lazy" decoding="async" className="w-full h-full object-cover object-center" />
      </div>

      {/* HOVER OVERLAY */}
      <div className={`absolute left-5.5 right-5.5 bottom-2 bg-[#0E100F] p-4 lg:p-6 z-20 transition-opacity duration-500 ${active ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0 lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto"}`}>

        {/* NAME */}
        <h3 className="mb-2 text-base font-semibold text-[#FEFCE1]">
          {name}
        </h3>
    
        {/* DESC */}
        <p className="mb-2 max-w-62.5 font-medium text-base text-[#D8D6BF]">
          {desc}
        </p>

        {/* BUTTON */}
        <Link aria-label={`Hire ${name}`} to={`/ourteam/${slug}`} className="inline-flex items-center gap-4 py-4 font-semibold text-base text-[#FC8608]">
          Hire Now <ArrowIcon className={arrowColor} />
        </Link>
      </div>

    </article>
  );
};
export default React.memo(AttorneyCard);