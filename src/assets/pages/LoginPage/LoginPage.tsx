import React from 'react';
import Page from '../../components/Page/Page';
import styles from './LoginPage.module.scss';
import cn from 'classnames';

const LoginPage = () => {
  return (
    <Page
      meta={{ pageTitle: 'Логин', pageDescription: '', keywords: '' }}
      layoutProps={{ useLayout: false }}
    >
      <div className={cn(styles.login)}></div>
    </Page>
  );
};

export default LoginPage;
