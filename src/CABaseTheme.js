/**
 * Created by marcus on 2017/2/26.
 */
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {grey800, indigo400, fullWhite} from "material-ui/styles/colors";

//参照 darkBaseTheme 做出的修改，详细参见 darkBaseTheme.js 与 getMuiTheme.js
const muiTheme = getMuiTheme({
    palette: {
        //for the primary color
        primary1Color: grey800,
        //for the text color
        textColor: fullWhite,
        //for the color in paper,drawer, icon menu and so on
        canvasColor: "#303030",
        //for the secondary color
        accent1Color: indigo400
    }
});

export default muiTheme;