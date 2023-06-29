var ReviewService = {
    init: function () {
    },

    create: function (entity) {
        var token = localStorage.getItem("user_token");
        var user = Utils.parseJwt(token);
        var payload = {
            MoviesID: entity.MoviesID,
            UsersID: user.UsersID,
            Comment: entity.Comment
        };

        console.log(payload, "payload");
        $.ajax({
            url: "rest/review",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "POST",
            data: JSON.stringify(payload),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
        });
    },

    update: function (review) {
        $.ajax({
            url: "rest/review/" + review.id,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "PUT",
            data: JSON.stringify(review),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            },
        });
    },

    delete: function (reviewId) {
        $.ajax({
            url: "rest/reviews/" + reviewId,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    localStorage.getItem("user_token")
                );
            },
            type: "DELETE",
            success: function (result) {
                console.log(result);
                $(".review").filter(function() {
                    return $(this).find(".delete-review-btn").data("review-id") === reviewId;
                }).remove();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            },
        });
    },


}