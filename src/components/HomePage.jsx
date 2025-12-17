import React from 'react';
import { useState } from 'react';
import Log121725 from './devDiary/log121725.jsx';
import TypeRImage from './TypeRImage.jsx';

export default function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    let content;

    if(isLoggedIn) {
        content = <Log121725 />;
    } else {
        content = <TypeRImage />;
    }

    return (
        <>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}> Toggle Log/Button </button>
            <br />
            {content}
        </>
    )
}