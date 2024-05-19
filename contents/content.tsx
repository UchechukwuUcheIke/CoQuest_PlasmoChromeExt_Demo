import cssText from "data-text:~/contents/content.css"
import { Paper, Stack, Box, Divider, Button } from "@mui/material"
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
        <Paper className="paper">
          <Box className="box">
            <ResearchTopic />
          </Box>
          <Divider orientation="vertical" variant="middle" />
          <Stack className="stack" direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
            <Button variant="contained"> Reset </Button>
            <Button variant="contained"> Export </Button>
          </Stack>
        </Paper>
        </CacheProvider>
      </div>
  )
}

export default GoogleSidebar

const ResearchTopic = () => {
  return (
      <div className="overlay">
        <CacheProvider value={styleCache}>
        <Paper className="paper">
          <Box className="box">
            <Button variant="contained"> Research Question </Button>
          </Box>

          <Divider orientation="vertical" variant="middle" />
          
          <Stack className="stack" direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
            <Button variant="contained"> Reset </Button>
            <Button variant="contained"> Export </Button>
          </Stack>
        </Paper>
        </CacheProvider>
      </div>
  )
}
