import { useContext, createContext } from "react";

 export const ThemeContext = createContext(
    {
        themeMode:"light",
        lightTheme:()=>{},
        darkTheme:()=>{}
    }
 )

 export const ThemProvider = ThemeContext.Provider

 export default function useTheme(){
    return useContext(ThemeContext)
 }
