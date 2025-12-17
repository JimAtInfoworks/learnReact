import { React } from 'react';

export function MyImage() {
    const typeRImage = {
        src: '/src/assets/typer.jpeg',
        alt: '2020 Civic Type R',
        imageWidth: '320px',
        imageHeight: '180px'
    }

    return (
        <>
            <img src={typeRImage.src} 
            alt={typeRImage.alt}
            width={typeRImage.imageWidth}
            height={typeRImage.imageHeight}
            />
        </>
    )
}

export default function TypeRImage() {
    return (
        <MyImage />
    )
}





