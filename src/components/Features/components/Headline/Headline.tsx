import React from "react";

const FeaturesView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center headline">
      <div className="mb-3">
        <span>
          Advanced Statistics
        </span>
      </div>
      <div className="mb-12 w-1/3">
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
    </div>
  );
};

export default FeaturesView;
