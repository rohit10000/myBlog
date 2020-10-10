import React from "react";
import PostTitle from "./postHelperComponent/PostTitle";
import PostSubHeading from "./postHelperComponent/PostSubHeading";
import PostText from "./postHelperComponent/PostText";

function SinglePageApplication(){
    return(
        <div className={"SinglePageApplication"}>
            <PostTitle title={"Single Page Application"}/>
            <PostSubHeading subHeading={"React - a single page application"}/>
            <PostText text={["", "In react, application fits in a single page.",
                "– No need to reload the entire page", "– Most resources are retrieved with a single page " +
                "load", "– Redraw parts of the page when needed without requiring a full server round trip"]}/>
        </div>
    )

}

export default SinglePageApplication;
