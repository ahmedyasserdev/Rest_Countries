import { useState , useEffect } from 'react';
import { Box, TextField, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux"
import { fetchCountryByName, setCountries, getCountries } from "../../features/slices/countriesSlice.js"
import store from "../../features/store"

const Search = () => {
    const [search, setSearch] = useState('')
    const theme = useTheme()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearch(inputValue);

        if (inputValue) {
            dispatch(fetchCountryByName(inputValue)).then(() => {
                const countries = getCountries(store.getState());
                const filteredCountries = countries.filter(country =>
                    country.name.toLowerCase().includes(inputValue)
                );

                dispatch(setCountries(filteredCountries));
            });
        }
    };

  

    return (
        <Box >
            <TextField
                value={search}
                onChange={handleChange}
                sx={{
                    backgroundColor: theme.palette.input.main,
                    borderRadius: '8px',
                    width: { xs: "250px", md: "400px" },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                            outline: 'none',
                        },
                        '&:hover fieldset': {
                            border: 'none',
                            outline: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                            outline: 'none',
                        },
                    },
                }}
                variant="outlined"
                placeholder="Search for a country"
                InputProps={{
                    startAdornment: <SearchIcon color="action" sx={{ cursor: "pointer" }} />,
                }}
            />
        </Box>
    );
};

export default Search;