import React from "react";

export const Appcontext = React.createContext()

export const AppProvidr = ({children})=>{
    const [theme,setTheme] = React.useState(true)
    const toggletheme=()=>{
        theme? setTheme(false):setTheme(true)
    }
    return(
        <Appcontext.Provider value={[theme,toggletheme]}>
            {children}
        </Appcontext.Provider>
    )
}