$(document).ready(function () {
    var movie = localStorage.getItem("selectedMovieId");
    var loggedInUserId = Utils.parseJwt(localStorage.getItem("user_token")).UsersID;

    $.get("rest/reviews/movie/" + movie, function (data) {
        if (data.length === 0) {
            $("#reviews-container").append("<h4 class='pt-4 m-auto pb-5'> No reviews made yet. Be the first one to review this movie</h4>");
        } else {
            data.forEach(function (review) {
                $.get("rest/users/" + review.UsersID, function (user) {
                    var deleteButtonHtml = (review.UsersID === loggedInUserId) ? `<i class="bi bi-x-square " onclick=ReviewService.delete(${review.ReviewsID}) data-review-id="${review.ReviewsID}" style="cursor:pointer" ></i>` : "";

                    var reviewHtml = `
                    <div class="review d-flex m-2 border-bottom">
                        <img src="./assets/pics/images.jfif" alt="" width="50px" height="50px">
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

});

