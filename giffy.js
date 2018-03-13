$(document).ready(function() {
  var pixarMovies = [
    "cars movie", "toy story", "up movie", "ratatouille", "finding nemo", "finding dory" 
  ];

  function populateButtons(pixarArray, addClass, addHere) {
    $(addHere).empty();
    for (var i = 0; i < pixarArray.length; i++) {
      var a = $("<button>");
      a.addClass(addClass);
      a.attr("data-type", pixarArray[i]);
      a.text(pixarArray[i]);
      $(addHere).append(a);
    }
  }
  $(document).on("click", ".pixarButton", function() {
    $("#pixarMovies").empty();
    $(".pixarButton").removeClass("active");
    $(this).addClass("active");
    var type = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div class=\"pixarMovies\">");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
    
      }
    });
  });
  $(document).on("click", ".pixarButton", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var pixarMovie = $("giffy-input").eq(0).val();
    if (pixarMovies.length > 2) {
      pixarMovies.push(newAnimal);
    }
    populateButtons(pixarMovies, "", "#pixarButton");
  });
  populateButtons(pixarMovies, "", "#pixarButton");
});