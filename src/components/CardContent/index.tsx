import React from 'react';
import ButtonPrimary from '../Button/primary';
import HeadingSmall from '../Heading/small';
import Paragraph from '../Paragraph';
import Shape from '../Shape';
import SubtitleSmall from '../Subtitle';
import './style.scss';

interface CardContentProps {
  title: string;
  subtitle: string;
  body: string;
}
function CardContent({ title, subtitle, body }: CardContentProps) {
  return (
    <article className='card-content'>
      <Shape>
        <HeadingSmall>{title}</HeadingSmall>
        <SubtitleSmall>{subtitle}</SubtitleSmall>
        <Paragraph>{body}</Paragraph>
        <ButtonPrimary>Ler mais</ButtonPrimary>
      </Shape>
    </article>
  );
}

export default CardContent;
