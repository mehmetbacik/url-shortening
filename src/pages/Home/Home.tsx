import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { URLShortener } from "../../components/URLShortener";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <URLShortener />
    </div>
  );
};

export default Home;
