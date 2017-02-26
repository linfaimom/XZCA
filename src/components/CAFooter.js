/**
 * Created by marcus on 2017/2/26.
 */
import React from "react";
import {grey800, fullWhite, grey500} from "material-ui/styles/colors";

const style = {
    container: {
        backgroundColor: grey800,
        height: "64px",
        display: "flex"
    },
    siteInfo: {
        margin: "auto",
        textAlign: "center",
        color: fullWhite
    }
};

const CAFooter = (props) => (
    <footer id={props.id} style={style.container}>
        <p style={style.siteInfo}>
            Copyright © 2017 <a href="#" style={{color: grey500}}>XZCA</a>. All Rights Reserved.
        </p>
    </footer>
);

export default CAFooter;