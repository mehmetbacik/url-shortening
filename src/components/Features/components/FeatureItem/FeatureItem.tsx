import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg p-10 shadow-md relative features-item">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-4 mt-9 content">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
