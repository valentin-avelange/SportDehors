import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { themeDark } from "../styles/themes";
import { CssBaseline } from "@mui/material/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
