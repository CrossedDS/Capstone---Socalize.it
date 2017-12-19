function grabDataFromNewsAPI(callback) {
  const NEWS_API = 'https://newsapi.org/v2/top-headlines';
  const query = {
    'apiKey': "2e60660726d94e64b4f8265d7bce80c3",
    'sources': "cbs-news,cnn,fox-news,google-news,nbc-news,the-washington-post,usa-today",
    'sortBy': "publishedAt",
  }
  $.getJSON(NEWS_API, query, callback);
};

function renderNews(result) {
  return `
    <div class="news-container">
      <h2 class="news-title"><a href="${result.url}">${result.title}</a></h2>
        <h3 class="news-source">Source: ${result.source.name}</h3>
          <h4 class="news-time">${result.publishedAt}</h4>
            <p class="news-desc">${result.description}</p>
              <a href="${result.url}"><img class="img-responsive img-rounded" src="${result.urlToImage}"></a>
                </div>
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

function showTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#top-button").fadeIn();
    } else {
        $("#top-button").fadeOut();
    };
};

function topButtonIsClicked() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
};

window.onscroll = function() {showTopButton()};
