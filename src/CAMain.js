/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./CABaseTheme";
import CAToolbar from "./components/CAToolbar";
import CAJumbotron from "./components/CAJumbotron";
import CAIntro from "./components/CAIntro";
import CACards from "./components/CACards";
import CAFooter from "./components/CAFooter";

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
