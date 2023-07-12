var ReviewService = {
    init: function () {
        ReviewService.getReviews();
    },
    getReviews: function () {
        var mID = localStorage.getItem("selectedMovieId");
        $("#reviews-container").empty();
        $.get("rest/reviews/movie/" + mID, function (data) {
            if (data.length === 0) {
                $("#reviews-container").append("<h4 class='pt-4 m-auto pb-5'> No reviews made yet. Be the first one to review this movie</h4>");
            } else {
                data.forEach(function (review) {
                    // console.log(review);
                    $.get("rest/users/" + review.UsersID, function (user) {
                        var deleteButtonHtml = "";
                        var token = localStorage.getItem("user_token");
                        if (token) {
                            var loggedInUser = Utils.parseJwt(token);
                            if (review.UsersID === loggedInUser.UsersID) {
                                deleteButtonHtml = `<i class="bi bi-x-square" onclick="ReviewService.delete(${review.ReviewsID})" data-review-id="${review.ReviewsID}" style="cursor:pointer"></i>`;
                            }
                        }
                        var reviewHtml = `
                        <div class="review d-flex p-2 border-bottom  ">
                            <img src="./assets/pics/dragon.jpg" alt="" width="70px" height="70px" class="rounded">
                            <div class="d-flex" style="flex-grow: 1;">
                                <div style="flex-grow: 1;">
                                    <div class="person-info m-1 ms-2">
                                        <h6 class="opacity-100">${user.Username}</h6>
                                        <h6 class="opacity-75">${review.CreatedAt}</h6>
                                    </div>
                                    <p class="ms-2">${review.Comment}</p>
                                </div>
                                ${deleteButtonHtml}
                            </div>
                        </div>
                    `;

                        $("#reviews-container").append(reviewHtml);
                    });
                });
            }
        });
    },
    create: function (entity) {
        var token = localStorage.getItem("user_token");
        var user = Utils.parseJwt(token);
        var payload = {
            MoviesID: entity.MoviesID,
            UsersID: user.UsersID,
            Comment: entity.Comment
        };
        $.ajax({
            url: "rest/reviews",
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
                ReviewService.getReviews();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
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
                ReviewService.getReviews();
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
                ReviewService.getReviews();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            },
        });
    },


}