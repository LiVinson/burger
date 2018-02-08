$(function () {

    //When user clicks submit, post function (new burger)
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim(),
        };

        //Send POST request with newBurger object
        $.ajax("/api/newBurger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added a new burger");
                location.reload(); //Reload home page to have new burger appear
            })
    });

    //When user clicks devour button,
    //Send a patch request with burgerID to endpoint api/update
    $(".devourBtn").on("click", function (event) {
        console.log("devour clicked!");
        event.preventDefault();
        var burgerID = $(this).data("id");
        console.log(`burger ID: ${burgerID}`);

        $.ajax("/api/update/" + burgerID, {
            type: "PATCH"

        }).then(
            function () {
                console.log("Inside then after patch request");
                location.reload();
            }
        )
    })
})