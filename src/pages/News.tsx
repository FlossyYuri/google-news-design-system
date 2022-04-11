import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../components/interfaces';
import CardContent from '../components/Shape/CardContent';
import { MARKETING } from '../mockdata/marketing';
import { SECURITY } from '../mockdata/security';
import { SPORTS } from '../mockdata/sports';
import { TECHNOLOGY } from '../mockdata/technology';

function News() {
  let { search } = useParams() as any;
  const [articles, setArticles] = useState<Article[]>(TECHNOLOGY.articles);
  useEffect(() => {
    // APIKit.get<Everything>('/everythig', {
    //   params: {
    //     q: 'keyword',
    //     language: 'pt',
    //   },
    // }).then((response) => {
    //   setArticles(response.data.articles);
    // });
    switch (search) {
      case 'tecnologia':
        setArticles(TECHNOLOGY.articles);
        break;
      case 'marketing':
        setArticles(MARKETING.articles);
        break;
      case 'desporto':
        setArticles(SPORTS.articles);
        break;
      case 'segurança':
        setArticles(SECURITY.articles);
        break;
      default:
        setArticles([]);
    }
  }, [search]);
  return (
    <section className='news'>
      {articles?.map((article) => (
        <CardContent key={article.url} article={article} />
      ))}
    </section>
  );
}

export default News;
