export default function Log_12_18_25 () {
    
    const mainJsxImage = {
        src: '/src/assets/mainJsx.png',
        alt: 'main.jsx file',
        imageWidth: "450px",
        imageHeight: "450px"
    }

    return (
        <>
            <h1>Learning about the files generated with a new React project</h1>

            <h2>App.css</h2>
            <p>I have not really paid much attention to App.css in my project with React since I'm used to using tools like PrimeReact that
                come with their own styling. But in short, App.css is the css file for App.jsx. In theory, if App.jsx is your core jsx file
                reference in main.jsx, then it acts as a Global style sheet. Very interesting!

                Something to note is that in App.jsx, App.css is imported. So if you wanted to create a component HelloWorld.jsx and you either
                didn't want to use the styling from App.css or wanted to override the styles of App.css, you would need to create a HelloWorld.css 
                file and import it at the top of HelloWorld.jsx. Does that make sense?
            </p>

            <h2>App.jsx</h2>
            <p>
            To my understanding, this is just the default component created by create-react-app or vite when setting up a React Application. It 
            serves as the root component of the application and is by default imported into main.jsx and referenced there. Just as a thought
             experiement, you could create really any jsx component and put it in main.jsx and it would be the root component for the application
            </p>

            <h2>main.jsx</h2>
            <p>This file is a little bit more complicated. It serves as the firs Javascript/JSX file that is executed when the app is loaded in 
                the browser. Chat GPT says its where the React Application is "bootstrapped" and rendered to the HTML page. So what does "bootsrapped"
                mean here? </p>

            <p>It turns out that bootstrapping means that its mounting the main React component tree for the very first time. It connects the applcation
                to the basic HTML file that the browser is using (in this case it's the React project's index.html file).</p>

            <img 
                src = {mainJsxImage.src}
                alt = {mainJsxImage.alt}
                width = {mainJsxImage.imageWidth}
                height = {mainJsxImage.imageHeigh}
            />

            <h3>import React from 'react'</h3>
            <p>The React import is simply importing the react library necessary for creating react components </p>

            <h3>ReactDOM</h3>
            <p> The ReactDOM libary is used to connect the React components you're creating to the browse's DOM

                ReactDOM is really only used in main.jsx, it take your top level React component (which is App.jsx by default but can be any react compontnet
                that you place inside main.jsx  React.StrictMode container), finds an html element in index.html with the id "root", and mounts your react 
                application to that. This might not be the most comprehensive way to explain all of this but really I'm just writing this to better understand
                the concepts myself.
            </p>

            <h3>React.StrictMode</h3>
            <p>React.StricMode is a development tool that is not reflected in production builds. It basically acts as a helper tool to encourage you to follow best
                practices while writing React code. It finds side effects in render code, incorrect usage of hooks, and deprecated react features. Once again, this is
                a tool for developing React that helps you find errors or problems with your React code. It is NOT used in production.
            </p>

            <h2>index.html</h2>
            <p>There are two important lines in index.html. When a user interacts with your application, they are technically interacting with index.html first
                The two lines of importance are:
                    -div id="root", this provices the root DOM element for React</p>
                    - script type="module" src="/src/main.jsx" , this tells the browser to execute a script, in this case javascript. the "type=module" line allows
                    the script to use import and export commands. and "src=/src/main.jsx" just references where the root of our project is to get the project up and running.

                
        </>
    )
}