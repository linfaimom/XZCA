/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

const style = {
    container: {
        paddingBottom: "48px",
        height: "100vh",
        display: "flex"
    },
    content: {
        margin: "auto",
        textAlign: "center"
    },
    logo: {
        width: "300px",
        height: "300px"
    },
    primaryText: {
        fontWeight: "300",
        textShadow: "2px 2px 2px #aaa"
    },
    secondaryText: {
        fontWeight: "300",
        fontSize: "20px",
        lineHeight: "28px",
        margin: "28px auto"
    }
};

const CAJumbotron = (props) => (
    <div id={props.id}>
        <Paper style={style.container} rounded={false}>
            <div style={style.content}>
                <img style={style.logo} src="images/XZCALogo.svg" alt="协会徽标"/>
                <h1 style={style.primaryText}>行知计算机协会</h1>
                <h2 style={style.secondaryText}>
                    我们志同道合，我们于此相遇相知<br/>
                    我们为更好的明天而努力
                </h2>
                <RaisedButton secondary={true} label="探索更多" href="#more"/>
            </div>
        </Paper>
    </div>
);

export default CAJumbotron;
