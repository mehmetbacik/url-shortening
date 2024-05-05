import React, { useState } from "react";

interface FormProps {
  onSubmit: (url: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(originalUrl);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Shorten a link here..."
      />
      <button type="submit">Shorten It!</button>
    </form>
  );
};

export default Form;
