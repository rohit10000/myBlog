import React, {useState} from "react";
import "./RenderSidebar.css";

function RenderSidebar({posts, onclick, selectedPost}){

    const innerWidth = window.innerWidth;

    const [flag, setFlag] = useState(false);

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
    }


    const openSideBar = () => {
        setFlag(!flag);
    }

    return(
        <div className={"renderSidebar"} style={
            innerWidth > 1024 ? ({display: "block"}): (
                flag ? (styles.openSide.main): (styles.closeSide.main)
            )

        }>
            {
                innerWidth < 1024 ? (
                    <button className={"btn"} onClick={() => openSideBar()}>
                        &#9776;
                    </button>
                ):(<div></div>)
            }

            <p className={"renderSidebar__title"} style={
                innerWidth > 1024 ? ({display: "block"}): (
                    flag ? (styles.openSide.title): (styles.closeSide.title)
                )
            }>
                Frontend web development using Reactjs
            </p>

            <div className={"renderSidebar__options"} style={
                innerWidth > 1024 ? ({display: "block"}): (
                    flag ? (styles.openSide.options): (styles.closeSide.options)
                )
            }>
                {
                    posts.map((post) => {
                        return (
                            <p key={post.id} onClick={() => onclick(post.id)}
                                style={selectedPost == post.id ? styles.active: {border:"none"}}>
                                {post.title}</p>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default RenderSidebar;
