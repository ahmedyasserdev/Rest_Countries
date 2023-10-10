import React, { useEffect, useState } from 'react';
import { Box, Pagination, useTheme } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, fetchAllCountries } from '../../features/slices/countriesSlice';
import CountryCard from './CountryCard';

const Countries = () => {
    const countries = useSelector(getCountries);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const itemsPerPage = 32;
    const theme = useTheme()
    useEffect(() => {
        dispatch(fetchAllCountries());
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "80px"
            }}

        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "space-between" },
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: { xs: "10px", sm: "30px" }
                }}
            >
                {
                    countries?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((country, index) => (
                        <CountryCard country={country} key={index} />
                    ))
                }
            </Box>

            <Pagination
                count={Math.ceil(countries?.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
                sx={{
                    '& .Mui-selected': {
                        backgroundColor: "white",
                        color: "hsl(207, 26%, 17%)",
                    },
                    pb: { xs: 3, sm: 5 }
                }}
            />
        </Box>
    )
}

export default Countries;
