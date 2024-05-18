import React, { createContext, useContext, useState } from "react";
import axios from "axios";

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

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: currentLink,
        },
        {
          headers: {
            Authorization: `Bearer 360b2e61ff2364d385f1973ab3b2488d79eed72d`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);
      setShortenedUrl(response.data.link);
      setError("");
    } catch (error: any) {
      console.error(
        "Error response:",
        error.response ? error.response.data : error.message
      );
      if (error.response) {
        setError(
          error.response.data.message ||
            "Failed to shorten URL. Please try again."
        );
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
      setShortenedUrl("");
    }
  };

  const handleShorten = () => {
    if (!currentLink.trim()) {
      setError("Please enter a valid URL.");
      return;
    }
    shortenUrl();
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
