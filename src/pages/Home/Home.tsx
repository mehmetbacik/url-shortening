import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { URLShortener } from "../../components/URLShortener";
import { Features } from "../../components/Features";
import { Footer } from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <URLShortener />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
