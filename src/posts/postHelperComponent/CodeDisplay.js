import React from "react";
import "./CodeDisplay.css";

function CodeDisplay({text}){
    return(
        <div className={"codeDisplay"}>
            {
                text.map(info => {
                    return(
                        <p>{info}</p>
                    )
                })
            }
        </div>
    )
}

export default CodeDisplay;
