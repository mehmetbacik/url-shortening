import React, { useContext, useState } from "react";
import URLShortenerContext from "../../context/URLShortenerContext";

const URLShortenerFormView: React.FC = () => {
  const { handleShorten, updateCurrentLink, error } =
    useContext(URLShortenerContext);
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl.trim()) {
      setFormError("Please enter a valid URL.");
      return;
    }
    try {
      updateCurrentLink(originalUrl);
      await handleShorten();
      setOriginalUrl("");
      setFormError("");
    } catch (error) {
      setFormError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="container mx-auto url-shortener-content rounded-lg">
      <div className="py-[50px] px-[55px] relative">
        <form onSubmit={handleFormSubmit} className="flex items-center gap-4">
          <input
            type="text"
            className={`w-full rounded-lg p-2 ${
              formError || error ? "border-red-500" : ""
            }`}
            value={originalUrl}
            placeholder="Shorten a link here..."
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Shorten It!
          </button>
        </form>
        {(formError || error) && (
          <p className="text-red-500 text-start mt-1 italic text-[12px] absolute">
            {formError || error}
          </p>
        )}
      </div>
    </div>
  );
};

export default URLShortenerFormView;
