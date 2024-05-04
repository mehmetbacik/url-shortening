import React from "react";
import { FeatureItem } from "../FeatureItem";

const FeaturesView: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureItem
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <FeatureItem
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <FeatureItem
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </>
  );
};

export default FeaturesView;
