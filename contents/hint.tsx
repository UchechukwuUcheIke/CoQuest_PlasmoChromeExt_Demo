import cssText from "data-text:~/contents/hint.css"
import type { PlasmoCSConfig } from "plasmo"
 
import { Button, Box } from "@mui/material"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


export const config: PlasmoCSConfig = {
    matches: ["https://arxiv.org/abs/2310.06155"],
    all_frames: true
}

const style = document.createElement("style")
style.textContent = cssText

const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: style
})

// Inject into the ShadowDOM
export const getStyle = () => {
  return style
}

const Hint = () => {
  const [visible, setVisible] = useState(true);

  function handleOnOpenWorkBench() {
    console.log("Send");
    chrome.runtime.sendMessage({ from: "hint", to: "workbench", action: 'toggle-workbench-visibility' }, (response) => {
      if (response && response.status === 'success') {
        setVisible(false);
      }
    });
    
  }

  return (
    (visible &&
    <Box className = "overlay">
    <CacheProvider value={styleCache}>
        <Button variant="contained" 
          onClick={handleOnOpenWorkBench}
          startIcon={<SearchIcon />} 
          sx={{bgcolor: "#FF8C42",'&:hover': {background: "#FF9C5C"}}}>
            Explore Research Questions
        </Button>
    </CacheProvider>
    </Box>
    )
  )
}

export default Hint