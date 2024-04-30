import React, { useState } from "react";
import axios from "axios";

const URLShortener: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
        url: encodeURIComponent(originalUrl),
      });
      setShortenedUrl(response.data.result_url);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Shorten a link here..."
        />
        <button type="submit">Shorten It!</button>
      </form>
      {shortenedUrl && (
        <div>
          <p>Shortened URL: {shortenedUrl}</p>
          <button onClick={() => navigator.clipboard.writeText(shortenedUrl)}>
            Copy
          </button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default URLShortener;
