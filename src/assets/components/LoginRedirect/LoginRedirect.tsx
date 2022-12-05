import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

const LoginRedirect = () => {
  // @ts-ignore
  const isLogged = useSelector((state) => state.login.logged);
  const dispatch = useDispatch();

  // Cookie checking
  const cookies = new Cookies();
  const cookieName = 'sav.login';

  if (cookies.get(cookieName) === undefined) {
    cookies.set(cookieName, { logged: isLogged, token: '' });
  }

  useEffect(() => {
    // Redux state update
    const payload = cookies.get(cookieName);
    dispatch({ type: 'SET_LOGGED_STATUS', payload: payload.logged });

    // Redirect if user is not logged
    // if (!payload.logged) document.location.href = '/auth/login';
  }, []);

  return <></>;
};

export default LoginRedirect;
