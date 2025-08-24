import { createContext, useContext } from "react";

// 1. Create context with default values
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// 2. Export the Provider (so you can wrap <App /> or components with it)
export const ThemeProvider = ThemeContext.Provider

// 3. Custom hook to use context easily
export default function useTheme() {
    return useContext(ThemeContext)
}
