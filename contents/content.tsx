import cssText from "data-text:~/contents/content.css"
import { Paper, Stack, Box, Divider, Button, AppBar, Typography, IconButton, Icon, Toolbar } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
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
      <Box className = "overlay">
        <CacheProvider value={styleCache}>
        <Paper className="paper">
          <AppBar
              sx={{position: "relative", justifyContent: 'center'}}>
            <Toolbar>
              <Typography margin="0px" sx={{mr: 2, flexGrow: 1}}>
                CoQuest
              </Typography>

              <IconButton sx={{backgroundColor: "grey" }}>
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box className="box">
            


          </Box>
          <Divider orientation="vertical" variant="middle" />
          <Stack className="stack" direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
            <Button variant="contained"> Reset </Button>
            <Button variant="contained"> Export </Button>
          </Stack>
        </Paper>
        </CacheProvider>
      </Box>
  )
}

export default GoogleSidebar