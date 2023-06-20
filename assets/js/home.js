function getHome() {
    // Define the routes for each section
    var routes = {
        "From Your Watchlist": "rest/wm/list/14",
        "Family Film Night": "rest/movies/genre/family",
        "Recently Added": "rest/movies/",
        "Comedies": "rest/movies/genre/comedy",
    };

    // Check if the user is authenticated
    var token = localStorage.getItem("user_token");
    var isAuthenticated = token !== null;

    // Iterate through each section and fetch the corresponding data
    for (var route in routes) {
        (function (route) {
            var routeURL = routes[route];
            var sectionContainer = $("<div>").addClass("section o-hidden");
            var sectionTitle = $("<h3>").text(route);
            sectionContainer.append(sectionTitle);

            // Create a cardGroup for each section
            var cardGroup = $("<div>").addClass("card-group d-flex flex-nowrap overflow-auto pb-1 scroll-behavior");

            $.get(routeURL, function (data) {
                // Check if the user is authenticated and the watchlist is empty
                if (isAuthenticated && routeURL === "rest/wm/list/14" && data.length === 0) {
                    var message = $("<div>").addClass("p-3 mt-5 d-flex flex-column align-items-center").append(
                        $("<h2>").text("Your Watchlist is empty")).append(
                            $("<p>").text("Browse movies and keep track of what you watch"));
                    sectionContainer.append(message);
                } else if (!isAuthenticated && routeURL === "rest/movies/watchlist") {
                    var signInMessage = $("<div>").addClass("p-3 mt-5 d-flex flex-column align-items-center").append(
                        $("<h2>").text("Sign in to keep track of your movies")).append(
                            $("<p>").text("Create an account or log in"));
                    sectionContainer.append(signInMessage);
                } else if (routeURL === "rest/wm/list/14") {
                    for (var i = 0; i < data.length; i++) {
                        $.get("rest/movies/id/" + data[i].MoviesID, function (movie) {
                            console.log(movie)
                            var cardContainer = $("<div>").addClass("card card-container rounded").attr("id", "section-heading")
                            var cardImage = $("<img>").addClass("card-img-top card-img-container").attr("src", "").attr("data-id", movie.MoviesID);;
                            var cardBody = $("<div>").addClass("card-body rounded-bottom border-0 card-body-container text-white");
                            var rating = $("<h6>").html("<span><i class='fa fa-star fa-xl' style='width: 13%; color: red;'></i>" + movie.AvgRating + "</h6>");
                            var title = $("<h5>").addClass("card-title pb-3 text-truncate title-section").text(movie.Title).attr("data-id", movie.MoviesID);
                            var watchlistBtn = $("<button>").addClass("btn btn-primary w-100 btn-card")
                                .html("<span><i class='fa fa-plus fa-xl pe-2'></i></span>Watchlist");
                            cardContainer.append(cardImage, cardBody);
                            cardBody.append(rating, title, watchlistBtn);

                            // Append the card container to the cardGroup
                            cardGroup.append(cardContainer);

                            cardImage.click(function () {
                                var movieId = $(this).attr("data-id");
                                localStorage.setItem("selectedMovieId", movieId);
                                window.location.href = "#movie";
                            });

                            title.click(function () {
                                let movieId = $(this).attr("data-id");
                                localStorage.setItem("selectedMovieId", movieId);
                                window.location.href = "#movie";
                            });

                            watchlistBtn.click(function () {
                                let movieId = $(this).siblings(".title-section").attr("data-id");
                                WatchlistService.add(movieId,localStorage.get(watchlist));
                            });
                        });
                    }
                    sectionContainer.append(cardGroup)
                } else if (data.length === 0) {
                        return;
                    } else {
                        data.forEach(function (movie) {
                            if (cardGroup.children().length >= 5) {
                                return; // Break the loop if more than 15 cards have been generated
                            }
                            // Generate the card elements and append them to the cardGroup
                            var cardContainer = $("<div>").addClass("card card-container rounded").attr("id", "section-heading")
                            var cardImage = $("<img>").addClass("card-img-top card-img-container").attr("src", "").attr("data-id", movie.MoviesID);;
                            var cardBody = $("<div>").addClass("card-body rounded-bottom border-0 card-body-container text-white");
                            var rating = $("<h6>").html("<span><i class='fa fa-star fa-xl' style='width: 13%; color: red;'></i>" + movie.AvgRating + "</h6>");
                            var title = $("<h5>").addClass("card-title pb-3 text-truncate title-section").text(movie.Title).attr("data-id", movie.MoviesID);
                            var watchlistBtn = $("<button>").addClass("btn btn-primary w-100 btn-card")
                                .html("<span><i class='fa fa-plus fa-xl pe-2'></i></span>Watchlist");
                            cardContainer.append(cardImage, cardBody);
                            cardBody.append(rating, title, watchlistBtn);

                            // Append the card container to the cardGroup
                            cardGroup.append(cardContainer);

                            cardImage.click(function () {
                                var movieId = $(this).attr("data-id");
                                localStorage.setItem("selectedMovieId", movieId);
                                window.location.href = "#movie";
                            });

                            title.click(function () {
                                let movieId = $(this).attr("data-id");
                                localStorage.setItem("selectedMovieId", movieId);
                                window.location.href = "#movie";
                            });

                            watchlistBtn.click(function () {
                                let movieId = $(this).siblings(".title-section").attr("data-id");
                                WatchlistService.add(movieId,localStorage.getItem(watchlist));
                            });
                        });

                        sectionContainer.append(cardGroup);
                    }

                    $(".home").append(sectionContainer);
                });
        })(route);
    }
}