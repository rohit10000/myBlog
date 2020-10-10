import React from "react";
import "./LinkDisplay.css";

function LinkDisplay({text, src}){
    return(
        <div className={"container"} style={{marginBottom: "20px"}}>
            <div className="col-12">
                <div className="card card-body bg-light">
                    <blockquote className="blockquote">
                        <footer className="blockquote-footer">
                            <cite title="Source Title">
                                {text}
                                <a href={src}> link</a>
                            </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default LinkDisplay;
