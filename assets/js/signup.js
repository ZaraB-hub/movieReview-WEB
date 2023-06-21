var Signup = {
  init: function () {
    $("#signupForm").validate({
      rules: {
        email: {
          required: true,
          email: true,
          remote: {
            url: "rest/email", 
            type: "post",
            data: {
              email: function () {
                return $("#email").val();
              }
            }
          }
        },
        password: {
          required: true,
          minlength:3
        },
        username: {
          required: true,
      }
    },
      messages: {
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
          remote: "Email address is already in use"
        },
        password: {
          required: "Please enter your password",
          minlength: "Password has to have atleast 3 charachters"
        },
        username: {
          required: "Please enter your username",
        }
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("text-danger");
        error.insertAfter(element);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass("is-invalid");
      },
      submitHandler: function (form) {
        var user = Object.fromEntries(new FormData(form).entries());
        Signup.addUser(user);
        form.reset();
      }
    });
  },
  addUser: function (user) {
    $.ajax({
      url: "rest/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        Signup.createWatchlist(result);
        window.location.replace("login.html");
      },
    });
  },
  createWatchlist: function (result) {
    var watchlistData = {
      UsersID: result.id 
    }
    $.ajax({
      url: "rest/watchlist",
      type: "POST",
      data: JSON.stringify(watchlistData),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error");
      }
    });
  }


}