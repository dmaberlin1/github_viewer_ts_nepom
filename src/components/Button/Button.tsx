import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children:string,
  onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({children,onClick}) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
