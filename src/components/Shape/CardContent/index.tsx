import React from 'react';
import Shape from '..';
import ButtonPrimary from '../../Button/small';
import HeadingSmall from '../../Heading/title';
import SubtitleSmall from '../../Heading/subtitle';
import Paragraph from '../../Paragraph';
import '../style.scss';
import { Article } from '../../interfaces';

interface CardContentProps {
  article: Article;
}
function CardContent({
  article: { title, content, description, url },
}: CardContentProps) {
  return (
    <article className='card-content'>
      <Shape>
        <HeadingSmall>{title}</HeadingSmall>
        <SubtitleSmall>{content}</SubtitleSmall>
        <Paragraph>{description}</Paragraph>
        <ButtonPrimary to={url} type='link'>
          Ler mais
        </ButtonPrimary>
      </Shape>
    </article>
  );
}

export default CardContent;
