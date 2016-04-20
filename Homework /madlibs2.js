$(function() {
  console.log("form info")


  $("#btn-click").click(function(e) {

    $(".myArtist").empty().append($("input.myArtist").val());
    $(".myInstrument").empty().append($("input.myInstrument").val());
    $(".myIntrument2").empty().append($("input.myInstrument2").val());
    $(".myParty").empty().append($("input.myParty").val());

  });

});
