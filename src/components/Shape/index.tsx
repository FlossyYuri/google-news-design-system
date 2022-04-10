import React from 'react';
import './style.scss';

interface ShapeProps {
  children?: React.ReactNode;
}
function Shape({ children }: ShapeProps) {
  return <div className='shape'>{children}</div>;
}

export default Shape;
