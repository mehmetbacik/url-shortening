import React from "react";
import { URLShortenerProvider } from "./context/URLShortenerContext";
import { URLShortenerForm } from "./components/Form";
import { URLShortenerResult } from "./components/Result";
import { URLShortenerError } from "./components/Error";

const URLShortener: React.FC = () => {
  return (
    <URLShortenerProvider>
      <div className="url-shortener animate-slideUp">
        <URLShortenerForm />
        <URLShortenerResult />
        <URLShortenerError />
      </div>
    </URLShortenerProvider>
  );
};

export default URLShortener;
