import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import CAMain from "./CAMain";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={CAMain}/>
    </Router>,
    document.getElementById("root")
);
