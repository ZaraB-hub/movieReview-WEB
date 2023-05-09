$.get("rest/movies/", function (data) {
    
    // Iterate through the data and generate cards
    data.forEach(function (movie) {
        console.log(movie);
        console.log(movie.MoviesID);
        var cardContainer = $("<div>").addClass("card card-container rounded").attr("data-id", movie.MoviesID);
        var cardImage = $("<img>").addClass("card-img-top card-img-container").attr("src", "");
        var cardBody = $("<div>").addClass("card-body rounded-bottom border-0 card-body-container text-white");
        var rating = $("<h6>").html("<span><i class='fa fa-star fa-xl' style='width: 13%; color: red;'></i>" + movie.AvgRating + "</h6>");
        var title = $("<h5>").addClass("card-title pb-2").text(movie.Title);
        var watchlistBtn = $("<button>").addClass("btn btn-primary w-100 btn-card")
            .html("<span><i class='fa fa-plus fa-xl pe-2'></i></span>Watchlist");

        // Append elements to the card container
        cardContainer.append(cardImage, cardBody);
        cardBody.append(rating, title, watchlistBtn);
        
        // Append the card container to the card group
        $(".card-group").append(cardContainer);

        // $(".card-container").click(function() {
        //     var movieId = $(this).attr("data-id");
        //     console.log("Clicked card with ID:", movieId);
        //     // You can perform further actions with the movie ID, such as opening a new page
        // });
        
    });
});