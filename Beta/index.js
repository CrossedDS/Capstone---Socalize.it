const NYT_TOP_API = "https://api.nytimes.com/svc/topstories/v2/world.json";

function getDataFromAPI(callback) = {
  let key = {
    'api-key': '7d043322ac9d4f7c9476f12845e76475',
  };
  $.getJSON(NYT_TOP_API, key, callback)
};

function renderResult(result) {
  return `
  <div>
    <h2 id="result-header"><a href="${result.url}" target="_blank">${result.title}</a></h2>
      <img id="result-image" src="${result.multimedia[2].url}">
    </div>
    `
};

function displayNYTNews(data) {
  const results = data.results.map((item, index) => renderResult(item));
  $('#news-feed').html(results);
};

$(displayNYTNews);
