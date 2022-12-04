import { ReactNode } from 'react';
import { lProps } from '../Layout/Layout.props';

export interface PageProps {
  meta: {
    pageTitle: string,
    pageDescription?: string,
    keywords: string,
  };
  children?: ReactNode;
  layoutProps: lProps;
}
