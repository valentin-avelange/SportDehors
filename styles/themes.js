import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({});

export const themeDark = createTheme({
  palette: {
    background: {
      default: "#303036",
    },
    blue: {
      main: "#30BCED",
    },
    blueButton: {
      main: "#4285F4",
    },
    orange: {
      main: "#FC5130",
    },
    green: {
      main: "#307351",
    },
    white: {
      main: "#FFFAFF",
    },
    black: {
      main: "#303036",
    },
  },
});
