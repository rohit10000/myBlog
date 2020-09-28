import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router";

function Home(){
    const history = useHistory();
    return(
        <div className={"home"}>
            <button className={"home__web__react btn"} onClick={history.push('/docs/web-reactjs')}>
                Frontend Development with react
            </button>

        </div>

    )
}

export default Home;
