import { useState, useEffect } from "react"
import { Stack, Box, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetch_from_API"

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 YouTube2.0
        </Typography>
      </Box>
      <Box p={2} sx={{ onerflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' md={2} sx={{ color: "white" }}>
          New <span style={{ color: "#F31503" }}>vidoes</span>
        </Typography>
        <Videos video={[]} />
      </Box>
    </Stack>
  )
}

export default Feed