//import './index.css';
import { useState, Fragment } from "react"
import "./index.css"
import { Button, Typography, Toolbar, IconButton, Stack, AppBar, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

  });
  


function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar sx={{
          width: "100%",
          maxWidth: 300,
          mx: "auto",
          padding: 0
          }}>
          <SearchIcon fontSize="large" />
          <Typography variant="h6" margin="0px">
            CoQuest
          </Typography>
          <IconButton sx={{ marginLeft: "auto" }}>
            <SettingsIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack position="absolute" sx={{ bottom: "0px", margin: "0px" }} spacing={5} width="95%" height="70%" direction="column" alignItems="stretch" justifyContent="flex-start">
        <Button variant="contained" size="large">Explore Topics</Button>
        <Button variant="contained" size="large">Head to Website</Button>
      </Stack>
    </Box>
  )
}

export default IndexPopup
