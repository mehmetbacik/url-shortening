import React from "react";
import { FeaturesView } from "./components/FeaturesView";
import { Headline } from "./components/Headline";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 features relative">
      <div className="container mx-auto">
        <Headline />
        <FeaturesView />
      </div>
    </section>
  );
};

export default Features;
