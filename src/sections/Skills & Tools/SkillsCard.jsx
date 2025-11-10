import React from "react";
import SpotlightCard from "../../ui/SpotlightCard";

function SkillsCard({ title, children }) {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
      bgGradient="linear-gradient(to bottom right, #b1b2b2, #363939)" // skill gradient
    >
      <h3 className="font-semibold text-lg text-neutral-100 mb-3">{title}</h3>
      {children}
    </SpotlightCard>
  );
}

export default SkillsCard;
