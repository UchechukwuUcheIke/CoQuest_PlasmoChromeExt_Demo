//import './index.css';
import { useState, Fragment } from "react"
import "./index.css"
import { Button, Typography, Toolbar, IconButton, Stack, AppBar } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

  });
  


function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <SearchIcon fontSize="large"/>
          <Typography variant="h6">
            CoQuest
          </Typography>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack position="absolute" bottom="0px" spacing={2} width = "100%" height="70%" direction="column" alignItems="center" justifyContent="center">
        <Button variant="outlined" size="large">Explore Topics</Button>
        <Button variant="outlined">Head to Website</Button>
      </Stack>
    </ThemeProvider>
  )
}

export default IndexPopup
