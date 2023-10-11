import React from 'react'
import {Box  , Typography , useTheme } from "@mui/material"
import { useSelector } from 'react-redux'
import { getError } from '../features/slices/countriesSlice'
const Error = () => {
    const theme = useTheme()
    const isError = useSelector(getError) 

    return (
    
    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
>
    <Typography variant="h4" color={theme.palette.mainColor.primary}>
        {isError}
    </Typography>
</Box>
  )
}

export default Error