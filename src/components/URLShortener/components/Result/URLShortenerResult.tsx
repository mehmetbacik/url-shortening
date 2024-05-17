import React, { useContext } from 'react';
import { URLShortenerContext } from '../../context/URLShortenerContext';

const URLShortenerResult: React.FC = () => {
    const { shortenedUrl } = useContext(URLShortenerContext);

    const handleCopy = () => {
        // Implement copy functionality here
    };

    return (
        <div>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL: {shortenedUrl}</p>
                    <button onClick={handleCopy}>Copy</button>
                </div>
            )}
        </div>
    );
};

export default URLShortenerResult;
