$(function () {
    var movieId = localStorage.getItem("selectedMovieId");

        $.get("rest/movies/"+movieId, function (data) {
            console.log(data,"data");
            var duration = data.Duration
            var parts = duration.split(":");
            var hours = parts[0];
            var minutes = parts[1];
            var newDuration = hours + "h " + minutes + "m";
            console.log(newDuration);


            var release = data.ReleaseDate;
            var parts = release.split("-");
            var year = parts[0];
            console.log(year)
            $(".duration").text(newDuration);
            $(".year").text(year);
            $(".movie-title").text(data.Title);
            $(".plot").text(data.Plot);
            $(".duration").text(data.Duration);
            $(".rn").text(data.AvgRating);
            $(".djg").attr('src',data.Image);


            var contentId = data.ContentRatingID;
            $.get("rest/contentrating/" + contentId, function (data) {
                $(".content-rating").text(data.Name);
            });


            $("#watchlistBtn").on("click", function () {
                WatchlistService.addMovie(localStorage.getItem("watchlist"), movieId);
            });

            $.get("rest/movie/" + movieId + "/actors/", function (cast) {
                cast.forEach(function (member) {
                    console.log(member);
                    $.get("rest/actors/" + member.ActorID, function (data) {
                        ;
                        var castHtml = `<div class="one-cast d-flex align-items-start me-5 mb-5">
                                            <img src="${data.Image}" style="width: 150px; height: 310px; object-fit: cover;" alt="">
                                            <a href="#actor" data-id="${data.ActorsID}" class="person-link">
                                            <h5 class="ms-2">${data.FirstName + " " + data.LastName}</h5>
                                            </a>
                                        </div>`;

                        $(".cast-container").append(castHtml);

                        $(".person-link").click(function () {
                            var personId = $(this).attr("data-id");
                            localStorage.setItem("selectedPersonId", personId);
                            console.log("pe sfkdf");
                        });
                    })
                });
            });


            $.get("rest/moviegenre/1", function (data) {
                let genreID = data.GenreID
                $.get("rest/genres/" + genreID, function (data) {
                    var cat=data.Name;
                    $(".category").text(cat)
                });
            });
        });


    }



);
