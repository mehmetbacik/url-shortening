import { useContext } from "react";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerResult: React.FC = () => {
  const { currentLink, shortenedUrl } = useContext(URLShortenerContext);

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
    <div className="container mx-auto url-shortener-result">
      {shortenedUrl && (
        <div className="url-shortener-result-content">
          <div className="current">
            <span>{currentLink}</span>
          </div>
          <div className="result">
            <span>{shortenedUrl}</span>
            <button onClick={handleCopy}>Copy</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default URLShortenerResult;
