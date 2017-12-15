//capture search term for article queryURL and api key
var articles = $(this).attr("data-name");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
//setup ajax call
queryURL += '?' + $.param({
  'q': "trump",
  'api-key': "7506f9c0a4f3455eb001608543b429b1",
  'begin_date': "20161101",
  'end_date': "20171101"
});
$.ajax({
  url: queryURL,
  method: "GET",
}).done(function(result) {
  console.log(result.response);
var numArticles = 0;

  for (var i = 0; i<numArticles; i++) {
    articleCounter++;
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "articleWell-" + articleCounter)
    $('#wellSection').append(wellSection);
}


}).fail(function(err) {
  throw err;
});

//setup variables hold content for 
var articleDiv = $("<div class='article'>")

//number of records

//start year range

//end year range


//functions for

//