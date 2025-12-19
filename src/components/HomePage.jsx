import React from 'react';
import { useState } from 'react';
import Log_12_17_25 from './dev-diary/Log_12_17_25.jsx';
import Log_12_18_25 from './dev-diary/Log_12_18_25.jsx';
import Log_12_19_25 from './dev-diary/Log_12_19_25.jsx';
import ListRender from './ListRender.jsx';
import TypeRImage from './TypeRImage.jsx';

export default function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    let content;

    if(isLoggedIn) {
        content = <Log_12_19_25 />;
    } else {
        content = <ListRender />;
    }

    return (
        <>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}> Toggle Log/Button </button>
            <br />
            {content}
        </>
    )
}