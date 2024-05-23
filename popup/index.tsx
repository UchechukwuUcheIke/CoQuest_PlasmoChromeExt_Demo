//import './index.css';
import { useState, Fragment } from "react"
import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"
import "./theme.ts"
import "./index.css"
import { Button, Typography, Toolbar, IconButton, Stack, AppBar, Box, Divider } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function IndexPopup() {

  async function  handleExploreTopics() {
    //TODO: Change this to Plasmo's messaging tools for communication
    // Sends message to content script to make the workbench visible
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {from: "popup", to:"workbench", action: 'toggle-workbench-visibility' }, (response) => {
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
    <Box sx={{ display: 'flex', padding: "0px", bgcolor: "#EEEEEE" }}>
      <AppBar elevation={1} sx={{bgcolor: "white", justifyContent: 'center', height: "20%"}}>
        <Toolbar sx={{
          width: "100%",
          mx: "auto",
          padding: "0px"
          }}>
          <SearchIcon fontSize="large" sx={{color: "#FF8C42"}} />
          <Typography variant="h6" margin="0px" sx={{color: "gray", fontWeight: 'bold' }}>
            CoQuest
          </Typography>
          <IconButton sx={{ marginLeft: "auto" }} onClick={handleSettings}>
            <SettingsIcon sx={{color: "#FF8C42"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack position="absolute" sx={{ top: "auto", bottom: "0px", margin: "0px" }}
         spacing={2} width="95%" height="70%" display="flex" direction="column" alignItems="stretch" justifyContent="flex-start">
        
        <Button variant="contained" size="large" 
        sx={{bgcolor: "#FF8C42", 
        '&:hover': {background: "#FF9C5C"}}}
         onClick={handleExploreTopics}>
          Explore Topics
        </Button>

        <Divider variant="middle" />
        <Button variant="contained" size="large"
        sx={{bgcolor: "#FF8C42",
        '&:hover': {background: "#FF9C5C"}}}
        onClick={handleHeadToWebsite}>
          Head to Website
        </Button>
      </Stack>
    </Box>
  )
}

export default IndexPopup
