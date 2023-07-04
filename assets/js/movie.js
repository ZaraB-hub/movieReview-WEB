var Movie={
  init:function(){
    var movieId = localStorage.getItem("selectedMovieId");


    $.get("rest/movies/" + movieId, function (data) {
        var duration = data.Duration
        var parts = duration.split(":");
        var hours = parts[0];
        var minutes = parts[1];
        var newDuration = hours + "h " + minutes + "m";
        var release = data.ReleaseDate;
        var parts = release.split("-");
        var year = parts[0];
        $(".duration").text(newDuration);
        $(".year").text(year);
        $(".movie-title").text(data.Title);
        $(".plot").text(data.Plot);
        $(".duration").text(data.Duration);
        $(".rn").text(data.AvgRating);
        $(".m_img").attr('src', data.Image);

        var contentId = data.ContentRatingID;
        $.get("rest/contentrating/" + contentId, function (data) {
            $(".content-rating").text(data.Name);
        });

        $.get("rest/movie/" + movieId + "/actors/", function (cast) {
            if (cast.length > 0) {
              var cast_container = $("<div>").addClass("d-flex flex-wrap mt-3 gap10");
              var castTitle = `<h2 class="mt-5 mb-4">Cast</h2>`;
              $(".cast-section").append(castTitle);
              cast.forEach(function (member) {
                $.get("rest/actors/" + member.ActorID, function (data) {
                  var castHtml = `
                    <div class="clas d-flex flex-column align-items-start">
                      <div class="celeb_img">
                        <img src="${data.Image}" alt="">
                      </div>
                      <a href="#person" data-id="${data.ActorsID}" class="celeb_info person-link p-2">${data.FirstName + " " + data.LastName}</a>
                    </div>`;
                  cast_container.append(castHtml);
                  $(".cast-section").append(cast_container);
                  $(".person-link").click(function () {
                    var personId = $(this).attr("data-id");
                    localStorage.setItem("selectedPersonId", personId);
                    window.location.href = "#person";
                  });
                });
              });
            }
          });
          
        RatingService.init(movieId)

        $.get("rest/moviegenre/" + movieId, function (data) {
            let genreIDs = data.map(entry => entry.GenreID); 
            var genreRequests = genreIDs.map(genreID => {
                return $.get("rest/genres/" + genreID);
            });

            Promise.all(genreRequests)
                .then(function (responses) {
                var genres = responses.map(response => response.Name); 
                var categoryText = genres.join(', '); 
                
                $(".category").text(categoryText);
            })
                .catch(function (error) {
                console.log("Error:", error);
                });
            });

    });

  }};