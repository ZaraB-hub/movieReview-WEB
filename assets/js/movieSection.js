$(function () {
    // Define the routes for each section
    var routes = {
        "From Your Watchlist": "rest/movies/watchlist",
        "Family Film Night": "rest/movies/genre/family",
        "Recently Added": "rest/movies/",
        "Comedies": "rest/movies/genre/comedy",
    };

    // Iterate through each section and fetch the corresponding data
    for (var route in routes) {
        (function (route) {
            // console.log(routes[route]);
            var routeURL = routes[route];
            var sectionContainer = $("<div>").addClass("section o-hidden");
            var sectionTitle = $("<h3>").text(route);
            sectionContainer.append(sectionTitle);
            // Create a cardGroup for each section
            var cardGroup = $("<div>").addClass("card-group d-flex flex-nowrap pb-1 overflow-hidden");
            $.get(routeURL, function (data) {
                // Iterate through the data and generate cards
                if (routeURL == "rest/movies/watchlist" && data.length == 0) {
                    var message = $("<div>").addClass("p-3 mt-5 d-flex flex-column align-items-center").append(
                        $("<h2>").text("Your Watchlist is empty")).append(
                            $("<p>").text("Browse movies and keep track of what you watch"));
                    sectionContainer.append(message);
                } else if (data.length == 0) {
                    return;
                }
                else {
                    data.forEach(function (movie) {
                        if (cardGroup.children().length >= 15) {
                            return; // Break the loop if more then  15 cards have been generated
                        }
                        // console.log(JSON.stringify(movie));
                        var cardContainer = $("<div>").addClass("card card-container rounded").attr("id", "section-heading").attr("data-id", movie.MoviesID);
                        var cardImage = $("<img>").addClass("card-img-top card-img-container").attr("src", "");
                        var cardBody = $("<div>").addClass("card-body rounded-bottom border-0 card-body-container text-white");
                        var rating = $("<h6>").html("<span><i class='fa fa-star fa-xl' style='width: 13%; color: red;'></i>" + movie.AvgRating + "</h6>");
                        var title = $("<h5>").addClass("card-title pb-3 text-truncate title-section").text(movie.Title);
                        var watchlistBtn = $("<button>").addClass("btn btn-primary w-100 btn-card")
                            .html("<span><i class='fa fa-plus fa-xl pe-2'></i></span>Watchlist");
                        cardContainer.append(cardImage, cardBody);
                        cardBody.append(rating, title, watchlistBtn);
                        // Append the card container to the cardGroup
                        cardGroup.append(cardContainer);
                        cardContainer.click(function () {
                            var movieId = $(this).attr("data-id");
                            // window.location.href = "#movie?id=" + movieID;
                            window.location.href = "#movie";

                        });
                    });
                    // Append the cardGroup to the section container
                    sectionContainer.append(cardGroup);
                }
                // Append the section container to the home
                $(".home").append(sectionContainer);
            });
        })(route);
    }

});
