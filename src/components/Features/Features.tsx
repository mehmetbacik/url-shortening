import React from "react";
import { FeaturesView } from "./components/FeaturesView";
import { Headline } from "./components/Headline";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 features relative">
      <div className="container mx-auto relative">
        <Headline />
        <FeaturesView />
      </div>
    </section>
  );
};

export default Features;
