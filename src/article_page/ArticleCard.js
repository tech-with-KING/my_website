import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, author, date, image, content }) => {
  return (
    <div className="article-card">
      <img className="article-image" src={image} alt={title} />
      <div className="article-info">
        <h2 className="article-title">{title}</h2>
        <p className="article-author">By {author}</p>
        <p className="article-date">{date}</p>
        <p className="article-content">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
