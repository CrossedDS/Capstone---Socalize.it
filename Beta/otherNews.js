function grabDataFromNewsAPI(callback) {
  const NEWS_API = 'https://newsapi.org/v2/top-headlines';
  const query = {
    'apiKey': "2e60660726d94e64b4f8265d7bce80c3",
    'sources': "abc-news,cbs-news,cnn,fox-news,google-news,nbc-news,the-washington-post,usa-today",
  }
  $.getJSON(NEWS_API, query, callback);
};

function renderNews(result) {
  return `
    <h2 class="news-title"><a href="${result.url}">${result.title}</a></h2>
      <h3 class="news-source">Source: ${result.source.name}</h3>
        <h4 class="news-time">${result.publishedAt}</h4>
          <p class="news-desc">${result.description}</p>
            <a href="${result.url}"><img class="news-image" src="${result.urlToImage}"></a>
  `
};

function showResults(data) {
  const results = data.articles.map(function(item, index) {
    return renderNews(item);
  });
  $('#news-box').html(results);
};

$(document).ready(function(){
  grabDataFromNewsAPI(showResults);
});
