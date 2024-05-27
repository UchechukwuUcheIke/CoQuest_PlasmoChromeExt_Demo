import cssText from "data-text:~/contents/workbench.css"
import grid_texture from "data-base64:~assets/grid-texture.jpg"

import { Paper, Stack, Box, Divider, Button, AppBar, Typography, IconButton, Container, Toolbar } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import SearchIcon from '@mui/icons-material/Search';

import ReactFlow from 'reactflow';
import TextCSS from 'data-text:~/node_modules/reactflow/dist/style.css'; //TODO: Find a way to import reactflow styling as text

import { useState, useEffect } from "react";

import buildTree from "./tree";

const style = document.createElement("style")
style.textContent = cssText
style.textContent += TextCSS

const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: style
})

// Inject into the ShadowDOM
export const getStyle = () => {
  return style
}

const Workbench = () => {
  const [workbenchOpen, setWorkbenchOpen] = useState(true); //TODO: Set this back to false before the demo

  const data = [
    { id: 1, parentId: null, name: "Root" },
    { id: 2, parentId: 1, name: "Section A" },
    { id: 3, parentId: 1, name: "Section B" },
    { id: 4, parentId: 2, name: "Page 1" },
    { id: 5, parentId: 2, name: "Page 2" },
    { id: 6, parentId: 3, name: "Page 3" }
  ];

  const dataTree = buildTree(data)
  //const [currentNode, setCurrentNode] = dataTree[0];

  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


  function handleOnExit() {
    setWorkbenchOpen(false);
  }

  function handleOnExport() {
    window.open("https://github.com/yiren-liu/coquest?tab=readme-ov-file", "_blank")
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
      <CacheProvider value={styleCache}>
      <Box className = "overlay">
        
        <Paper className="paper" elevation={3}>
          <AppBar elevation={1}
              sx={{bgcolor: "white", position: "relative", justifyContent: 'center', height: "20%"}}>
            <Toolbar>
              <SearchIcon fontSize="large" sx={{color: "#FF8C42"}} />
              <Typography margin="0px" sx={{mr: 2, flexGrow: 1, color: "gray", fontWeight: 'bold' }}>
                CoQuest
              </Typography>
              
              <IconButton sx={{'&:hover': {background: "#990000", color: "white"}}} onClick={handleOnExit}>
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box className="box" sx={{display: 'flex'}}>
            <Container sx={{ display: 'flex', flexGrow: 4, backgroundImage: grid_texture, bgcolor: "#EEEEEE"}}>

              <ReactFlow nodes={initialNodes} edges={initialEdges} />

            </Container>
            <Divider orientation="vertical" flexItem/>
            <Stack  direction="column" justifyContent="center" alignItems="stretch" spacing={2} sx={{ padding: "5px", flexGrow: 1}}>
              <Button variant="contained"
              sx={{bgcolor: "#FF8C42",'&:hover': {background: "#FF9C5C"}}}>
                 Reset 
              </Button>
              <Button variant="contained"
              sx={{bgcolor: "#FF8C42",'&:hover': {background: "#FF9C5C"}}} 
              onClick={handleOnExport}>
                 Export 
              </Button>
            </Stack>
          </Box>
        </Paper>
        
      </Box>
      </CacheProvider>
      )
  )
}

export default Workbench