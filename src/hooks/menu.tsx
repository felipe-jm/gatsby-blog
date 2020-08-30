import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps>({} as MenuContextProps);

const MenuProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen, toggleMenu }), [
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
  ]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

function useMenu(): MenuContextProps {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider.');
  }

  return context;
}

export { MenuProvider, useMenu };
