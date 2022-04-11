import React from 'react';
import './style.scss';

interface HeadingProps {
  type?: 'submit' | 'button' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
}
function ButtonPrimary({ children, type = 'button', onClick }: HeadingProps) {
  return (
    <button type={type} onClick={onClick} className='button-primary'>
      {children}
    </button>
  );
}

export default ButtonPrimary;
