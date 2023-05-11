$(function () {


    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var movieId = urlParams.get("id");

    // Use the movieId as needed
    console.log("movie.js");
    console.log("Movie ID: " + movieId);

    $.get("/rest/movies/id/"+movieId, function(data){
        console.log(data);
    });

})