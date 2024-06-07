import React from "react";
import { FeatureItem } from "../FeatureItem";
import BrandImage from "../../../../library/images/icon-brand-recognition.svg"
import DetailedImage from "../../../../library/images/icon-detailed-records.svg"
import FullyImage from "../../../../library/images/icon-fully-customizable.svg"

const FeaturesView: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center animate-slideUp">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 features-view">
        <FeatureItem
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          image={BrandImage}
        />
        <FeatureItem
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          image={DetailedImage}
        />
        <FeatureItem
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          image={FullyImage}
        />
      </div>
      <i className="line"></i>
    </div>
  );
};

export default FeaturesView;
