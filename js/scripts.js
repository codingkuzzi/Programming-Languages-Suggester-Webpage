function initSurvey() {
  $("#results").hide();
  $("input:radio:checked").prop('checked', false);
  $("#survey").show();
}

function showResult(result) {
  var maxscore = Math.max(result.design, result.java, result.ruby);
  if (maxscore === 0) {
    return;
    $("#survey").hide();
  }
  if (result.design === maxscore) {
    $("#result1").show();
  } else {
    $("#result1").hide();
  }
  if (result.ruby === maxscore) {
    $("#result2").show();
  } else {
    $("#result2").hide();
  }
  if (result.java === maxscore) {
    $("#result3").show();
  } else {
    $("#result3").hide();
  }
  $("#results").show();
}

function calculateResult() {
  var score = {
    "design": 0,
    "java": 0,
    "ruby": 0
  };
  ["childhood", "company", "personality"].forEach(function(radio) {
    var value = $("input:radio[name=" + radio + "]:checked").val();
    if (value === undefined) {
      return;
    }
    var objvalue = JSON.parse(value);
    score.design += objvalue.design;
    score.java += objvalue.java;
    score.ruby += objvalue.ruby;
  });
  return score;
}

$(function() {
  $("#submit").click(function() {
    var result = calculateResult();
    showResult(result);
  });

  $("#retake").click(function() {
    initSurvey();
  });
});
