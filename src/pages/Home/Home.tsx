import React from "react";
import { Header } from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to URL Shortening</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vestibulum ex ut felis imperdiet, nec fermentum turpis volutpat.
          Vestibulum ac lorem eget justo tristique suscipit non et metus. Sed
          fermentum ultrices felis.
        </p>
      </div>
    </div>
  );
};

export default Home;
