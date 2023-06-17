$(function () {
    var currentUrl = window.location.href;
    var movieId = localStorage.getItem("selectedMovieId");
    
    if (currentUrl.includes("#movie") && movieId) {
        
        $.get("rest/movies/id/" + movieId, function (data) {
            console.log(data)
            
            
            var duration = data.Duration
            var parts = duration.split(":");
            var hours = parts[0];
            var minutes = parts[1];
            var newDuration = hours + "h " + minutes + "m";
            console.log(newDuration);
            

            var release=data.ReleaseDate
            var parts = release.split("-");
            var year=parts[0]
            console.log(year)
            $(".duration").text(newDuration);   
            $(".year").text(year);   
            $(".movie-title").text(data.Title)
            $(".plot").text(data.Plot)
            $(".duration").text(data.Duration)
            $(".rn").text(data.AvgRating)

            var contentId=data.ContentRatingID;
            $.get("rest/contentrating/" + contentId, function (data) {
                $(".content-rating").text(data.Name)
            });

            //TODO not hardcodede

            
            $.get("rest/moviegenre/11", function (data) {
                let genreID=data.GenreID

                $.get("rest/genres/"+genreID, function (data) {
                    $(".category").text(data.Name)
    
                    
                });
    
            });

    


        });
    }
});
