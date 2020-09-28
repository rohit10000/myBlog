import React from "react";
import "./WebReact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function WebReact(){
    return(
        <div className={"webReact"}>
            <div className={"webReact__sidebar"}>
                <p className={"webReact__sidebar__title"}>
                    Frontend web development using Reactjs
                </p>
                <div className={"webReact__sidebar__options"}>

                </div>
            </div>
            <div className={"webReact__content"}>

            </div>
        </div>

    )
}

export default WebReact;
