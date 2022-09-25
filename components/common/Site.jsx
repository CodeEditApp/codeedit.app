import React, { useEffect, useContext } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const SiteContext = React.createContext({});

const SiteContextProvider = SiteContext.Provider;

export const useSite = () => useContext(SiteContext);

function detectColorScheme() {
  var theme = 'light';

  if (
    typeof window.matchMedia !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark';
  }

  document.querySelector(
    'input[type=radio][name=colorToggle][value=auto]'
  ).checked = true;

  if (window.localStorage.getItem('themeColor') !== 'undefined') {
    if (['dark', 'light'].includes(window.localStorage.getItem('themeColor'))) {
      theme = window.localStorage.getItem('themeColor');
      var themeToggle = document.querySelector(
        'input[type=radio][name=colorToggle][value=' + theme + ']'
      );
      themeToggle.checked = true;
    }
  }

  setColorScheme(theme, true);
}

function setColorScheme(theme, auto) {
  if (auto !== true) {
    window.localStorage.setItem('themeColor', theme);
  }

  if (theme === 'auto') {
    window.localStorage.removeItem('themeColor');
    detectColorScheme();
  } else {
    document.children[0].setAttribute('data-color-scheme', theme);
  }

  if (auto !== true) {
    document
      .querySelectorAll('input[type=radio][name=colorToggle]')
      .forEach(function (element) {
        if (theme !== element.value) {
          element.checked = false;
        }
      });
  }
}

function setupActions() {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function (e) {
      detectColorScheme();
    });
}



const Site = ({ children }) => {
  useEffect(() => {
    detectColorScheme();
    setupActions();
  }, []);

  return (
    <SiteContextProvider value={{ setColorScheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SiteContextProvider>
  )
}

export default Site;
