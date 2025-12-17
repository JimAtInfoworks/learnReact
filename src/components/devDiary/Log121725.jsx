import react from 'react';

export default function Log121725() {
    const reactSetupImage = {
        src: '/src/assets/select-framework.png',
        alt: 'React Setup Command Line Screenshot',
        imageWidth: '600px',
        imageHeight: '400px'
    }

    const reactVariantImage = {
        src: '/src/assets/select-framework-variant.png',
        alt: 'React Variant Selection Screenshot',
        imageWidth: '450px',
        imageHeight: '400px'
    }


    const functionExportFunctionExample = {
        src: '/src/assets/Type R function and export component.png',
        alt: 'Shows a function and export function in the same component',
        imageWidth: "450px",
        imageHeight: "600px"
    }

    return (
        <>  
            <h1>Dev Diary - 12/17/25</h1>
            <h2>Just as a precurrosr, I already have worked in React in a professional enviroment for many </h2>
            <p>Today my focus is going back to the basics and learning React concepts and fundamentals from square one. one</p>
            <p>The firs thing I wanted to learn was how to set up a react project. To my understanding the most common way to start up a react
                project these days is to use Vite. Vite is a build tool that quickly sets up a development environment for creating web applications.
            </p>
            <br/>
            Here's what I ran to set up my react project using Vite:
            <code>npm create vite@latest</code>
            <p>This was the initial command of getting a project started</p>
            <p>From there I had to enter a project name, I hchose "learnReact"</p>
            <p>Next I had to choose a Package name. This one was a little confusing to me because it doesn't explain what package name means. 
                I already know that all React projects have a package.json for storing the versions of npm packages used, so I went ahead and
                 named my package "package.json". I hoe this naming doens't come back to bite me in the end but we'll find out eventually.
            </p>
            <br/>
            <p>Next, I had to choose a Framework</p>
            <p>There are many options, but I selected React since that's what I'm trying to get strong fundamentals on</p>
            <img 
                src={reactSetupImage.src} 
                alt={reactSetupImage.alt}
                width={reactSetupImage.imageWidth}
                height={reactSetupImage.imageHeight}
            />
            <br/>
            <p>Next was selecting a variant. I know that TypeScript is popular because it's strict and integrate well with 
            typing in .NET backends, but in all React projects I've used so far I've used JavaScript. So that's what I'll be 
            using here </p>
            <img 
                src={reactVariantImage.src} 
                alt={reactVariantImage.alt}
                width={reactVariantImage.imageWidth}
                height={reactVariantImage.imageHeight}
            />
            <p>I chose not to use rolldown-vite because I have no idea what that does</p>
            <p>Last option was "Install with npm and start now". This was an obvious yes for me.</p>
            <br />
            <h2>After Initial Setup</h2>
            <p>Going through the first few sections of the react.dev quick start guide it talks about the difference between
            functions and default functions. In this case, a default function is the primary export of a React component
            . This means that you can declare multiple functions inside of a .jsx file, but the component that can be referenced
            by other raect components is the one with export default function XYZ(). Here's an example below</p> 
            
            <img 
                src={functionExportFunctionExample.src}
                alt={functionExportFunctionExample.src}
                width={functionExportFunctionExample.imageWidth}
                height={functionExportFunctionExample.imageHeight}
            />
        </>
    )   
}