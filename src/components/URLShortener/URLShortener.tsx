import React from "react";
import { URLShortenerProvider } from "./context/URLShortenerContext";
import { URLShortenerFormView } from "./components/Form";
import { URLShortenerResult } from "./components/Result";
import { URLShortenerError } from "./components/Error";

const URLShortener: React.FC = () => {
  return (
    <URLShortenerProvider>
      <div className="flex flex-col url-shortener">
        <URLShortenerFormView />
        <URLShortenerResult />
        <URLShortenerError />
      </div>
    </URLShortenerProvider>
  );
};

export default URLShortener;
