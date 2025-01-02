import { THEMES } from '@/consts/themes';

export function autoDetectTheme(): void {
  const isValidTheme = (theme: string): boolean => THEMES.includes(theme);

  const setTheme = (theme: string) => {
    if (isValidTheme(theme)) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  const userPreference = localStorage.getItem('themePreferences');
  if (userPreference && isValidTheme(userPreference)) {
    setTheme(userPreference);
    return;
  }

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('themePreferences')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

export function setUserTheme(theme: string): void {
  if (THEMES.includes(theme)) {
    localStorage.setItem('themePreferences', theme);
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    console.warn(`Invalid theme: ${theme}. Available themes are: ${THEMES.join(', ')}`);
  }
}

export function applyLimitation(value: number | string, precision = 2): string {
  if (!value) return '0';

  if (typeof value === 'string') {
    return parseFloat(value).toFixed(precision);
  }

  return Number(value.toFixed(precision)).toString();
}
