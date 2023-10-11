import {Stack , useTheme , CircularProgress } from "@mui/material"

const Loader = () => {
    const theme = useTheme()
  return (
    <Stack direction = "row" justifyContent = "center" alignItems = "center" width = "100%"   >
    <CircularProgress  sx = {{color : theme.palette.mainColor.primary}}    />
    </Stack>
  )
}

export default Loader