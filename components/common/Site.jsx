import React, { useEffect, useContext } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import useColorScheme from "@/hooks/useColorScheme";
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const SiteContext = React.createContext({});

const SiteContextProvider = SiteContext.Provider;

export const useSite = () => useContext(SiteContext);



const Site = ({ children }) => {
  const {
    colorSchemeSetting,
    colorScheme,
    getColorSchemeSetting,
    setColorScheme,
    getSystemColorScheme
  } = useColorScheme();
  const windowDimensions = useWindowDimensions();

  return (
    <SiteContextProvider value={{
      colorSchemeSetting,
      colorScheme,
      getColorSchemeSetting,
      setColorScheme,
      getSystemColorScheme,
      windowDimensions,
      breakpoint: windowDimensions.breakpoint
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SiteContextProvider>
  )
}

export default Site;
