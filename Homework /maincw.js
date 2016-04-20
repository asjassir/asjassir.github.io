$(
  function() {
    $("#myLink").click(function() {

      var value = $("#myInput").val();
      var value2 = $("#myInput2").val();
      value = value * 1;
      value2 = value2 * 1;

      var answer = value + value2;


      $(".myDiv").html(answer);

    }
  );


      // $("myDiv").css({

       //"background": "#00ff00",
      //"height": "20px"



    }

)
