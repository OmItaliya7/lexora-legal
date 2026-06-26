import PracticeCard from "@/shared/components/PracticeCard";
import { practiceAreasData } from "@/features/practice-areas/data/practiceAreasData";
import goldenArrow from "@/assets/decorations/practice-arrow.webp";

const PracticeSection = () => {
  return (
    <section aria-labelledby="practice-areas-heading" className="relative overflow-hidden border-y border-light/40">
      {/* GOLDEN ARROW */}
      <img src={goldenArrow} alt="" loading="lazy" aria-hidden="true" className="hidden sm:block absolute left-0 top-6 lg:top-12 pointer-events-none"/>

      {/* CONTAINER */}
      <div className="container-main">
        <div className="container-content py-17.5 md:py-22.5 lg:py-25">
        {/* TITLE */}
        <h2 id="practice-areas-heading" className="mb-10 md:mb-12 xl:mb-15 text-center font-bold text-3xl sm:text-4xl lg:text-[40px] leading-[120%] text-light">
          Our Legal Practice Areas
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7.5">
          {practiceAreasData.map((card) => (
            <PracticeCard key={card.slug} icon={card.icon} title={card.title} desc={card.desc} active={card.active} slug={card.slug} />
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default PracticeSection;