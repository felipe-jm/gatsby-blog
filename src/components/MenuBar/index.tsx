import React, { useState, useEffect, useCallback } from 'react';

import { Sun } from '@styled-icons/boxicons-solid/Sun';
import { Moon } from '@styled-icons/boxicons-solid/Moon';
import { HomeCircle as Home } from '@styled-icons/boxicons-solid/HomeCircle';
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Grid } from '@styled-icons/boxicons-solid/Grid';
import { ListUl as List } from '@styled-icons/boxicons-regular/ListUl';

import getThemeColor from '@/utils/getThemeColor';

import * as S from './styles';

const Menubar: React.FC = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  const toggleTheme = useCallback(() => {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode]);

  const toggleDisplay = useCallback(() => {
    window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
  }, [isListMode]);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Voltar para a home"
          cover
          direction="right"
          bg={getThemeColor()}
          duraction={0.6}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          title="Pesquisar"
          direction="right"
          bg={getThemeColor()}
          duraction={0.6}
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={toggleTheme}
          className={theme}
        >
          {theme === 'dark' ? <Sun title="Light" /> : <Moon title="Dark" />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar a visualização"
          onClick={toggleDisplay}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Ir para o topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default Menubar;
