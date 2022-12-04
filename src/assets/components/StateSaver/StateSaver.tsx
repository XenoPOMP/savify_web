import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

const StateSaver = () => {
  // @ts-ignore
  const loginState = useSelector((state) => state.login);

  const cookies = new Cookies();
  const cookieName = 'sav.login';
  useEffect(() => cookies.set(cookieName, loginState), [loginState]);

  return <></>;
};

export default StateSaver;
