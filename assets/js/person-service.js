var PersonService = {
    init: function () {
        // Initialization code here, if needed
    },

    create: function (person) {
        // Perform AJAX request to create a new person
        $.ajax({
            url: "rest/person",
            type: "POST",
            data: JSON.stringify(person),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
                // Additional logic on success, if needed
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
                // Additional error handling logic, if needed
            },
        });
    },

    update: function (person) {
        // Perform AJAX request to update an existing person
        $.ajax({
            url: "rest/person/" + person.id,
            type: "PUT",
            data: JSON.stringify(person),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
                // Additional logic on success, if needed
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
                // Additional error handling logic, if needed
            },
        });
    },

    delete: function (personId) {
        // Perform AJAX request to delete a person
        $.ajax({
            url: "rest/person/" + personId,
            type: "DELETE",
            success: function (result) {
                console.log(result);
                // Additional logic on success, if needed
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
                // Additional error handling logic, if needed
            },
        });
    },

    // Additional methods, if needed
};
