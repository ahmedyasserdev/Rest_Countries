import { useContext } from "react";
import { ColorModeContext } from "../theme";
import {
  IconButton,
  Typography,
  useTheme,
  Box
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined
} from "@mui/icons-material";

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleModeToggle = () => {
    localStorage.setItem(
      "mode",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
    colorMode.toggleColorMode();
  };

  return (
    <Box
      sx={{
        boxShadow: "4px 4px 2px rgba(0, 0, 0, 0.15)",
        py: "10px",
        backgroundColor : theme.palette.mode === "light" ? "white" : "hsl(209, 23%, 22%)"
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          fontSize={{ xs: "20px", md: "33px" }}
          color={theme.palette.mainColor.primary}
        >
          Where in the world?
        </Typography>

        <IconButton
          onClick={handleModeToggle}
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;