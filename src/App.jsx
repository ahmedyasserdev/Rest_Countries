import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header.jsx";
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            backgroundColor: theme.palette.bg.main,
            minHeight: "100vh",
          }}
        >
          <Header />

          <Box sx={{
            width: "80%", mx: "auto",

          }}>

          <Routes>
          <Route index element = {<Home />} />
          
          </Routes>

          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;