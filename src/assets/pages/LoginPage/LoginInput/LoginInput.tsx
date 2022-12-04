import React, { FC } from 'react';
import cn from 'classnames';
import styles from './LoginInput.module.scss';
import { LoginInputProps } from './LoginInput.props';

const LoginInput: FC<LoginInputProps> = ({ label, placeholder }) => {
  return (
    <div className={cn(styles.input)}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.label)}>{label}</div>
        <input type={'text'} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default LoginInput;
