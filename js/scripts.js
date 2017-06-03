$(document).ready(function() {
  $("#quiz").show();
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var childhood = $("input:radio[name=childhood]:checked").val();
    if (childhood === "drawing") {
      $(".containerSurvey").empty();
      $("#result1").show();
    } else if (childhood === "lego") {
      $(".containerSurvey").empty();
      $("#result2").show();
    } else if (childhood === "chess") {
      $(".containerSurvey").empty();
      $("#result3").show();
    }
    $("#retake").show();

  });
  $("#retake").click(function() {

    $(".containerSurvey").empty();
    $("#quiz").show();
  });
});
