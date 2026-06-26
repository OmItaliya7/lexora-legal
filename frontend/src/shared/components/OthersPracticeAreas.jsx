import PracticeCard from "@/shared/components/PracticeCard";
import { practiceAreasData } from "@/features/practice-areas/data/practiceAreasData";  

const OthersPracticeAreas = () => {

  // last 3 cards from practiceAreasData
  const cards = practiceAreasData.slice(-3);

  return (
    <section aria-labelledby="other-practice-areas-heading" className="container-main">
      <div className="container-content py-17.5 md:py-22.5 lg:py-25">
        {/* TITLE */}
        <h2 id="other-practice-areas-heading" className="max-w-[340px] font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[120%] text-light">
          Our Other Legal Practice Areas
        </h2>
        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pt-10.5">
          {cards.map((item) => (
              <PracticeCard
                key={item.slug}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                slug={item.slug}
              />
            ))}

        </div>
      </div>
    </section>
  );
};

export default OthersPracticeAreas;