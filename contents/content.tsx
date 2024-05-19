import cssText from "data-text:~/contents/content.css"


// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}


const GoogleSidebar = () => {
  return (
      <button className="overlay">
        Hi!
      </button>
  )
}

export default GoogleSidebar