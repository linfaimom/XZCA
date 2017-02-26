/**
 * Created by marcus on 2017/2/25.
 */
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./CABaseTheme";
import CAToolbar from "./components/CAToolbar";
import CAJumbotron from "./components/CAJumbotron";
import CAAbout from "./components/CAAbout";

//Used for handle tap event because this project uses components which were provided by Material-UI
injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <CAToolbar/>
                    <CAJumbotron/>
                    <CAAbout/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
