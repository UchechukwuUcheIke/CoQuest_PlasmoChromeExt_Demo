import cssText from "data-text:~/contents/content.css"
import { Paper } from "@mui/material"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"

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


const GoogleSidebar = () => {
  return (
      <div className="overlay">
        <CacheProvider value={styleCache}>
        <Paper >
          Hi!
        </Paper>
        </CacheProvider>
      </div>
  )
}

export default GoogleSidebar