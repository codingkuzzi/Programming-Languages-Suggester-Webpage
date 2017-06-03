function initSurvey() {
  $(".containerResult").hide();
  $("input:radio:checked").prop('checked', false);
  $(".containerSurvey").show();
}

function showResult(resultIndex) {
  $(".containerSurvey").hide();
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();
  $("#result" + resultIndex).show();
  $(".containerResult").show();
}

function calculateResult() {
  var childhood = $("input:radio[name=childhood]:checked").val();
  switch (childhood) {
    case "drawing":
      return 1;
    case "lego":
      return 2;
    case "chess":
      return 3;
    default:
      return 0;
  }
}

$(function() {
  initSurvey();
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var resultIndex = calculateResult();
    if (resultIndex > 0) {
      showResult(resultIndex);

    }
  });

  $("#retake").click(function() {
    initSurvey();



  });
});
