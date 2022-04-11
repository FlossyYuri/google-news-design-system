import React from 'react';
import Shape from '..';
import ButtonPrimary from '../../Button/small';
import HeadingSmall from '../../Heading/title';
import SubtitleSmall from '../../Heading/subtitle';
import Paragraph from '../../Paragraph';
import '../style.scss';

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
