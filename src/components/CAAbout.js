/**
 * Created by marcus on 2017/2/26.
 */
import React from "react";
import Paper from "material-ui/Paper";
import {red400} from "material-ui/styles/colors";

const style = {
    container: {
        boxSizing: "border-box",
        padding: "48px 24px",
        backgroundColor: red400
    },
    content: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        textAlign: "center",
        color: "white",
        maxWidth: "575px"
    },
    secondaryText: {
        fontWeight: "300",
        fontSize: "20px",
        lineHeight: "28px",
        textIndent: "2em",
        textAlign: "justify"
    }
};

const CAAbout = () => (
    <div id="more">
        <Paper style={style.container} rounded={false}>
            <div style={style.content}>
                <p style={style.secondaryText}>
                    行知学院计算机协会成立于2012年，挂靠于行知学院工学分院。协会旨在营造优良的学术交流环境，为成员们提供一个能够相互学习，共同进步的平台。
                    自创建以来，协会组织成员多次参加计算机类目的各种比赛，如大学生计算机设计大赛、大学生服务外包大赛、ACM 竞赛等。同时，协会还组织开展与专
                    业相关的讲座，邀请相应的老师前来授课，为成员们普及知识，开阔眼界，也对成员们日后的职业选择起到了导向作用。
                </p>
            </div>
        </Paper>
    </div>
);

export default CAAbout;