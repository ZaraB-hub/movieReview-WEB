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
            success: function (student) {
                console.log("success" + student)
            },
        });
    },
}