import { createContext, useState, useContext } from "react";

const darkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(darkModeContext);
