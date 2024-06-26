import React, { useContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerResult: React.FC = () => {
  const { storedShortenedUrls } = useContext(URLShortenerContext);
  const [copiedIndexes, setCopiedIndexes] = useState<number | null>(null);
  const [maxLength, setMaxLength] = useState<number>(25);

  const handleCopy = async (url: string, index: number) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
      setCopiedIndexes(index);
      setTimeout(() => {
        setCopiedIndexes(null);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy URL.");
    }
  };

  const shortenLongUrl = (longUrl: string) => {
    return longUrl.length > maxLength
      ? longUrl.slice(0, maxLength) + "..."
      : longUrl;
  };

  const updateMaxLength = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setMaxLength(20);
    } else if (width < 768) {
      setMaxLength(45);
    } else if (width < 1024) {
      setMaxLength(25);
    } else {
      setMaxLength(40);
    }
  };

  useEffect(() => {
    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);
    return () => {
      window.removeEventListener("resize", updateMaxLength);
    };
  }, []);

  return (
    <div className="container mx-auto url-shortener-result">
      <ToastContainer />
      {storedShortenedUrls.length > 0 && (
        <div className="shortened-urls">
          {storedShortenedUrls.slice(0, 3).map((url, index) => (
            <div className="url-shortener-result-content" key={index}>
              <div className="current">
                <span title={url.longUrl}>{shortenLongUrl(url.longUrl)}</span>
              </div>
              <div className="result">
                <span>{url.shortUrl}</span>
                <button onClick={() => handleCopy(url.shortUrl, index)}>
                  {copiedIndexes === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default URLShortenerResult;
