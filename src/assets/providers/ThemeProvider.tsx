import React, { FC } from 'react';
import { ThemeProviderProps } from './ThemeProvider.props';
import styles from './ThemeProvider.module.scss';
import cn from 'classnames';

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div className={cn(styles.themeProvider, styles.dark)}>{children}</div>
  );
};

export default ThemeProvider;
