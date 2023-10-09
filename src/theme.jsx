import  { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {
  const darkBlue = "hsl(209, 23%, 22%)";
  const veryDarkBlue = "hsl(207, 26%, 17%)";
  const veryLightGray = "hsl(0, 0%, 98%)";
  const white = "hsl(0, 0%, 100%)";

  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            mainColor: {
              primary: darkBlue,
            },
            input : {
              main: white,
            },
          
            bg: {
              main: veryLightGray,
            },
          }
        : {
            // palette values for dark mode
            input: {
              main: darkBlue,
            },

            mainColor: {
              primary: white,
            },
            bg: {
              main: veryDarkBlue,
            },
          }),
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
