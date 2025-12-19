export default function Log_12_19_25 () {
    const simpleListRender = {
        src: '/src/assets/12-19-25/simpleListRender.png',
        alt: "simeple example of creating an array of obbjects and mapping them to a list",
        imageWidth: '550px',
        imageHeight: '400px'
    }

    return (
        <>
            <h1>Dev Diary - 12/19/25</h1>
            <h2>First concept: Rendering Lists</h2>
            <p>This was an easy exercise that I've done many times but it was useful to go through the process of creating an array of items, 
                mapping them out to li (list items), and then rendering them to an ol (ordered list)</p>

            <img
                src = {simpleListRender.src}
                alt = {simpleListRender.alt}
                width = {simpleListRender.imageWidth}
                height = {simpleListRender.imageHeight}
            />

            <h2>Taking a break from the React Guide to implement Navigation</h2>

            <p>So navigation in React isn't a one answer type solution. There's routing that doesn't actually change the URL when navigating and is more
                like showing/hiding components based on a selection. But I think the much more common approach to navigation in React is to use ReactRouter 
                that treats the application like a SPA (Single Page Application). I want my components (generally) to be treated like their own pages. This
                doesn't mean that I don't want to reference components inside of other componenents, but I do want the ability to navigate to parts of the app
                and have the URL reflect that. So for all intents and purposes, ReactRouter is what I need. 
            </p>

            <h2>Implementing ReactRouter</h2>
            <p>So getting started with React Router isn't as straighforward as I originally expected it to be. There are three different ways to implement 
                ReactRouter:
                    <ul>
                        <li><b>Delcarative: </b> 
                            <span> enables basic routing feature like matching URLS to React components, navigating around the app, and providing active 
                            states with APIs like Link, useNavigate, and useLocation 
                            </span>
                        </li>
                        <li><b>Data: </b> 
                            <span>The data approach moves the route configuration outside of React rendering. This adds things like loading, actions, pending
                                states and more with APIs liek loader, action, and useFetcher
                            </span>
                        </li>
                        <li><b>Framework: </b>
                            <span>
                                 Framework Mode wraps Data Mode with a Vite plugin to add the full React Router experience with:
                                    <ol>
                                        <li>type-safe href (not sure what that means)</li>
                                        <li>type-safe RouteModule API (not sure what that means either)</li>
                                        <li>intelligent code splitting</li>
                                        <li>SPA, SSR, and static rendering strategies</li>
                                    </ol>
                            </span>
                        </li>
                    </ul>
            </p>

            <h3>So after reading through the options for ReactRouter implemenation, I'm left with more questions than answers</h3>
            <p>In the starting documentation for ReactRouter it has a decision advice section and simply put it says use Fremwork Mode if you're too new 
                to have an opinion. I'm torn, I've worked a lot in apps with ReactRouter but I don't know what implementation they went with. But one thing
                 that complicates things is that the documenation expects you to create a new from scratch applcation with react router to go the Framework 
                 route. 

                 I already have this application and don't want to start a new one, so it looks like my options are Data or Declarative. Declarative seems 
                 to be the most simple option but I want more configurability as it will help me learn more about the tool. So for better or worse I'm 
                 selecting Data ReactRouter. 
            </p>
        </>
    ) 

}