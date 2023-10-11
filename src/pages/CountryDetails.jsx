import  { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button, Typography, useTheme, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCountryDetails,
    getDetails,
    getLoading
} from "../features/slices/countriesSlice";
import { KeyboardBackspace } from "@mui/icons-material";
import Loader from "../components/Loader";

const CountryDetails = () => {
    const { cca2 } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(getDetails);
    const theme = useTheme();
    const isLoading = useSelector(getLoading)
    useEffect(() => {
        dispatch(fetchCountryDetails(cca2));
    }, [cca2, dispatch]);

    if (isLoading || !details.length) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", minHeight: "80vh" }}>
                <Loader />
            </Box>
        );
    }

    const detail = details[0];

    const buttonStyles = {
        backgroundColor: theme.palette.mode === "light" ? "white" : "hsl(209, 23%, 22%)",
        color: theme.palette.mainColor.primary,
        "&:hover": {
            backgroundColor: theme.palette.mode === "light" ? "white" : "hsl(209, 23%, 22%)",
        },
    };

    const typographyStyles = {
        variant: "subtitle1",
        color: theme.palette.mainColor.primary,
        fontSize: { xs: "15px", sm: "18px" },
        gutterBottom: true,
    };

    return (
        <Box mt={{ xs: 4, md: 10 }}>
            <Link to={"/"}>
                <Button variant="contained" sx={{ ...buttonStyles, mb: 5, px: 3.5 }}>
                    <KeyboardBackspace sx={{ mr: 1 }} />
                    Back
                </Button>
            </Link>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center", lg: "flex-start" },
                    gap: { xs: "20px", md: "100px" },
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box width={{ xs: "100%", sm: "49%" }}>
                    <img
                        src={detail.flags.png}
                        style={{
                            width: "100%",
                            display: "block",
                            height: "auto"
                        }}
                        alt={detail.flags.alt}
                    />
                </Box>

                <Box width={{ xs: "100%", sm: "49%" }} mt={6}>
                    <Typography
                        variant="h5"
                        color={theme.palette.mainColor.primary}
                        fontWeight={"bold"}
                    >
                        {detail.name.common}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            flexDirection: { xs: "column", md: "row" },
                            gap: "20px",
                            mt: 3,
                        }}
                    >
                        <Box>
                            <Typography {...typographyStyles}>
                                Native Name:{" "}
                                {detail.name.nativeName[Object.keys(detail.name.nativeName)[Object.keys(detail.name.nativeName).length - 1]].common}
                            </Typography>
                            <Typography {...typographyStyles}>
                                Population: {detail.population}
                            </Typography>
                            <Typography {...typographyStyles}>
                                Region: {detail.region}
                            </Typography>
                            <Typography {...typographyStyles}>
                                Sub Region: {detail.subregion}
                            </Typography>
                            <Typography {...typographyStyles}>
                                Capital: {detail.capital}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography {...typographyStyles}>
                                Top Level Domain: {detail.tld}
                            </Typography>

                            <Typography {...typographyStyles}>
                                Currencies: {Object.values(detail.currencies)[0].name}
                            </Typography>

                            <Typography {...typographyStyles}>
                                Languages: {Object.values(detail.languages).join(", ")}
                            </Typography>
                        </Box>
                    </Box>

                    <Box mt={{ xs: 4, md: 8 }} sx={{ display: "flex", alignItems: { xs: "flex-start", md: "center" }, gap: detail.borders.length <= 6 ? "10px" : { xs: "15px", md: "30px" }, flexDirection: { xs: "column", md: "row" } }}>
                        {
                            detail.borders ? (
                                <Typography fontWeight={"bold"} fontSize={{ xs: "15px", md: "18px" }} color={theme.palette.mainColor.primary}>
                                    Border Countries :
                                </Typography>

                            ) : null
                        }
                        <Box sx={{ display: "flex", alignItems: "center", gap: "3px", flexWrap: "wrap" }}>
                            {detail?.borders?.map((border, index) => (
                                <Link to={`/country/${border}`} key={index}>
                                    <Button variant="contained" sx={{ ...buttonStyles, px: 2.5, m: "5px" }}>
                                        {border}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CountryDetails;
