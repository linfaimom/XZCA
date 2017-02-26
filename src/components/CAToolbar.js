/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import ToolIcon from "material-ui/svg-icons/action/build";
import DownloadIcon from "material-ui/svg-icons/file/cloud-download";
import TutorialIcon from "material-ui/svg-icons/av/library-books";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import {grey800} from "material-ui/styles/colors";

const style = {
    toolbar: {
        boxShadow: "rgba(0, 0, 0, 0.117647) 0px 10px 8px"
    },
    drawerTitle: {
        lineHeight: "64px",
        fontSize: "18px",
        color: "white",
        marginBottom: "8px",
        paddingLeft: "16px",
        backgroundColor: grey800
    }
};

class CAToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleDrawer() {
        this.setState({
            open: !this.state.open
        });
    }

    generateMenu() {
        return (
            <Menu menuItemStyle={style.drawerMenuItem}>
                <MenuItem leftIcon={<ToolIcon/>} primaryText="工具"/>
                <MenuItem leftIcon={<DownloadIcon/>} primaryText="资源"/>
                <MenuItem leftIcon={<TutorialIcon/>} primaryText="教程"/>
            </Menu>
        );
    }

    generateDrawer() {
        let drawerTitle = (
            <div style={style.drawerTitle}>
                行知计算机协会
            </div>
        );
        let menu = this.generateMenu();
        return (
            <Drawer docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                {drawerTitle}
                {menu}
            </Drawer>
        );
    }

    render() {
        let drawer = this.generateDrawer();
        return (
            <div id="toolbar">
                <AppBar style={style.toolbar}
                        iconElementRight={
                            <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                                      anchorOrigin={{horizontal: "left", vertical: "top"}}
                                      targetOrigin={{horizontal: "left", vertical: "top"}}>
                                <MenuItem primaryText="登录"/>
                                <MenuItem primaryText="注册"/>
                            </IconMenu>
                        }
                        onLeftIconButtonTouchTap={this.handleDrawer.bind(this)}>
                    {drawer}
                </AppBar>
            </div>
        );
    }

}

export default CAToolbar;
