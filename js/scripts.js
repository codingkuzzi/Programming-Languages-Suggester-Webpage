$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var childhood = $("input:radio[name=childhood]:checked").val();
      if (childhood === "drawing") {
        $("#result1").show();

      }

  });
});
