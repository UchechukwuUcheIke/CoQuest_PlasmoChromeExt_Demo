import type { PlasmoGetInlineAnchorList, PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useEffect } from "react"

import someCoolImage from "data-base64:~assets/icon.png"
 
export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
    // All hyperlinks in google scholar use h3 HTML tag.
    // Might be worthwhile to change to `h3 class="gs_rt"` in the future if this query breaks
    const anchors = document.querySelectorAll("h3")
    return anchors;
}

const style = document.createElement("style")


export const getStyle: PlasmoGetStyle = () => style


export const config: PlasmoCSConfig = {
    matches: ["https://scholar.google.com/scholar?*", "https://www.google.com/search?*"],
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
    //Using regular HTML instead of MUI components as MUI components do not render properly for inline Plasmo CSUI Components
    return (
        <button onClick={handleOnOpenWorkBench}>
            <img src={someCoolImage} width="20" height="20"></img>
        </button>
    )
}

/*

    <CacheProvider value={styleCache}>
        <Button variant="contained" 
        onClick={handleOnOpenWorkBench}
        sx={{background: "#FF8C42", bgcolor: "#FF8C42",'&:hover': {background: "#FF9C5C"}}}>
            Explore Research Questions about {textContent}
        </Button>
    </CacheProvider>
*/
   
export default InlineHintButton

