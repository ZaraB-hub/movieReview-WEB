var RatingService = {
    init: function (movieid) {
        RatingService.getRatings(movieid,Utils.parseJwt(localStorage.getItem("user_token")).UsersID);
    },
    getRatings:function(movieId,userid){
        $.get("rest/ratings/" + movieId, function(data) {
            var rating = data == null ? 0 : data.average;
            var ratingText = rating + "/10";
            $(".flex_rating").text(ratingText);
          });
          
          $.get("rest/ratings/" + movieId +"/"+userid, function(data) {
            var rating = data.length!=0 ? data[0].Rating + "/10" :  'Rate';
            $(".user_rating").text(rating);
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
                $(".movie_modal").attr("data-id",result.id);
                RatingService.getRatings(entity.MoviesID,entity.UsersID);   
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown,textStatus);
            },
        });
    },

    update: function (entity,id) {
        $.ajax({
            url: "rest/ratings/"+id,
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
                console.log(result,"sucess");
                RatingService.getRatings(entity.MoviesID,entity.UsersID);  
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
                RatingService.getRatings(entity.MoviesID,entity.UsersID);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            },
        });
    },


}