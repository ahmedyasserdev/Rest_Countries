import * as React from 'react';
import { Box, Button, Menu, MenuItem, useTheme } from "@mui/material";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { fetchCountryByRegion } from "../../features/slices/countriesSlice";
import { useDispatch } from "react-redux";
const continents = [
  { id: 1, name: 'Africa' },
  { id: 2, name: 'Asia' },
  { id: 3, name: 'Europe' },
  { id: 4, name: 'North America' },
  { id: 5, name: 'Oceania' },
  { id: 6, name: 'South America' },
];

const MenuList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme()
  const dispatch = useDispatch()


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleFetch = (continentName) => {
    dispatch(fetchCountryByRegion(continentName));
    handleClose();
  }

  const styles = {
    color: theme.palette.mainColor.primary,
    px: "40px",
    backgroundColor: theme.palette.mode === "light" ? "white" : "hsl(209, 23%, 22%)",
  }

  const arrowStyles = {
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out",
  }

  return (
    <Box sx = {{zIndex : 2}} >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown sx={{ ...arrowStyles }} />}
        sx={{
          ...styles
        }}
      >
        Filter by Region
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          ".MuiPaper-root": {
            background: "transparent",
          }
        }}
      >
        {continents.map((continent) => (
          <MenuItem
            key={continent.id}
            onClick={() => handleFetch(continent.name)}
            sx={{
              ...styles,
              height: "100%"
            }}
          >
            {continent.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuList;
