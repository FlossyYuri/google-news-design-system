import React from 'react';
import './style.scss';

interface ParagraphProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
function Paragraph({ children, onClick }: ParagraphProps) {
  return (
    <p onClick={onClick} className='paragraph'>
      {children}
    </p>
  );
}

export default Paragraph;
