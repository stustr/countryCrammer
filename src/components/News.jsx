const NewsSection = ({ news }) => {
  return (
    <>
      <h3>Recent news:</h3>
      <a href={news.response["results"][0].webUrl}>
        {news.response["results"][0].webTitle}
      </a>
      <a href={news.response["results"][1].webUrl}>
        {news.response["results"][1].webTitle}
      </a>
      <a href={news.response["results"][2].webUrl}>
        {news.response["results"][2].webTitle}
      </a>
    </>
  );
};

export default NewsSection;
