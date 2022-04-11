import React from 'react';
import './style.scss';

interface HeadingProps {
  children: React.ReactNode;
}
function HeadingSmall({ children }: HeadingProps) {
  return <h1 className='heading-small'>{children}</h1>;
}

export default HeadingSmall;
