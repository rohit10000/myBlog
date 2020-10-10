import React, {Component} from "react";
import "./WebReact.css";
import {postDetails} from "../shared/postDetails";
import RenderSidebar from "../components/RenderSidebar";
import RenderContent from "../components/RenderContent";
import BottomNavigation from "../components/BottomNavigation";


class WebReact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: postDetails,
            selectedPost: 1
        }
    }

    onPostSelect(postId){
        this.setState({selectedPost: postId});
    }


    render() {
        return(
            <div className={"WebReact"}>
                <div className={"WebReact__left"}>
                    <RenderSidebar posts={this.state.posts}
                                   onclick = {(postId) => this.onPostSelect(postId)}
                                   selectedPost={this.state.selectedPost}/>
                </div>

                <div className={"WebReact__right"}>
                    <div className={"WebReact__right__content"}>
                        <RenderContent post={this.state.posts.filter((post) =>
                            post.id == this.state.selectedPost)[0]}
                        />
                    </div>
                    <BottomNavigation onclick={(postId) => this.onPostSelect(postId)} state={this.state}/>
                </div>
            </div>
        )
    }
}

export default WebReact;
