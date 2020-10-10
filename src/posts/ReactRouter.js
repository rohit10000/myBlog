import React from "react";
import PostTitle from "./postHelperComponent/PostTitle";
import PostText from "./postHelperComponent/PostText";
import CodeDisplay from "./postHelperComponent/CodeDisplay";
import PostSubHeading from "./postHelperComponent/PostSubHeading";

function ReactRouter(){
    return(
        <div className={"ReactRouter"}>
            <PostTitle title={"React Router"}/>
            <PostText text={["Collection of navigational components that enables navigation among views.","There " +
            "are several types of components:", "Router components, route matching components and" +
            "navigation components","To install react router dom run command:"]}/>
            <CodeDisplay text={["npm install react-router-dom"]}/>

            <PostSubHeading subHeading={"What is Web App Routing in React?"}/>
            <PostText text={["Enclose your app in BrowserRouter: \<BrowserRouter\>.", "It creates specialized history object"]}/>

            <PostSubHeading subHeading={"What are Route matching?"}/>
            <PostText text={["\<Route\>’s path prop enables specification of the current location's " +
            "pathname", "<Route>’s component prop specifies the corresponding view for the\n" +
            "location", "Using exact attribute ensures that the path must be exactly matched",
            "<Redirect> enables the default route specification", "<Switch> enables grouping together several routes. " +
                "It will iterate over all its children and find the first one that matches the path."]}/>

                <PostSubHeading subHeading={"What are Navigation component?"}/>
                <PostText text={["Navigation is supported through the <Link> and <NavLink> components:",
                "<Link> creates links in your application and will render as <a> in the HTML",
                "<NavLink> also attaches the active class to the link when its prop matches the current location"]}/>

                <PostSubHeading subHeading={"What are Route Parameters?"}/>
                <PostText text={["Route parameters can be specified using a link parameter while specifying the link",
                "– e.g., <Link to{`/menu/${dish.id}`} >", "• Route passes three props to the component:",
                "– match, location, history"]}/>
                <PostSubHeading subHeading={"What is Match Object?"}/>
                <PostText text={["match object provides information about how a <Route path> matched the URL.",
                    "– params: an object that contains key/value pair parsed from the URL corresponding to " +
                    "the dynamic segments of the path.", "– e.g. if path is specified as /text/:id, then a path like " +
                    "/text/63 will result in match.params.id being equal to “63”."]}/>
        </div>
    )
}

export default ReactRouter;
