import { createTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;