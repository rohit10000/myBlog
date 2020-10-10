import React from "react";
import "./RenderContent.css";

function RenderContent({post}){
    return(
        <div className={"renderContent"}>
            {post ? (post.src):(<div></div>)}
        </div>
    )
}


export default RenderContent;
