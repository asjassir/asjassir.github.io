$(function() {
  var score = 0;
  $("#circle1").click(function() {
    score = score + 1;
    $("#score").html(score);

  });

  $("#circle2").click(function() {
    score = score + 10;
    $("#score").html(score);

  });
});
