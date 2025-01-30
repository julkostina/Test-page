import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  setIsDark: () => {},
});

