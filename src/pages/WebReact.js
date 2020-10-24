import React, {Component} from "react";
import "./WebReact.css";
import {postDetails} from "../shared/postDetails";
import BottomNavigation from "../components/BottomNavigation";


class WebReact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: postDetails,
            selectedPost: 0
        }
        this.onPostSelect = this.onPostSelect.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    onPostSelect(postId){
        this.setState({selectedPost: postId});
    }

    toggleSidebar(){
        document.getElementById('WebReact__sidebar')
            .classList.toggle('active-sidebar');
        document.getElementById('WebReact__content')
            .classList.toggle('active-content');
    }

    render() {
        const styles = {
            active: {
                borderLeftStyle: "solid",
                borderLeftWidth: "6px",
                borderLeftColor: "mediumseagreen",
            },
            openSide:{
                main:{
                    width:"70vw"
                },
                title:{
                    display: "block"
                },
                options:{
                    display: "block"
                }
            },
            closeSide:{
                main:{
                    width:"10vw"
                },
                title:{
                    display: "none"
                },
                options:{
                    display: "none"
                }
            }
        };

        return(
            <div className={"WebReact"}>
                <div className={"WebReact__sidebar active-sidebar"} id={"WebReact__sidebar"}>
                    {/*toggle button*/}
                    <div className={"WebReact__sidebar__toggle-btn"}
                         onClick={() =>this.toggleSidebar()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/*sidebar content*/}
                    <div className={"WebReact__sidebar__content"}>
                        <p className={"WebReact__sidebar__content__title"}>
                            Frontend web development using Reactjs
                        </p>
                        <div className={"WebReact__sidebar__content__options"}>
                            {
                                this.state.posts.map((post) => {
                                    return (
                                        <p key={post.id} onClick={() => this.onPostSelect(post.id)}
                                           style={this.state.selectedPost === post.id ? styles.active: {border:"none"}}>
                                            {post.title}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={"WebReact__content active-content"} id={"WebReact__content"}>
                    <div className={"WebReact__content__body"}>
                        {this.state.posts[this.state.selectedPost].src}
                    </div>
                    <BottomNavigation onclick={(postId) => this.onPostSelect(postId)} state={this.state}/>
                </div>
            </div>
        )
    }
}

export default WebReact;
