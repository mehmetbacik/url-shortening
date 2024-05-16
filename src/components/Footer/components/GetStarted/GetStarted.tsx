import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div className="w-full get-started">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 py-12">
          <span>Boost your links today</span>
          <button className="px-6 py-3 hover:cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
