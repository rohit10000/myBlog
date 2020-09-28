import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

function Header(){

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                     src={require("../images/logo.png")}
                     alt="" />
            </Link>
            <div className={"header__title"}>
                <p>Development Blog</p>
            </div>

        </div>


    )
}
export default Header;
