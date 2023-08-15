import "../src/Themes/globalStyle.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Themes/default";

import { RouteApp } from "../src/Routes/index";
import { AuthProvider } from "./AuthProvider/AuthContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <RouteApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
