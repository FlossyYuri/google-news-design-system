import React from 'react';
import './style.scss';

interface SubtitleProps {
  children?: React.ReactNode;
}
function SubtitleSmall({ children }: SubtitleProps) {
  return <h2 className='subtitle-small'>{children}</h2>;
}

export default SubtitleSmall;
