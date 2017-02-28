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
import {List, ListItem} from "material-ui/List";
import MenuItem from "material-ui/MenuItem";

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
            <List>
                <ListItem leftIcon={<ToolIcon/>} primaryText="工具"/>
                <ListItem leftIcon={<DownloadIcon/>} primaryText="资源"/>
                <ListItem leftIcon={<TutorialIcon/>} primaryText="教程"/>
            </List>
        );
    }

    generateDrawer() {
        let drawerTitle = (
            <div className="drawer-title">
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
            <div id={this.props.id}>
                <AppBar className="toolbar"
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
