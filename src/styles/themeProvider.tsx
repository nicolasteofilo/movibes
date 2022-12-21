import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

import { GlobalStyles } from "./global";

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}
