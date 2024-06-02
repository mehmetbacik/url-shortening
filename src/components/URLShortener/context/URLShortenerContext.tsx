import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ISGD_API_URL = "https://is.gd/create.php";

interface ShortenedUrl {
  longUrl: string;
  shortUrl: string;
}

interface URLShortenerContextProps {
  currentLink: string;
  shortenedUrl: string;
  error: string;
  storedShortenedUrls: ShortenedUrl[];
  handleShorten: () => void;
  updateCurrentLink: (value: string) => void;
}

const URLShortenerContext = createContext<URLShortenerContextProps>({
  currentLink: "",
  shortenedUrl: "",
  error: "",
  storedShortenedUrls: [],
  handleShorten: () => {},
  updateCurrentLink: (value: string) => {},
});

export const useShortener = () => {
  return useContext(URLShortenerContext);
};

export const URLShortenerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLink, setCurrentLink] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [storedShortenedUrls, setStoredShortenedUrls] = useState<
    ShortenedUrl[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedUrls = localStorage.getItem("shortenedUrls");
    if (storedUrls) {
      setStoredShortenedUrls(JSON.parse(storedUrls));
    }
  }, []);

  const handleShorten = async () => {
    setLoading(true);
    try {
      const response = await axios.get(ISGD_API_URL, {
        params: {
          format: "json",
          url: currentLink,
        },
      });
      if (response.data.shorturl) {
        const newShortenedUrl: ShortenedUrl = {
          longUrl: currentLink,
          shortUrl: response.data.shorturl,
        };

        setShortenedUrl(response.data.shorturl);
        setError("");

        const updatedStoredUrls = [newShortenedUrl, ...storedShortenedUrls];
        setStoredShortenedUrls(updatedStoredUrls);

        localStorage.setItem(
          "shortenedUrls",
          JSON.stringify(updatedStoredUrls)
        );
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateCurrentLink = (value: string) => {
    setCurrentLink(value);
  };

  return (
    <URLShortenerContext.Provider
      value={{
        currentLink,
        shortenedUrl,
        error,
        storedShortenedUrls,
        handleShorten,
        updateCurrentLink,
      }}
    >
      {children}
    </URLShortenerContext.Provider>
  );
};

export default URLShortenerContext;
