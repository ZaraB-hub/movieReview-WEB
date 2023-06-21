var WatchlistService = {
  addMovie: function(watchlistId, movieId) {
    $.ajax({
      url: "rest/watchlistm/"+watchlistId+"/movie/"+movieId,
      beforeSend: function (xhr) {
        xhr.setRequestHeader(
          "Authorization",
          localStorage.getItem("user_token")
        );
      },
      type: "POST",
      data: JSON.stringify({ WatchlistID: watchlistId, MovieID: movieId }),
      contentType: "application/json",
      dataType: "json",
      success: function(result) {
        console.log("Movie added to watchlist");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error adding movie to watchlist: " + errorThrown);
      }
    });
  },
  deleteMovie: function(watchlistId, movieId) {
    $.ajax({
      url: "rest/watchlistm/"+watchlistId+"/movie/"+movieId,
      beforeSend: function (xhr) {
        xhr.setRequestHeader(
          "Authorization",
          localStorage.getItem("user_token")
        );
      },
      type: "DELETE",
      data: JSON.stringify({ WatchlistID: watchlistId, MovieID: movieId }),
      contentType: "application/json",
      dataType: "json",
      success: function(result) {
        console.log("Movie deleted from watchlist");
        $("#movie-" + movieId).remove();

      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error deleting movie from watchlist: " + errorThrown);
      }
    });
  },
  getMovies: function() {

  }
};
