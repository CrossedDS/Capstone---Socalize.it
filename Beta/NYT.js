function grabDataFromNYT(callback) {
  const NYT_API = 'https://api.nytimes.com/svc/topstories/v2/world.json';
  const key = {
    'api-key': "7d043322ac9d4f7c9476f12845e76475",
  }
  $.getJSON(NYT_API, key, callback);
};

function renderNYT(result) {
  return `
    <h2 class="news-title"><a href="${result.url}">${result.title}</a></h2>
      <h3 class="news-desc">${result.abstract}</h3>
        <h4 class="news-time">${result.updated_date}</h4>
          <a class="news-image" href="${result.url}"><img src="${result.multimedia.url}"></a>
  `
};

function showResults(data) {
  const results = data.results.map(function(item, index) {
    return renderNYT(item);
  });
  $('#news-box').html(results);
};

$(document).ready(function(){
  grabDataFromNYT(showResults);
});
