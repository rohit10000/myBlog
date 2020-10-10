import React from "react";
import "./PostText.css";

function PostText({text}){
    return(
        <div className={"postText"}>
            {
                text.map((data) => {
                    return (
                        <p>
                            {data}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default PostText;
