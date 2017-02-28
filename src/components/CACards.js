/**
 * Created by marcus on 2017/2/26.
 */
import React from "react";
import {CardMedia} from "material-ui/Card";

const CACards = (props) => (
    <div className="clear">
        <div id={props.id} className="float-container">
            <div className="card card-float">
                <div className="card-header">工具</div>
                <CardMedia>
                    <img src="images/tools.svg"/>
                </CardMedia>
            </div>
            <div className="card card-float">
                <div className="card-header">资源</div>
                <CardMedia>
                    <img src="images/resource.svg"/>
                </CardMedia>
            </div>
            <div className="card card-float">
                <div className="card-header">教程</div>
                <CardMedia>
                    <img src="images/tutorials.svg"/>
                </CardMedia>
            </div>
        </div>
    </div>
);

export default CACards;
