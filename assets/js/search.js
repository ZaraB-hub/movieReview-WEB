$(function () {
    var userSearchInput;

    function performSearch() {
        userSearchInput = $("#search-input").val();

        if (userSearchInput.trim() === "") {
            // Hide the search results overlay if the search input is empty
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
        var resultsContainer = $("#search-results-overlay");
        resultsContainer.empty();

        if (data.length === 0) {
            resultsContainer.text("No results found.");
        } else {
            var resultList = $("<ul>").addClass("movie-list");

            data.forEach(function (movie) {
                var movieItem = $("<li>").addClass("movie-item");
                movieItem.text(movie.Title + " (" + movie.ReleaseDate.substring(0, 4) + ")");

                resultList.append(movieItem);
            });

            resultsContainer.append(resultList);
        }

        resultsContainer.show();
    }

    // Event listener for search icon click
    $("#search-icon").click(function (event) {
        event.preventDefault();
        performSearch();
    });

    // Event listener for ENTER key press
    $("#search-input").keyup(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            performSearch();
        }
    });

    // Event listener for input change
    $("#search-input").on("input", function () {
        performSearch();
    });

    // Event listener for form submit
    $("form").submit(function (event) {
        event.preventDefault();
        performSearch();
    });
});
