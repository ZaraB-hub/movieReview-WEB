var user = Utils.parseJwt(localStorage.getItem("user_token"));

$.get("rest/watchlist/movie/" + user.UsersID, function (data) {
    var watchlistid = data.WatchlistsID;
    console.log("hi" + watchlistid)
    localStorage.setItem("watchlist", watchlistid);


    $.get("rest/wm/list/" + watchlistid, function (watchlistData) {
        var watchlistContainer = $('.watchlist-container');
        watchlistContainer.empty();
        
        if (watchlistData.length === 0) {
            const $h2 = $('<h3>').addClass("p-3 m4-4").text("Currently empty. Browse movies to add to your watchlist.");
            watchlistContainer.append($h2);
            return;
          }


        for (var i = 0; i < watchlistData.length; i++) {
            $.get("rest/movies/id/" + watchlistData[i].MoviesID, function (movieData) {



                var wc = $('<div>').addClass('d-flex pb-3 pt-3 ps-3').css('border-bottom', '1px solid black');

                var img = $('<img>');

                img.attr('src', 'image.jpg');
                img.css('width', '120px');
                img.css('height', '190px');
                img.css('object-fit', 'cover');

                wc.append(img)

                const $div = $('<div>').addClass('text ps-4').css('width', '100%');

                const $h5 = $('<h5>').attr('id', 'w-h5').text(movieData.Title);
                $div.append($h5);


                var duration = movieData.Duration
                var parts = duration.split(":");
                var hours = parts[0];
                var minutes = parts[1];
                var newDuration = hours + "h " + minutes + "m";

                var contentId = movieData.ContentRatingID;
                var release = movieData.ReleaseDate
                var parts = release.split("-");
                var year = parts[0]

                const $metaDiv = $('<div>').addClass('meta d-flex');
                const $yearP = $('<p>').addClass('year').text(year);
                const $contentRatingP = $('<p>').addClass('content-rating').text('R-18');
                const $durationP = $('<p>').addClass('duration').text(newDuration);
                const $categoryP = $('<p>').addClass('category').text('Horror');
                $metaDiv.append($yearP);
                $metaDiv.append($('<i>').addClass('bi bi-dot'));
                // $metaDiv.append($contentRatingP);
                // $metaDiv.append($('<i>').addClass('bi bi-dot'));
                $metaDiv.append($durationP);
                // $metaDiv.append($('<i>').addClass('bi bi-dot'));
                // $metaDiv.append($categoryP);

                $div.append($metaDiv);

                const $h6 = $('<h6>').addClass('star-rating').html('<span><i class="fa fa-star fa-xl" style="width: 13px;"></i> ' + movieData.AvgRating);
                $div.append($h6);


                const $p = $('<p>').css({
                    width: '70%',
                    textAlign: 'justify'
                }).text(movieData.Plot);
                $div.append($p);

                wc.append($div)
                var svg = $('<svg xmlns="http://www.w3.org/2000/svg" class="me-3" width="26" height="26" fill="white" viewBox="0 0 16 16">' +
                    '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>' +
                    '</svg>');

                $(svg).on("click", function () {
                    WatchlistService.deleteMovie(watchlistid, movieData.MoviesID)
                })
                wc.append(svg)
                watchlistContainer.append(wc);



            })
        }


    });

});


