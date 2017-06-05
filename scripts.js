// $(document).ready(function(){
//   $("p").click(function(){
//   $ ("img").show();
//   });
// });

// second instructions
// $(document).ready(function(){
//   $("p").click(function(){
//   $ ("#walrus-showing").toggle();
//   $ ("#walrus-hidden").toggle();
//   });
// });


$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
