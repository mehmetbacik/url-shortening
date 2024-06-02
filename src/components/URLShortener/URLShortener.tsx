import React from "react";
import { URLShortenerProvider } from "./context/URLShortenerContext";
import { URLShortenerFormView } from "./components/Form";
import { URLShortenerResult } from "./components/Result";
import { URLShortenerError } from "./components/Error";

const URLShortener: React.FC = () => {
  return (
    <URLShortenerProvider>
      <div className="flex flex-col bg-gray-100 url-shortener animate-slideUp">
        <div className="url-shortener-container">
          <URLShortenerFormView />
          <URLShortenerResult />
          <URLShortenerError />
        </div>
      </div>
    </URLShortenerProvider>
  );
};

export default URLShortener;
