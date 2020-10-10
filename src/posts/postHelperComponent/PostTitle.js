import React from "react";
import "./PostTitle.css";

function PostTitle({title}){
    return(
        <div className={"postTitle"}>
            <p>{title}</p>
        </div>
    )
}

export default PostTitle;
