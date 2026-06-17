import AttorneyCard from "../../../shared/components/AttorneyCard";
import arrowRight from "../../../assets/decorations/our-team-arrow.webp";
import { attorneysData } from "../data/attorneysData";

const attorneyOrder =[1,2,3,4,5,3,3,4,1]

const attorneyMap = Object.fromEntries(
  attorneysData.map((item) => [item.id, item])
);
const orderedAttorneys = attorneyOrder.map((id) => attorneyMap[id]);

const OurAttorneyTeam = () => {
  return (
    <section id="our-attorneys-team" aria-labelledby="our-attorneys-heading" className="relative overflow-hidden">

      {/* GOLDEN ARROW */}
      <img src={arrowRight} alt="" loading="lazy" aria-hidden="true" className="hidden sm:block absolute right-0 top-1 w-[190px] lg:w-auto pointer-events-none"/>
      
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="max-w-[1200px] mx-auto py-17.5 md:py-22.5 lg:py-25 border-b border-[#FEFCE1]/20">
          {/* TITLE */}
          <h2 id="our-attorneys-heading" className="mb-12 sm:mb-15 lg:mb-17.5 text-center font-bold text-3xl md:text-[40px] leading-[120%] text-[#FEFCE1]">
            Our Attorneys
          </h2>

          {/* GRID */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11.25">
            {orderedAttorneys.map((item, i) => (
              <li key={`${item.id}-${i}`}>
                <AttorneyCard {...item} arrowColor="text-[#FC8608]"/>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default OurAttorneyTeam;


