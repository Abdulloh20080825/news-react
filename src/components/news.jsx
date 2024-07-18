import React from "react";
import moment from "moment";

const News = ({ news }) => {
  return (
    <div className="news">
      <div className="about-news">
        <p>Author: {news.author}</p>
      </div>
      <div className="describe-news">
        <div className="header-content">
          <img src={news.urlToImage} alt={news.title} />
          <p>{news.content}</p>
        </div>

        <hr />
        <div className="news-describtion">
          <p>{news.description}</p>
          <div className="get-source">
            <a href={news.url}>For see this news</a>
            <p>{moment(news.publishedAt).format("MMM.DD.YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
