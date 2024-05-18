import React, { useContext } from "react";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerResult: React.FC = () => {
  const { shortenedUrl } = useContext(URLShortenerContext);

  const handleCopy = async () => {
    if (shortenedUrl) {
      try {
        await navigator.clipboard.writeText(shortenedUrl);
        alert("URL copied to clipboard!");
      } catch (err) {
        alert("Failed to copy URL.");
      }
    }
  };

  return (
    <div>
      {shortenedUrl && (
        <div>
          <p>Shortened URL: {shortenedUrl}</p>
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default URLShortenerResult;
