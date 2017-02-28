/**
 * Created by marcus on 2017/2/26.
 */
import React from "react";
import {grey500} from "material-ui/styles/colors";

const CAFooter = (props) => (
    <footer id={props.id} className="footer-container">
        <p className="footer-site-info">
            Copyright © 2017 <a href="#" style={{color: grey500}}>XZCA</a>. All Rights Reserved.
        </p>
    </footer>
);

export default CAFooter;