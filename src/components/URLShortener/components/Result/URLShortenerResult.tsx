import { useContext, useEffect, useState } from "react";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerResult: React.FC = () => {
  const { currentLink, shortenedUrl } = useContext(URLShortenerContext);
  const [storedShortenedUrls, setStoredShortenedUrls] = useState<
    ShortenedUrl[]
  >([]);

  useEffect(() => {
    const storedUrls = localStorage.getItem("shortenedUrls");
    if (storedUrls) {
      setStoredShortenedUrls(JSON.parse(storedUrls));
    }
  }, []);

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    } catch (err) {
      alert("Failed to copy URL.");
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
            <button onClick={() => handleCopy(shortenedUrl)}>Copy</button>
          </div>
        </div>
      )}

      {storedShortenedUrls.length > 0 && (
        <div className="stored-shortened-urls">
          <h2>Previously Shortened URLs</h2>
          <ul>
            {storedShortenedUrls.map((url, index) => (
              <li key={index}>
                <span>{url.longUrl}</span> - <span>{url.shortUrl}</span>
                <button onClick={() => handleCopy(url.shortUrl)}>Copy</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default URLShortenerResult;
