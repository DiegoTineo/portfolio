import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

export const PREFERED_DEV_THEME: Theme | undefined = 'dark';

const getInitialTheme = (): Theme => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }

  if (PREFERED_DEV_THEME !== undefined) {
    return PREFERED_DEV_THEME;
  }

  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const themeStore = atom<Theme>(getInitialTheme());

export function toggleTheme() {
  const currentTheme = themeStore.get();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  themeStore.set(newTheme);
  
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  localStorage.setItem('theme', newTheme);
}

export function setTheme(theme: Theme) {
  themeStore.set(theme);
}
