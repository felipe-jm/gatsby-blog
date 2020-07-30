function getThemeColor(): '#fff' | '#1a1a1a' {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') {
    return '#fff';
  }

  return '#1a1a1a';
}

export default getThemeColor;
