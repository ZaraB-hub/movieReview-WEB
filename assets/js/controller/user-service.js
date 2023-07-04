var UserService = {
  init: function () {
      var token = localStorage.getItem("user_token");
      if (token) {
          window.location.replace("index.html");
      }
      $("#loginForm").validate({
          submitHandler: function (form) {
              var entity = Object.fromEntries(new FormData(form).entries());
              UserService.login(entity);
          },
      });
  },
  
  login: function (entity) {
      $.ajax({
        url: "rest/login",
        type: "POST",
        data: JSON.stringify(entity),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
          localStorage.setItem("user_token", result.token);
          window.location.replace("index.html");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          toastr.error(XMLHttpRequest.responseJSON.message);
        },
      });
    },

  logout: function () {
      localStorage.clear();
      location.reload()
    },

  updateUser: function (entity) {
    localStorage.getItem("user_token");
    var user = Utils.parseJwt(token);
    $.ajax({
      url: "rest/users/"+user.UsersID,
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
        console.log(result);
        $.ajax({
          url: "rest/token",
          type: "POST",
          data: JSON.stringify(result),
          contentType: "application/json",
          dataType: "json",
          success:function(result){
            console.log("token")
            localStorage.setItem("user_token", result.token);
            location.reload();
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error:", errorThrown, textStatus);
            console.log("Response:", XMLHttpRequest.responseText); 
          }
          });
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("Error:", errorThrown, textStatus);
        console.log("Response:", XMLHttpRequest.responseText);      },
    });
  },

  deleteUser: function () {
    localStorage.getItem("user_token");
    var user = Utils.parseJwt(token);
    $.ajax({
      url: "rest/users/"+user.UsersID,
      type: "DELETE", 
      success: function (result) {
        console.log("DELETED",result);
        UserService.logout()
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("Error:", errorThrown);         },
    });
  },
};