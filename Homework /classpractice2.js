$(
  function() {
    $("#myButton").click(function() {
      var imageURL = $("#imageURL").val();
      var image = "<img scr" + imageURL + "width=\"1800\" />";
      var html = $("#danceParty").html();
      $("#danceParty").html(html + image);


    });



    });
