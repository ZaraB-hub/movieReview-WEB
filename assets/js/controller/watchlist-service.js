var WatchlistService = {
  getWatchlist: function () {

    var user = Utils.parseJwt(localStorage.getItem("user_token"));

    $.get("rest/watchlist/movie/" + user.UsersID, function (data) {
      var watchlistid = data.WatchlistsID;
      localStorage.setItem("watchlist", watchlistid);
      $.get("rest/wm/list/" + watchlistid, function (watchlistData) {
        var $watchlistContainer = $('.watchlist-container');
        $watchlistContainer.empty();

        if (watchlistData.length === 0) {
          const $h2 = $('<h3>').addClass(" pt-4 text-center").text("Your watchlist is empty.");
          const $h5 = $('<h5>').addClass(" p-1 text-center").text("Browse movies to add to your watchlist.");

          $watchlistContainer.append($h2);
          $watchlistContainer.append($h5);

          return;
        }

        for (var i = 0; i < watchlistData.length; i++) {
          (function (i) { // Create a closure using an IIFE
            $.get("rest/movies/" + watchlistData[i].MoviesID, function (movieData) {
              var $wc = $('<div>').addClass('d-flex pb-3 pt-3 ps-3 mm_card').css('border-bottom', '1px solid black').css('cursor', 'pointer').attr("data-id",movieData.MoviesID);

              var $img = $('<img>');
              $img.attr('src', movieData.Image);
              $img.css('width', '120px');
              $img.css('height', '190px');
              $img.css('object-fit', 'cover');

              $wc.append($img);

              const $div = $('<div>').addClass('text ps-4').css('width', '100%').attr("data-id",movieData.MoviesID);

              const $h5 = $('<h5>').attr('id', 'w-h5').text(movieData.Title).attr('data-movie', movieData.MoviesID).addClass('mm_tt');
              $div.append($h5);

              var duration = movieData.Duration;
              var parts = duration.split(":");
              var hours = parts[0];
              var minutes = parts[1];
              var newDuration = hours + "h " + minutes + "m";

              var contentId = movieData.ContentRatingID;
              var release = movieData.ReleaseDate;
              var parts = release.split("-");
              var year = parts[0];

              const $metaDiv = $('<div>').addClass('meta d-flex');
              const $yearP = $('<p>').addClass('year').text(year);
              const $contentRatingP = $('<p>').addClass('content-rating').text('R-18');
              const $durationP = $('<p>').addClass('duration').text(newDuration);
              const $categoryP = $('<p>').addClass('category').text('Horror');
              $metaDiv.append($yearP);
              $metaDiv.append($('<i>').addClass('bi bi-dot'));
              $metaDiv.append($durationP);
              $div.append($metaDiv);

          

              const $p = $('<p>').css({
                width: '70%',
                textAlign: 'justify'
              }).text(movieData.Plot);
              $div.append($p);

              $wc.append($div);
              var $svg = $('<svg xmlns="http://www.w3.org/2000/svg" class="me-3" width="26" height="26" fill="white" style-"cursor:pointer" viewBox="0 0 16 16">' +
                '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>' +
                '</svg>');

              $($svg).on("click", function () {
                WatchlistService.deleteMovie(watchlistid, movieData.MoviesID);
              });
              $wc.append($svg);
              $watchlistContainer.append($wc);
            });
          })(i);
        }
      });


    });

  },
  addMovie: function (watchlistId, movieId) {
    $.ajax({
      url: "rest/watchlistm/" + watchlistId + "/movie/" + movieId,
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
      success: function (result) {
        console.log("Movie added to watchlist");
        WatchlistService.getWatchlist();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error adding movie to watchlist: " + errorThrown);
      }
    });
  },
  deleteMovie: function (watchlistId, movieId) {
    $.ajax({
      url: "rest/watchlistm/" + watchlistId + "/movie/" + movieId,
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
      success: function (result) {
        console.log("Movie deleted from watchlist");
        WatchlistService.getWatchlist();

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error deleting movie from watchlist: " + errorThrown);
      }
    });
  },
};
