const NYT_TOP_API = "https://api.nytimes.com/svc/topstories/v2/home.json";

function getDataFromAPI() = {
  let key = {
    'api-key': '7d043322ac9d4f7c9476f12845e76475',
  };
  $.getJSON(NYT_TOP_API, key)
};

//Renders news in Bootstrap Well
$('#news-box').append(
  `

  `
)
