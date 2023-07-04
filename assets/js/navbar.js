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
    }

    function displayResults(data) {
        var $resultsContainer = $("#search-results-overlay");
        $resultsContainer.empty();

        if (data.length === 0) {
            $resultsContainer.text("No results found.");
        } else {
            var $resultList = $("<ul>").addClass("movie-list p-0 col list-unstyled");

            var maxResults = 5; 
            var displayedResults = data.slice(0, maxResults); 

            displayedResults.forEach(function (movie) {
                var $movieItem = $("<li>").addClass("movie-item col row border-bottom border-secondary m-1 py-1 unstyled").attr("data-id",movie.MoviesID);;
                var $movieImg = $("<img>").addClass("col-5").attr("src", movie.Image).css({ width: "70px" });
                var $movieBody = $("<div>").addClass("col");
                var $movieLink = $("<a>")
                    // .attr("href", "#movie")
                    .text(movie.Title)
                    .addClass("movie-link no-link py-2 fw-semibold")
                  ;
                var $movieYear = $("<p>").text(movie.ReleaseDate.substring(0, 4)).addClass("opacity-75");

                $movieBody.append($movieLink, $movieYear);
                $movieItem.append($movieImg, $movieBody);
                $resultList.append($movieItem);
            });

            if (data.length > maxResults) {
                var $searchAllLink = $("<a>")
                    .attr("href", "#search")
                    .text("Search All Results for \"" + userSearchInput + "\"").addClass("no-link ps-2 pt-1 movie-item ")
                    
                $resultList.append($("<li>").append($searchAllLink));
            }

            $resultsContainer.append($resultList);
        }

        $resultsContainer.show();
    }

    $("#search-input").on("input", function () {
        performSearch();
    });
});
