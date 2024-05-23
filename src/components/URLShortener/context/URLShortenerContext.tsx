import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ISGD_API_URL = "https://is.gd/create.php";

interface URLShortenerContextProps {
  currentLink: string;
  shortenedUrl: string;
  error: string;
  handleShorten: () => void;
  updateCurrentLink: (value: string) => void;
}

const URLShortenerContext = createContext<URLShortenerContextProps>({
  currentLink: "",
  shortenedUrl: "",
  error: "",
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

  const handleShorten = async () => {
    try {
      const response = await axios.get(ISGD_API_URL, {
        params: {
          format: "json",
          url: currentLink,
        },
      });
      console.log("API Response:", response.data);
      if (response.data.shorturl) {
        setShortenedUrl(response.data.shorturl);
        setError("");
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } catch (error: any) {
      console.error("Error response:", error);
      setError("Failed to shorten URL. Please try again.");
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
        handleShorten,
        updateCurrentLink,
      }}
    >
      {children}
    </URLShortenerContext.Provider>
  );
};

export default URLShortenerContext;
