import { categories } from "../../data/content";
import CategoryCard from "./CategoryCard.jsx";

import DesignIcon from "../../assets/design.svg";
import DevelopmentIcon from "../../assets/dev.svg";
import MarketingIcon from "../../assets/marketing.svg";
import BusinessIcon from "../../assets/business.svg";
import PhotographyIcon from "../../assets/photography.svg";
import ITIcon from "../../assets/it.svg";

export default function LearningPathsSection() {
  const categoryIcons = {
    Design: DesignIcon,
    Development: DevelopmentIcon,
    Marketing: MarketingIcon,
    Business: BusinessIcon,
    Photography: PhotographyIcon,
    "IT & Software": ITIcon,
  };

  return (
    <section>
      <h2 className="mt-[70px] text-center text-xl font-extrabold">
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p className="mx-auto mt-3.5 max-w-[560px] text-center text-[12.5px] leading-loose text-mut">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our
        carefully curated categories.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
        {categories.map((name) => (
          <CategoryCard
            key={name}
            name={name}
            icon={categoryIcons[name]}
          />
        ))}
      </div>
    </section>
  );
}