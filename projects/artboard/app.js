$(document).ready(function(){
    for(var i = 1; i <= 1824; i++){
      $('#target').append('<div id="grid' + i + '" class="divBox"></div>');
    }
    var $colors = $("input"),
    thisColor = $colors.val();
    $colors.on("change", function(){
      thisColor = $colors.val();
    });
    $("div.divBox").on("mouseover", function(){
      $(this).css("background-color", thisColor);
    });
    $("button#button").on("click",function(){
      $("div.divBox").css("background-color", "white");
      var $colors = $("input"),
      thisColor = $colors.val();
      $colors.on("change", function(){
        thisColor = $colors.val();
      });
    });
  });