import React from 'react'
import { Box } from "@mui/material"
import Search from '../components/home/Search'
import MenuList from   '../components/home/MenuList'
const Home = () => {
  return (
    <Box mt={{ xs: 3, sm: 5 , overflowX : "hidden" }} >

      <Box sx={{
        display: "flex",
        justifyContent: {xs : "start" , sm : "space-between" },
        alignItems: {xs :"flex-start" , sm :"center" },
        flexDirection : {xs : "column"  , sm : "row" } ,
        gap : {xs :"25px 0" ,sm : " 0 " },
      }} >
        <Search />


        
        <MenuList />
      </Box>



    </Box>
  )
}

export default Home