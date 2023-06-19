var Signup = {
  init: function () {
    console.log("hi2")
    $("#signupForm").validate({
      submitHandler: function (form) {
        console.log("form");
        var user = Object.fromEntries(new FormData(form).entries());
        Signup.addUser(user);
        form.reset();
      },
    });
  },
  addUser: function (user) {
    console.log("post");
    $.ajax({
      url: "rest/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        Signup.createWatchlist(result)
        window.location.replace("login.html");
      },
    });
  },
  createWatchlist: function (result) {
    console.log(result);
    var watchlistData = {
      UsersID: result.id // Assuming 'id' is the correct property from the 'result' object
    };

    $.ajax({
      url: "rest/watchlists",
      type: "POST",
      data: JSON.stringify(watchlistData),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        console.log("added");
        console.log(result);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error");
      }
    });
  }


}