import { createTheme } from "@material-ui/system";
import { pxToRem } from "../utils";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette,
  typography,
  shadows,
  shape: {
    borderRadius: pxToRem(8)
  },
});

export default theme;
