// TODO: dark/light mode

import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContext {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

interface Props {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext)

  if (ctx === undefined) {
    throw new Error("useThemeContext must be within ThemeProvider")
  }

  return ctx
}
