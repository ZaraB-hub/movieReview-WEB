var Watchlist = {
  init: function () {}
,

  add: function (movieID) {
    $.get("rest/watchlist/movie/30", function (data) {
      let watchlistID = data.watchlistsID;
      console.log(watchlistID);

      var watchlistData = {
        MoviesID: movieID,
        WatchlistsID: watchlistID,
      };

      console.log(watchlistData)

      $.ajax({
        url: "rest/wm",
        type: "POST",
        data: JSON.stringify(watchlistData),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
          console.log(result);
          localStorage.setItem("user_token", result.token);
          window.location.replace("index.html");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          toastr.error(XMLHttpRequest.responseJSON.message);
        },
      });
    });
  },
};