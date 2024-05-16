import React, { useState } from "react";
import { shortenUrl } from "../../services/api";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { Error } from "./components/Error";

const URLShortener: React.FC = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (originalUrl: string) => {
    try {
      const response = await shortenUrl(originalUrl);
      setShortenedUrl(response.result_url);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  return (
    <section className="url-shortener animate-slideUp">
      <Form onSubmit={handleFormSubmit} />
      {shortenedUrl && (
        <Result shortenedUrl={shortenedUrl} onCopy={handleCopy} />
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default URLShortener;
