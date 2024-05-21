//import './index.css';
import { useState, Fragment } from "react"
import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"
import "./index.css"
import { Button, Typography, Toolbar, IconButton, Stack, AppBar, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

  });
  


function IndexPopup() {

  async function  handleExploreTopics() {
    //TODO: Change this to Plasmo's messaging tools for communication
    // Sends message to content script to make the workbench visible
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-workbench-visibility' }, (response) => {
        if (response && response.status === 'success') {
          
        }
      });
    });
  }

  function handleSettings() {
    window.open("chrome-extension://chopojdojpdjgeomjiiinnaabcmieijc/options.html", "_blank")
  }

  function handleHeadToWebsite() {
    window.open("https://www.wikipedia.org/", "_blank")
  }



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
          <IconButton sx={{ marginLeft: "auto" }} onClick={handleSettings}>
            <SettingsIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack position="absolute" sx={{ bottom: "0px", margin: "0px" }} spacing={5} width="95%" height="70%" direction="column" alignItems="stretch" justifyContent="flex-start">
        <Button variant="contained" size="large" onClick={handleExploreTopics}>Explore Topics</Button>
        <Button variant="contained" size="large" onClick={handleHeadToWebsite}>Head to Website</Button>
      </Stack>
    </Box>
  )
}

export default IndexPopup
