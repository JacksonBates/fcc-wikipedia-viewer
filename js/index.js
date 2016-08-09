function queryWikipedia() {
  $(".results").html("");
  var query = $("#search-bar").val();
  var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + query + "&format=json&callback=?";
  var regex = /<[^>]*>/g;
  $.getJSON(url, function(data) {
    $.each(data.query.search, function (i, item) {
      $(".results").add("<div class='row'><a href='http://en.wikipedia.org/wiki/" + item.title + "' target='_blank'><p><strong><span class='item-title'>" + item.title + "</span></strong><br>" + item.snippet.replace(regex, "") + "...</p></a></div>").appendTo(".results");
    });
  });
}

// Event triggers 

$("#search-bar").keypress(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    queryWikipedia();
  }
});

$("#basic-addon1").on("click", function() {
  window.location.assign("https://en.wikipedia.org/wiki/Special:Random");
})

$("#basic-addon2").on("click", function() {
  queryWikipedia();
})

$("#basic-addon1").on("mouseover", function() {
  $("#basic-addon1").css('background-color', 'rgba(0,0,0,0.25)');
})

$("#basic-addon1").on("mouseleave", function() {
  $("#basic-addon1").css('background-color', 'rgba(238,238,238,1)');
})

$("#basic-addon2").on("mouseover", function() {
  $("#basic-addon2").css('background-color', 'rgba(0,0,0,0.25)');
})

$("#basic-addon2").on("mouseleave", function() {
  $("#basic-addon2").css('background-color', 'rgba(238,238,238,1)');
})