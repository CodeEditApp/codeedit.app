import { useEffect, useState } from 'react';

const useColorScheme = () => {
  const [colorScheme, setColorSchemeState] = useState();

  const getColorScheme = () => {
    const storedColorScheme = window.localStorage.getItem('colorScheme');
    let colorScheme = !storedColorScheme ? 'auto' : 'light';

    if (
      storedColorScheme !== 'undefined' &&
      ['dark', 'light'].includes(storedColorScheme)
    ) {
      colorScheme = storedColorScheme;
    }

    return colorScheme;
  };

  const setColorScheme = (colorScheme) => {
    if (['light', 'dark'].includes(colorScheme)) {
      window.localStorage.setItem('colorScheme', colorScheme);
      document.children[0].setAttribute('data-color-scheme', colorScheme);
    } else {
      const systemColorScheme =
        typeof window.matchMedia !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      window.localStorage.removeItem('colorScheme');
      document.children[0].setAttribute('data-color-scheme', systemColorScheme);
    }
  };

  useEffect(() => {
    const initialColorScheme = getColorScheme();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => setColorScheme(getColorScheme()));

    setColorScheme(initialColorScheme);
    setColorSchemeState(initialColorScheme);
  }, []);

  return { getColorScheme, setColorScheme, colorScheme };
};

export default useColorScheme;
