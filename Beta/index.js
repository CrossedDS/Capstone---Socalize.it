let NEWS_TEMPLATE = (
  '<div>' +
    '<h1 id="news-header"></h1>' +
      '<a id="news-url" href=""><img id="news-image" src=""></a>' +
  '</div>'
);

function getDataFromApi() {
  let url = "https://api.nytimes.com/svc/topstories/v2/world.json";
  url += '?' + $.param({
    'api-key': "7d043322ac9d4f7c9476f12845e76475"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
});

function renderResult(result) {
  let template = $(NEWS_TEMPLATE);
  template.find("#news-header").attr("h1", result.title);
  template.find("#news-image").attr("src", result.multimedia[1].url);
  template.find("#news-url").attr("href", result.url)
  return template;
}

$(document).ready(function displayNYTData(data) {
  let results = data.results.map(function(result, index) {
    return renderResult(result);
  });
  $('#news-box').html(results);
  });
};
