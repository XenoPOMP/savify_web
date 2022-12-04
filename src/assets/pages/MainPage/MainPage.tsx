import React from 'react';
import Page from '../../components/Page/Page';
import LoginRedirect from '../../components/LoginRedirect/LoginRedirect';

const MainPage = () => {
  return (
    <Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
      <LoginRedirect />
      This is a main page!
    </Page>
  );
};

export default MainPage;
