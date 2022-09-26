import React, { useEffect, useContext } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import useColorScheme from "@/hooks/useColorScheme";
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const SiteContext = React.createContext({});

const SiteContextProvider = SiteContext.Provider;

export const useSite = () => useContext(SiteContext);



const Site = ({ children }) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const windowDimensions = useWindowDimensions();

  return (
    <SiteContextProvider value={{ colorScheme, setColorScheme, windowDimensions }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SiteContextProvider>
  )
}

export default Site;
