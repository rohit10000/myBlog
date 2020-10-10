import React from "react";
import "./BottomNavigation.css";

function BottomNavigation({onclick, state}){
    return(
        <div className={"bottomNavigation"}>
            {
                state.selectedPost !== 0 ? (
                    <div className={"bottomNavigation__left"}>
                        <div className={"bottomNavigation__label"}>
                            <p>Previous article</p>
                        </div>
                        <div className={"bottomNavigation__title"}>
                            <a onClick={()=>onclick((state.selectedPost-1)%(state.posts.length))}>
                                {state.posts[(state.selectedPost-1)%(state.posts.length)].title}
                            </a>
                        </div>
                    </div>
                ):(<div className={"bottomNavigation__left"}>.</div>)
            }
            {
                state.selectedPost !==state.posts.length-1 ? (
                    <div className={"bottomNavigation__right"}>
                        <div className={"bottomNavigation__label"}>
                            <p>Next article</p>
                        </div>
                        <div className={"bottomNavigation__title"}>
                            <a onClick={()=>onclick((state.selectedPost+1)%(state.posts.length))}>
                                {state.posts[(state.selectedPost+1)%(state.posts.length)].title}
                            </a>
                        </div>
                    </div>
                ):(<div className={"bottomNavigation__right"}></div>)
            }

        </div>
    )
}

export default BottomNavigation;
