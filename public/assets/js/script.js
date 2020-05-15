$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    //hint:setting up ajax put
    event.preventDefault();
    var id = event.currentTarget.getAttribute('data-id')

    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function () {
      console.log("Successfully devoured");
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event){
  event.preventDefault();

  var newBurger = {
    name: $("#name").val().trim()
  }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger")
        location.reload();
      }
    );
  });
});
