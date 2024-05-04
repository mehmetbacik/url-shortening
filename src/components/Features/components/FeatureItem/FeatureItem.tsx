import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureItem;
