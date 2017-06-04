function initSurvey() {
  $("#results").hide();
  $("input:radio:checked").prop('checked', false);
  $("#survey").show();
}

function showResult(resultIndex) {
  $("#survey").hide();
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();
  $("#result" + resultIndex).show();
  $("#results").show();
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
  $("#submit").click(function() {
    var resultIndex = calculateResult();
    if (resultIndex > 0) {
      showResult(resultIndex);
    }
  });

  $("#retake").click(function() {
    initSurvey();
  });
});
