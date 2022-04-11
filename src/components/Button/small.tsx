import React from 'react';
import './style.scss';

interface HeadingProps {
  type?: 'submit' | 'button' | 'reset' | 'link';
  to?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
function ButtonPrimary({
  children,
  type = 'button',
  to,
  onClick,
}: HeadingProps) {
  if (type === 'link')
    return (
      <a href={to} target='_blank' className='button-primary' rel='noreferrer'>
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className='button-primary'>
      {children}
    </button>
  );
}

export default ButtonPrimary;
