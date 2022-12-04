import React, { FC } from 'react';
import { LayoutProps } from './Layout.props';
import LoginRedirect from '../LoginRedirect/LoginRedirect';

const Layout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
