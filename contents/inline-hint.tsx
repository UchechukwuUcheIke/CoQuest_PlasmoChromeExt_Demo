import type { PlasmoGetInlineAnchorList, PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useEffect, useState } from "react"

import { Button } from "@mui/material"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
 
export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
    // All hyperlinks in google scholar use h3 HTML tag.
    // Might be worthwhile to change to `h3 class="gs_rt"` in the future if this query breaks
    const anchors = document.querySelectorAll("h3")
    return Array.from(anchors).map((element) => ({
        element,
        insertPosition: "afterend"
    }))
}

const style = document.createElement("style")

const styleCache = createCache({
    key: "plasmo-mui-cache",
    prepend: true,
    container: style
})  

export const getStyle: PlasmoGetStyle = () => style

export const config: PlasmoCSConfig = {
    matches: ["https://scholar.google.com/scholar?*"],
    all_frames: true
}

/**
 * Appears adjacent to research paper links on the Google Scholar page. Suggests usage of CoQuest Chrome Extension
 * @param anchor The HTML component on the website the Button is attached to
 * @returns React Component
 */
const InlineHintButton = ({ anchor }) => {

    function handleOnOpenWorkBench() {
        chrome.runtime.sendMessage({ from: "hint", to: "workbench", action: 'toggle-workbench-visibility' }, (response) => {
          if (response && response.status === 'success') {
          }
        });
        
    }

    useEffect(() => {
    }, []);
    
    const textContent = anchor.element.textContent
    return (
    <CacheProvider value={styleCache}>
        <Button variant="contained" 
        onClick={handleOnOpenWorkBench}
        sx={{background: "#FF8C42", bgcolor: "#FF8C42",'&:hover': {background: "#FF9C5C"}}}>
            Explore Research Questions about {textContent}
        </Button>
    </CacheProvider>
    )
}
   
export default InlineHintButton

