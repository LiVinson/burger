$(function () {

    //When user clicks submit, post function (new burger)
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim(),
            devoured: false
        };

        //Send POST request with newBurger object
        $.ajax("/api/newBurger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added a new burger");
                location.reload();
            })
    });


    //When user clicks devour button,
    //Send a patch request with burgerID to api/update
    $(".devour").on("click", function (event) {
        event.preventDefault(); //confirm if this is needed...
        var burgerID = $(this).data("id");

        $.ajax("/api/update" + burgerID, {
            type: "PATCH",
            value: true
        }).then(
            function () {
                console.log("Inside then after patch request");
                location.reload();
            }
        )
    })
})