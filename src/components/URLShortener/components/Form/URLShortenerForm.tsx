import React, { useContext, useState } from "react";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerForm: React.FC = () => {
  const { handleShorten } = useContext(URLShortenerContext);
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleShorten();
      setOriginalUrl("");
      setError("");
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="container mx-auto url-shortener-content rounded-lg">
      <form onSubmit={handleFormSubmit} className="flex items-center gap-3 py-[50px] px-[55px]">
        <input
          type="text"
          className="w-full rounded-lg"
          value={originalUrl}
          placeholder="Shorten a link here..."
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button className="rounded-lg" type="submit">Shorten It!</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default URLShortenerForm;
