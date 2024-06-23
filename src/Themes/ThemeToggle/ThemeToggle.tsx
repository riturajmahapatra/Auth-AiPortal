import React from 'react';
import { useAppDispatch, useAppSelector } from '@/Redux-Toolkits/Hooks/hooks';
import { setTheme } from '@/Redux-Toolkits/features/Theme/themeSlice';

interface ThemeToggleProps {
  children: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`theme-toggle ${theme}`}>
      <button onClick={() => dispatch(setTheme())}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
      {children}
    </div>
  );
};

export default ThemeToggle;
