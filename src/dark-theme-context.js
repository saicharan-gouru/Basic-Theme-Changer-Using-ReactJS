import { createContext, useState } from "react";

export const DarkThemeContext = createContext();



export const DarkProvider = ({children}) =>{
  const [Theme,setTheme] = useState(false);

  const setThemeHandler = () =>
    setTheme(prev => !prev)
  

const ThemeStyling = {
  backgroundColor : Theme ? "black" : "white",
  color: Theme ? "white" : "black"
}

  return(
  <DarkThemeContext.Provider value={{Theme,setThemeHandler,ThemeStyling}}>
    {children}
  </DarkThemeContext.Provider>
  )
  
}
