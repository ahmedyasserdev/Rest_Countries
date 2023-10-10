/* eslint-disable react/prop-types */
import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
    const theme = useTheme()
    return (
        <Box sx={{ width: 220 }}>
            <Link style={{ textDecoration: "none" }} to={`/country/${country.name.common}`}>
                <Card
                    sx={{
                        backgroundColor: theme.palette.mode === 'light' ? 'white' : "hsl(209, 23%, 22%)",
                        "&:hover img": {
                            transition: "transform 200ms ease-in-out",
                            transform: "scale(1.1)",
                        }
                    }}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        width="160"
                        image={country.flags.png}
                    />
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight={"bold"}
                            color={theme.palette.mainColor.primary}
                            gutterBottom
                        >
                            {country.name.common}
                        </Typography>

                        <Typography gutterBottom variant="body1" color={theme.palette.mainColor.primary}>
                            {" "}
                            population :{" "}
                            <Typography variant="span">{country.population}</Typography>{" "}
                        </Typography>

                        <Typography gutterBottom variant="body1" color={theme.palette.mainColor.primary}>
                            {" "}
                            Region :{" "}
                            <Typography variant="span">{country.region}</Typography>{" "}
                        </Typography>

                        <Typography gutterBottom variant="body1" color={theme.palette.mainColor.primary}>
                            {" "}
                            Capital :{" "}
                            <Typography variant="span">{country.capital}</Typography>{" "}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    );
};

export default CountryCard;
