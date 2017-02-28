import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import CAMain from "./components/CAMain";
import CAUI from "../src/css/ca-ui.css";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={CAMain}/>
    </Router>,
    document.getElementById("root")
);
