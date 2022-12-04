import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import LoginRedirect from '../LoginRedirect/LoginRedirect';
import StateSaver from '../StateSaver/StateSaver';
import ThemeProvider from '../../providers/ThemeProvider';

const Layout: FC<LayoutProps> = ({ children, outerProps }) => {
  return (
    <ThemeProvider>
      <StateSaver />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
