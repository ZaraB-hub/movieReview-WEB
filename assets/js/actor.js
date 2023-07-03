var Actor = {
    init: function () {
        var personId = localStorage.getItem("selectedPersonId");

        $.get("rest/actors/" + personId, function (person) {
            $(".person_name").text(person.FirstName + " " + person.LastName);
            $(".m_img").attr('src', person.Image);
            $(".bio").text(person.Bio);
        });

        $.get("rest/actor/"+personId+"/movies", function (cast) {
            console.log("cast",cast)
            if (cast.length > 0) {
                var credit_container = $("<div>").addClass("d-flex flex-wrap mt-3 gap10");
                var castTitle = `<h3 class="fw-semibold">Credits</h3>`;
                $(".credit-section").append(castTitle);
                cast.forEach(function (member) {
                    $.get("rest/movies/" + member.MovieID, function (data) {
                        var castHtml = `
                    <div data-id="${data.MoviesID}" class="mac">
                        <img src="${data.Image} class="rounded m_dark" alt="" width="140px" height="200px">
                        <p class="text-center mt-1"  style="cursor:pointer;">${data.Title}</p>
                    </div>`;
                        credit_container.append(castHtml);
                        $(".credit-section").append(credit_container);

                        $(".mac").click(function () {
                            var id = $(this).attr("data-id");
                            localStorage.setItem("selectedMovieId", id);
                            window.location.href = "#movie";
                        });
                    });
                });
            }
        });
    }
};