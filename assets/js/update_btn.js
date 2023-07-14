$(".update_btn").click(function (e) {
    e.preventDefault();
    console.log("click");
    var entity = {
      Email: $("#email").val(),
      Password: $("#password").val(),
      Username: $("#user_name").val()
    };
    console.log(entity)
    UserService.updateUser(entity);
  });

  var token = localStorage.getItem("user_token");
  if (token) {
    var user = Utils.parseJwt(token);
    $('input[name="username"]').val(user.Username);
    $('input[name="password"]').val(user.Password);
    $('input[name="email"]').val(user.Email);
    $("#nav-login").html(navUser);
    $("#username").text(user.Username);
  } 