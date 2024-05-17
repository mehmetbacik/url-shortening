import React, { useContext, useState } from 'react';
import { URLShortenerContext } from '../../context/URLShortenerContext';

const URLShortenerForm: React.FC = () => {
    const { shortenIt } = useContext(URLShortenerContext);
    const [originalUrl, setOriginalUrl] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await shortenIt(originalUrl);
            setOriginalUrl('');
            setError('');
        } catch (error) {
            setError('Failed to shorten URL. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />
                <button type="submit">Shorten</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default URLShortenerForm;
