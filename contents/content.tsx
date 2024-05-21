import cssText from "data-text:~/contents/content.css"
import { Paper, Stack, Box, Divider, Button, AppBar, Typography, IconButton, Accordion, Toolbar } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"

import { useState, useEffect } from "react";





const style = document.createElement("style")
style.textContent = cssText

const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: style
})

// Inject into the ShadowDOM
export const getStyle = () => {
  console.log(style);
  return style
}


const Workbench = () => {

  const [workbenchOpen, setWorkbenchOpen] = useState(false);

  function handleOnExit() {
    setWorkbenchOpen(false);
  }

  function handleOnExport() {
    window.open("https://www.wikipedia.org/", "_blank")
  }

  useEffect(() => {
     //TODO: Change this to Plasmo's messaging tools for communication
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'toggle-workbench-visibility') {
        setWorkbenchOpen(true);
        sendResponse({ status: 'success' });
      }
    });
  },[])

  return (
      (workbenchOpen &&
      <Box className = "overlay">
        <CacheProvider value={styleCache}>
        <Paper className="paper" sx={{
        display: 'flex'}}>
          <AppBar
              sx={{position: "relative", justifyContent: 'center', height: "20%"}}>
            <Toolbar>
              <Typography margin="0px" sx={{mr: 2, flexGrow: 1}}>
                CoQuest
              </Typography>

              <IconButton onClick={handleOnExit}>
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Stack className="box" direction="row" spacing={2} justifyContent="space-around" alignItems="center">

          <Button variant="contained">Research Question</Button>
          <Button variant="contained">Persona</Button>


          </Stack>
          <Divider orientation="vertical" variant="middle" flexItem/>
          <Stack className="stack" direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
            <Button variant="contained"> Reset </Button>
            <Button variant="contained" onClick={handleOnExport}> Export </Button>
          </Stack>
        </Paper>
        </CacheProvider>
      </Box>
      )
  )
}

export default Workbench