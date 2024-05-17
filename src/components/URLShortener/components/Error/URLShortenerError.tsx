import React, { useContext } from 'react';
import { URLShortenerContext } from '../../context/URLShortenerContext';

const URLShortenerError: React.FC = () => {
    const { error } = useContext(URLShortenerContext);

    return (
        <div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default URLShortenerError;
