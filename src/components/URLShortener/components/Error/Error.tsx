import React from "react";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <p>{error}</p>;
};

export default Error;
