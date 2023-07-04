var Home = {
    init: function () {
        var routes = {
            "From Your Watchlist": "rest/wm/list/" + localStorage.getItem("watchlist"),
            "Family Film Night": "rest/movies/genre/family",
            "Recently Added": "rest/movies/",
            "Dramas": "rest/movies/genre/fantasy",
        };

        var token = localStorage.getItem("user_token");

        for (var route in routes) {
            (function (route) {
                var routeURL = routes[route];
                var $sectionContainer = $("<div>").addClass("section o-hidden mb-2");
                var $sectionTitle = $("<h3>").text(route).addClass("section_title m-0 p-0");
                $sectionContainer.append($sectionTitle);
                $left=$("<i>").addClass("bi bi-arrow-left");
                $right=$("<i>").addClass("bi bi-arrow-right");

                var $cardGroup = $("<div>").addClass("card-group d-flex flex-nowrap overflow-auto scroll-behavior");

                $.get(routeURL, function (data) {
                    if (token && routeURL.includes("wm/list") && data.length == 0) {
                        var $message = $("<div>").addClass("p-3 mt-5 d-flex flex-column align-items-center").append(
                            $("<h2>").text("Your Watchlist is empty")).append(
                                $("<p>").text("Browse movies and keep track of what you watch"));
                        $sectionContainer.append($message);
                    } else if (!token && routeURL === "rest/movies/watchlist") {
                        var $signInMessage = $("<div>").addClass("p-3 mt-5 d-flex flex-column align-items-center").append(
                            $("<h2>").text("Sign in to keep track of your movies")).append(
                                $("<p>").text("Create an account or log in"));
                        $sectionContainer.append($signInMessage);
                    } else if (routeURL.includes("wm/list")) {
                        for (var i = 0; i < data.length; i++) {
                            $.get("rest/movies/" + data[i].MoviesID, function (movie) {
                                var moviesArray = [movie];
                                Home.generateCardElements(moviesArray, $cardGroup);
                            });
                        }
                        $sectionContainer.append($cardGroup);
                    } else if (data.length === 0) {
                        return;
                    } else {
                        Home.generateCardElements(data, $cardGroup);
                    }
                    $sectionContainer.append($cardGroup);
                    $(".home").append($sectionContainer);
                });
            })(route);
        }
    },
    generateCardElements: function (data, $cardGroup) {
        data.forEach(function (movie) {
            if ($cardGroup.children().length >= 7) {
                return;
            }
            var $cardContainer = $("<div>").addClass('movie-card d-flex flex-column').css({ height: '500px', width: '285px' });
            var $figure = $('<figure>').addClass('card-banner mb-3').css({ height: '428px', width: '285px' }).attr("data-id", movie.MoviesID);
            var $cardImage = $("<img>").attr("src",movie.Image).attr("data-id", movie.MoviesID);
           var $wtchIcon = $("<button>").addClass("btn btn-primary");
var $icon = $("<i>").addClass("bi bi-bookmark-plus-fill fa-lg");
$wtchIcon.append($icon);

            var $cardBody = $("<div>").addClass(" title-wrapper d-flex justify-content-between align-items-baseline");
            var $title = $("<h3>").addClass("card-title").text(movie.Title).attr("data-id", movie.MoviesID);
            var releaseDate = movie.ReleaseDate;
            var year = releaseDate.split("-")[0];
            var $date = $("<h6>").text(year).addClass("year_duration");

            var $watchlistBtn = $("<button>").addClass("btn btn-secondary w-100 mt-2")
                .html("<span><i class='fa fa-plus fa-xl pe-2'></i></span>Watchlist");
            $figure.append($cardImage);
            $cardBody.append($title,$date);
            $cardContainer.append($figure, $cardBody);
         


            $title.click(function () {
                var movieId = $(this).attr("data-id");
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = "#movie";
            });

            $figure.click(function () {
                var movieId = $(this).attr("data-id");
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = "#movie";
            });

            $watchlistBtn.click(function () {
                var movieId = $title.attr("data-id");
                console.log(localStorage.getItem("watchlist"), movieId);
                WatchlistService.addMovie(localStorage.getItem("watchlist"), movieId);

            });

            $cardGroup.append($cardContainer);
        });
    }
}