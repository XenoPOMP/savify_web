import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const LoginRedirect = () => {
  // @ts-ignore
  const isLogged = useSelector((state) => state.login.logged);

  if (!isLogged) document.location.href = '/auth/login';

  return <></>;
};

export default LoginRedirect;
