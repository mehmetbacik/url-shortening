import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { URLShortener } from "../../components/URLShortener";
import { Features } from "../../components/Features";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <URLShortener />
      <Features />
    </div>
  );
};

export default Home;
