/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const CAJumbotron = (props) => (
    <div id={props.id}>
        <div className="jumbotron-container">
            <div className="content">
                <img className="logo" src="images/XZCALogo.ico" alt="协会徽标"/>
                <h1 className="primary-text">行知计算机协会</h1>
                <h2 className="secondary-text">
                    我们志同道合，我们于此相遇相知<br/>
                    我们为更好的明天而努力
                </h2>
                <RaisedButton secondary={true} label="探索更多" href="#more"/>
            </div>
        </div>
    </div>
);

export default CAJumbotron;
