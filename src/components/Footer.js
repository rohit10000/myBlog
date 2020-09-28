import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <div className="footer__button">
                <Link to="/" className="footer__link">
                    <span className="footer__option">Home</span>
                </Link>

            </div>

        </div>
    );
}
export default Footer;
