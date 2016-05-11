$(function(){
  $("#animationButton").click(function(event){
    event.preventDefault();

    if ( $( "#box" ).hasClass("circle")) {
      $ ("#box").removeClass("circle");
    } else {
        $ ("#box").addClass("circle");

    }
  })
});
