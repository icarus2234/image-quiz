import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const buttonClasses = classNames(styles.button, className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
