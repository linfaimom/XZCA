/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./CABaseTheme";
import CAToolbar from "./CAToolbar";
import CAJumbotron from "./CAJumbotron";
import CAIntro from "./CAIntro";
import CACards from "./CACards";
import CAFooter from "./CAFooter";

//Used for handle tap event because this project uses components which were provided by Material-UI
injectTapEventPlugin();

class CAMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div id="app">
                    <CAToolbar id="toolbar"/>
                    <CAJumbotron id="jumbotron"/>
                    <div id="more">
                        <CAIntro id="introduction"/>
                        <CACards id="cards"/>
                    </div>
                    <CAFooter id="footer"/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default CAMain;
