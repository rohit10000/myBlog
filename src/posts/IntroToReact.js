import React from "react";
import PostTitle from "./postHelperComponent/PostTitle";
import PostText from "./postHelperComponent/PostText";
import PostSubHeading from "./postHelperComponent/PostSubHeading";
import LinkDisplay from "./postHelperComponent/LinkDisplay";
import CodeDisplay from "./postHelperComponent/CodeDisplay";

function IntroToReact(){
    return(
        <div className={"introToReact"}>

            <PostTitle title={"Introduction to React"}/>

            <PostText text={["Welcome to React tutorial!", "Before we start anything lets see some jargons." +
            " Do you know about frameworks or library? Can you give the difference between them?",
                "Fine."]}/>

                <PostSubHeading subHeading={"Library Vs Framework"}/>
                <PostText text={["Library is a collection of functions which are useful when " +
                "writing web apps. Your code is in charge as it calls into the library when it " +
                "sees fit. The benefit of using a library is a well-defined collection of behaviour, " +
                "reuse of behaviour, modularity. E.g., jQuery.",
                    "A framework is a particular implementation of a web application, " +
                    "where your code fills in the details. The framework is in charge as " +
                    "it calls into your code when it needs something app-specific. Like a Hollywood " +
                    "principle, the manager calls for the actor when needed. Here, the manager is " +
                    "analogous to the framework while the actor is analogous to our code. E.g., Angular, Ember, etc.",
                "Now, let's learn some more jargons as it will be helpful in our further tour to learn React."]}/>

                <PostSubHeading subHeading={"Inversion of Control"}/>
                <PostText text={["Like in framework, it calls your code when needed. The call is " +
                "app-specific. So, the call is from framework to our code unlike the call from our " +
                "code to library, in case of library. Hence the control is inverted."]}/>

                <LinkDisplay text={"You can also refer to Wikipedia for more. Here's the"}
                src={"https://en.wikipedia.org/wiki/Inversion_of_control"}/>

                <PostSubHeading subHeading={"Imperative Vs Declarative Programming"}/>

                <PostText text={["In imperative programming, developers give every instruction and tell like how to " +
                "achieve a particular task.", "But in declarative programming, developers just specifies " +
                "what he needs to accomplish and leaves it completely on the framework to achieve the goal."]}/>

                <LinkDisplay text={"You can also refer to Medium article for more. Here's the"}
                src={"https://medium.com/@zach.gollwitzer/imperative-vs-declarative-programming-procedural-functional-and-oop-b03a53ba745c#:~:text=The%20difference%20between%20Imperative%20and%20Declarative%20programming%20is%20related%20to,about%20what%20a%20program%20does."}/>

                <PostSubHeading subHeading={"What is React, a library or a framework?"}/>

                <PostText text={["I'll leave that to you to decide. Instead, I will proceed in explaining " +
                "to you some fact about React.", "React is a javascript library for building user interface.",
                "It is declarative, component-based, fast, simple and scalable.",
                    "Developed in 2011 for Facebook newsfeed. ",
                    "Open-sourced in 2013."]}/>

                    <LinkDisplay text={"You can also refer to React official website for more. Here's the"}
                    src={"https://reactjs.org/"}/>

                    <PostText text={["Congrats, you just finished up with a brief introduction to react. " +
                    "Now, quickly head over to set up our react app for the further build."]}/>

                <PostSubHeading subHeading={"Getting ready to build an app or setting up"}/>
                <CodeDisplay text={["npx create-react-app dev-app"]}/>
                <PostText text={["here, dev-app is the name of your app. npx stands for node package " +
                "execute.", "Move to dev-app folder and delete App.test.js, logo.svg, setupTest.js.\n" +
                "And a few changes will make your app ready. "]}/>

                <LinkDisplay text={"Just see to the commit for changes"}
                src={"https://github.com/rohit10000/Full-stack-development-Blog/commit/156dc77f197899898a16277d77abc95b6441b099"}/>

                <PostSubHeading subHeading={"Configure your React app to use bootstrap"}/>
                <PostText text={['See to the changes from the previous commit to the new commit named "configuring react app to use bootstrap"']}/>

                <LinkDisplay text={"See to the commit for changes"}
                src={"https://github.com/rohit10000/Full-stack-development-Blog/commit/a6c31eb8d3df2bbc4dc0a8c551786780eefea50d"}/>

                <PostText text={["Finally, let's learn another jargon, JSX.",
                "It stands for Javascript XML(Extensible Markup Language). " +
                "It helps us to write HTML code syntax inside of React."]}/>
        </div>
    )
}

export default IntroToReact;
