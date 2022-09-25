import React, { useEffect, useContext } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import useColorScheme from "@/hooks/useColorScheme";

export const SiteContext = React.createContext({});

const SiteContextProvider = SiteContext.Provider;

export const useSite = () => useContext(SiteContext);



const Site = ({ children }) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  console.log({ colorScheme })

  return (
    <SiteContextProvider value={{ colorScheme, setColorScheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SiteContextProvider>
  )
}

export default Site;
