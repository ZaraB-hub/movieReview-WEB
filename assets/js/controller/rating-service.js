var RatingService = {
    init: function (movieid) {
        RatingService.getRatings(movieid)},
    getRatings: function (movieId, ) {
        $.get("rest/ratings/" + movieId, function (data) {
            var rating = (data === null) ? "0" : data.average || "0";
            var ratingText = rating + "/10";
            $(".flex_rating").text(ratingText);

        });

        $.get("rest/ratings/" + movieId + "/" + Utils.parseJwt(localStorage.getItem("user_token")).UsersID, function (data) {
            console.log("rating2", data)
            var rating = data.length !== 0 ? data[data.length - 1].Rating + "/10" : "Rate";
            $(".user_rating").text(rating).attr("ratings-id", data[data.length - 1].RatingsID);
        });

        $(".remove_rating").click(function () {
            var ratingsId = $(".user_rating").attr("ratings-id");
            RatingService.delete(ratingsId);
        });

        $(".rate_btn").on("click", function (e) {
            e.preventDefault();

            var entity = {
                UsersID: Utils.parseJwt(localStorage.getItem("user_token")).UsersID,
                MoviesID: localStorage.getItem("selectedMovieId"),
                Rating: $('input[name="user_rating"]').val()
            };

            var flexRating = $(".flex_rating").text();
            if (flexRating == "0/10") {
                RatingService.create(entity);
            } else {
                var ratingsId = $(".user_rating").attr("ratings-id");
                RatingService.update(entity, ratingsId);

            }
        });


    },
    create: function (entity) {
        $.ajax({
            url: "rest/ratings",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "POST",
            data: JSON.stringify(entity),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log("hi")
                RatingService.getRatings(entity.MoviesID, entity.UsersID);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown, textStatus);
            },
        });
    },

    update: function (entity, id) {
        $.ajax({
            url: "rest/ratings/" + id,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "PUT",
            data: JSON.stringify(entity),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result, "sucess");
                RatingService.init(localStorage.getItem("selectedMovieId"));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        });
    },

    delete: function (ratingId) {
        $.ajax({
            url: "rest/ratings/" + ratingId,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "DELETE",
            success: function (result) {
                RatingService.init(localStorage.getItem("selectedMovieId"));
                console.log("succ", result)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        });
    },


}