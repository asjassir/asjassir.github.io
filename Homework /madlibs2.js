$(function() {
  console.log("form info")


  $("#btn-click").click(function(e) {

    $(".artist").empty().append($("#artist").val());
    $(".instrument").empty().append($("#instrument").val());
    $(".instrument2").empty().append($("#instrument2").val());
    $(".party").empty().append($("#party").val());

  });

});
