import React, { useEffect, useState } from 'react';
import { Box, Pagination, useTheme, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, fetchAllCountries, getLoading, getError } from '../../features/slices/countriesSlice';
import CountryCard from './CountryCard';
import Loader from '../Loader';
import Error from '../Error';


const Countries = () => {
    const countries = useSelector(getCountries);
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading)
    const isError = useSelector(getError)
    const [page, setPage] = useState(1);
    const itemsPerPage = 32;
    useEffect(() => {
        dispatch(fetchAllCountries());
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
    };


    if (isLoading) {
        return (
            <Loader />

        )
    }

    if (isError) {
        return (
            <Error />
        );
    }


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
                    gap: { xs: "20px", sm: "30px" }
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
