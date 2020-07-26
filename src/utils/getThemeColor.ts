function getThemeColor(): '#fff' | '#16202c' {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') {
    return '#fff';
  }

  return '#16202c';
}

export default getThemeColor;
