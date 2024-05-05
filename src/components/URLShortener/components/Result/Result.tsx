import React from "react";

interface ResultProps {
  shortenedUrl: string;
  onCopy: () => void;
}

const Result: React.FC<ResultProps> = ({ shortenedUrl, onCopy }) => {
  return (
    <div>
      <p>Shortened URL: {shortenedUrl}</p>
      <button onClick={onCopy}>Copy</button>
    </div>
  );
};

export default Result;
