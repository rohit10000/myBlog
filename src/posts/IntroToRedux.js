import React from "react";
import PostTitle from "./postHelperComponent/PostTitle";
import PostText from "./postHelperComponent/PostText";
import PostSubHeading from "./postHelperComponent/PostSubHeading";
import CodeDisplay from "./postHelperComponent/CodeDisplay";
import LinkDisplay from "./postHelperComponent/LinkDisplay";

function IntroToRedux(){
    return(
        <div className={"IntroToRedux"}>
            <PostTitle title={"Introduction to Redux"}/>
            <PostText text={["By definition, redux is a predictable state container for javascript application.",
            "Redux acts as a store where we can store the state and can further use it from any component, " +
            "we can change the state using dispatch", "Redux store can be said as a global storage which stores " +
                "the current state of the react application."]}/>

                <PostSubHeading subHeading={"How to use it?"}/>
                <PostText text={["Create a folder named redux inside your src direction of your app. Now, in " +
                "order to learn how to implement it in your code, just follow the pattern " +
                "with me and you'll be okay."]}/>
                <PostSubHeading subHeading={"Step 1:"}/>
                <PostText text={["Install redux and react-redux using code, "]}/>
                <CodeDisplay text={["npm install redux", "npm install react-redux"]}/>

                <PostSubHeading subHeading={"Step 2:"}/>
            <PostText text={[" Create a file named reducer.js inside redux directory. And inside reducer " +
            "do as follows:"]}/>
            <CodeDisplay text={["const initialState = { ... };",
                "export const Reducer = ( state = initialState, action) => {",
            "return state;", "}"]}/>

            <PostSubHeading subHeading={"Step 3:"}/>
            <PostText text={[" Create a file named configureStore.js inside redux directory. And inside the directory " +
            "do as follows:"]}/>
            <CodeDisplay text={["import {createStore} from 'redux';",
                "import { Reducer} from './reducer';",
                "export const ConfigureStore = () => {", "    const store = createStore(Reducer);",
            "    return store;","}"]}/>

            <PostSubHeading subHeading={"Step 4:"}/>
            <PostText text={["Inside the App.js file do as follows:"]}/>
            <CodeDisplay text={["import { Provider } from 'react-redux';",
                "import { ConfigureStore } from './redux/configureStore';",
                "const store = ConfigureStore();","...",
                "<Provider store={store}>", "...", "</Provider>", "..."]}/>

            <PostSubHeading subHeading={"Step 5:"}/>
            <PostText text={["Inside the MainComponent.js file( it is the file where we want to use redux store" +
            ") we can add the following code."]}/>
            <CodeDisplay text={["import { ... , withRouter } from 'react-router-dom'",
                "import { connect } from 'react-redux';",
                "..."]}/>
                <PostText text={["","To map states to props of class"]}/>
                <CodeDisplay text={["const mapStateToProps = state => {", "  return {",
                "    dishes: state.dishes,", "    comments: state.comments,", "...", "}", "}"]}/>

            <PostText text={["","To dispatch props to state in redux store"]}/>
            <CodeDisplay text={["  const mapDispatchToProps = dispatch => ({",
            "addComment: ({title, body}) => dispatch(", "type: 'ADD_POST',",
                "Payload: {", "title,", "body" ,")}"]}/>

            <PostText text={["","Finally, at the end just add as follows to connect to redux store your component."]}/>
            <CodeDisplay text={["export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));"]}/>
            <PostText text={["here, Main is the name of the component."]}/>
            <PostText text={["","Now to call the dispatch whichever place you want to call, just call the addComment" +
            " property value by typing like this: "]}/>
            <CodeDisplay text={["this.props.addPost({title: '...', body: '...')"]}/>

            <PostText text={["","At last, we are done setting up redux store. Happy coding!"]}/>

            <LinkDisplay text={"See to the commit for changes"}
                         src={"https://github.com/rohit10000/coursera-full-stack-dev/commit/c480e314333510100b576db8840c14cb80e60c72"}/>

        </div>
    )
}
export default IntroToRedux;
