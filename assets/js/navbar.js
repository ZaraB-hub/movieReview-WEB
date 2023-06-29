
$(function () {
    var userSearchInput;

    function performSearch() {
        userSearchInput = $("#search-input").val();

        if (userSearchInput.trim() === "") {
            $("#search-results-overlay").hide();
            return;
        }
        $.get("rest/movies/" + userSearchInput, function (data) {
            displayResults(data);
        });

        $.get("rest/actors/" + userSearchInput, function (data) {
            
        });
    }

    function displayResults(data) {
        var $resultsContainer = $("#search-results-overlay");
        $resultsContainer.empty();

        if (data.length === 0) {
            $resultsContainer.text("No results found.");
        } else {
            var $resultList = $("<ul>").addClass("movie-list");

            data.forEach(function (movie) {
                var $movieItem = $("<li>").addClass("movie-item");
                var $movieLink = $("<a>")
                .attr("href", "#movie")
                .text(movie.Title + " (" + movie.ReleaseDate.substring(0, 4) + ")")
                .addClass("movie-link")
                .click(function() {
                    localStorage.setItem("selectedMovieId",  movie.MoviesID);
                });

                $movieItem.append($movieLink);
                $resultList.append($movieItem);
            });

            $resultsContainer.append($resultList);
        }

        $resultsContainer.show();
    }


    $("#search-input").on("input", function () {
        performSearch();
    });


});
