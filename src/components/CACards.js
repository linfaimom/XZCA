/**
 * Created by marcus on 2017/2/26.
 */
import React from "react";
import {Card, CardMedia} from "material-ui/Card";
import {grey600} from "material-ui/styles/colors";

const style = {
    //外围容器右移一半
    container: {
        paddingTop: "24px",
        paddingBottom: "24px",
        position: "relative",
        float: "left",
        left: "50%"
    },
    //浮动元素左移一半，然后就达到了浮动元素居中的效果
    card: {
        position: "relative",
        float: "left",
        right: "50%",
        margin: "8px",
        width: "300px"
    },
    cardHeader: {
        backgroundColor: grey600,
        textAlign: "center",
        padding: "16px"
    },
    //紧贴浮动元素，变相的实现消除浮动。
    clearFloat: {
        overflow: "hidden",
        width: "100%"
    }
};

const CACards = (props) => (
    <div style={style.clearFloat}>
        <div id={props.id} style={style.container}>
            <Card style={style.card}>
                <div style={style.cardHeader}>工具</div>
                <CardMedia>
                    <img src="images/tools.svg"/>
                </CardMedia>
            </Card>
            <Card style={style.card}>
                <div style={style.cardHeader}>资源</div>
                <CardMedia>
                    <img src="images/resource.svg"/>
                </CardMedia>
            </Card>
            <Card style={style.card}>
                <div style={style.cardHeader}>教程</div>
                <CardMedia>
                    <img src="images/tutorials.svg"/>
                </CardMedia>
            </Card>
        </div>
    </div>
);

export default CACards;
