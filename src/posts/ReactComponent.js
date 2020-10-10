import React from "react";
import PostTitle from "./postHelperComponent/PostTitle";
import PostSubHeading from "./postHelperComponent/PostSubHeading";
import PostText from "./postHelperComponent/PostText";
import LinkDisplay from "./postHelperComponent/LinkDisplay";

function ReactComponent(){
    return(
        <div className={"ReactComponent"}>
            <PostTitle title={"React Components"}/>
            <PostSubHeading subHeading={"What is the React Component?"}/>
            <PostText text={["Components are the building blocks of any React app and a typical React app will have many of these.", "Simply put, a component is a JavaScript class or function.", "It optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI should appear."]}/>
            <PostSubHeading subHeading={"What are states or props ?"}/>
            <PostText text={["In a React component, props are variables passed to it by its parent component.", "State on the other hand is still variables, but directly initialized and managed by the component."]}/>

            <PostSubHeading subHeading={"Types of React Component"}/>
            <PostText text={["There are two types of React Component or we can say there are two ways in which we can " +
            "code a react component", "Functional and Class based component", "Class based component maintains state" +
            "through state lifting from child component to parent component whereas functional component is " +
            "stateless and presentational in behaviour.", "On the basis of their behaviour functional component" +
            "is called Presentational component and class based component is called container component."]}/>

            <PostSubHeading subHeading={"React component lifecycle methods"}/>
            <PostText text={["React component lifecycle methods goes through three stages:","Mounting",
            "Updating", "Unmounting", "Let's briefly look at all three"]}/>

            <PostText text={["", "Note: All stages for the methods mentioned below are invoked in order.",""]}/>

            <PostSubHeading subHeading={"Mounting"}/>
            <PostText text={["Mounting is when React renders the component for the first time and actually builds" +
            " the initial DOM.", "Component mounts when you refresh or navigate between different routes.",
            "There are mainly four major stages in mounting: ","constructor()", "getDerivedStateFromProps()",
            "render()", "componentDidMount()"]}/>

            <PostSubHeading subHeading={"Updating"}/>
            <PostText text={["Updating is when any update by changes to props or state is caused.",
            "There are mainly five stages in updating:", "getDerivedStateFromProps()",
            "shouldComponentUpdate(): It takes the boolean value. We may pass a boolean value to specify the component" +
            "whether it should render on update or not.", "render()", "getSnapShotBeforeUpdate(): it used when we want to" +
                "maintain the state snapshot, e.g. maintaining state of the scroll on render for our convenience.",
            "componentDidMount()"]}/>

                <PostSubHeading subHeading={"Unmounting"}/>
                <PostText text={["This method is called when a component is being removed from the DOM","componentWillUnmount()" +
                " is the only major method that executes in unmount phase"]}/>
                <LinkDisplay text={"You can also refer to a Youtube video for more. Here's the"}
                            src={"https://www.youtube.com/watch?v=Oioo0IdoEls"}
                />
        </div>
    )
}

export default ReactComponent;
