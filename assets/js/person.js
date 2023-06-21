$(document).ready(function() {
  // Fetch person data from the API

  var pid = localStorage.getItem("selectedPersonId");
  console.log(pid);
  $.get("rest/actors/"+pid, function(person) {
    // Update person name
    $(".person_name").text(person.FirstName + " " + person.LastName);

    // Update person image
    $(".img img").attr("src", person.image);

    // Update person bio
    $(".bio").text(person.bio);
  });

  // Fetch credits data from the API
  $.get("rest/actor/"+pid+"/movies", function(credits) {
    credits.forEach(function(credit) {
      var movieID = credit.MovieID;
      console.log(credit.MovieID);
      $.get("rest/movies/id/"+movieID, function(movie) {
        console.log(movie)
        var creditHtml = `
          <div class="d-flex flex-column container-card-credit align-items-center pb-5">
            <img style="width: 150px; height: 210px; object-fit: cover;" src="${movie.image}" alt="">
            <div class="text pt-1 ps-1" style="width: 100%; background:var(--fade-black);">
              <h6 class="pt-2"><span><i class="fa fa-star fa-xl" style="width: 13;"></i> ${movie.rating}</h6>
              <h5>${movie.Title}</h5>
            </div>
          </div>
        `;

        // Append the credit HTML to the credit container
        $(".credit_container").append(creditHtml);
      });
    });
  });
});
