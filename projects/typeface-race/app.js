console.log("App.js is running!");

$(document).on('ready', function() {
//***PULL THE IDS FROM HTML AND MAKE A VARIABLE TO SET AND TO CALL TO THEIR X-AXIS LOCATION BY NUMBER***/
/***THE EXACT NUMBER SET TO IS DEPENDENT ON THE SIZE OF THE SVG WE ARE ANIMATING SO THEY APPEAR EQUAL ON THE PAGE***/
  var $aLocation = $("#playerAvenir");
  var aLocation = 0;
  var $gLocation = $("#playerGaramond");
  var gLocation = -2;
  var winner = false;
//***GRABS SVG A OR G AND ATTRIBUTES X AXIS LOCATION TO ITS INDIVIDUAL PERCENTAGE ON THE STARTING LINE***/
$aLocation.attr('x', aLocation + '%');
$gLocation.attr('x', gLocation + '%');
//***A IS 65 FOR KEYCODE AND G IS 71 FOR KEYCODE**//
$('body').keydown(function(event) {
  if(event.keyCode === 65 && !winner){ //WHEN A IS PRESSED AND WINNER IS false, IT WILL MOVE ACROSS THE PAGE
    $aLocation.attr('x', aLocation + '%');
    aLocation++;
    if(aLocation === 85){ //THE NUMBER OF THE WIN LOCATION IS DIFFERENT FOR EACH PLAYER BECAUSE THE SIZE OF THE SVG IS DIFFERENT
      winner = true; //ONCE THE WINNER IS SET TO TRUE, PLAYER WILL SEE WINNER POPUP ON SCREN AND GAME WILL STOP
      $('div.someoneWins').removeClass("hidden");
      $('h2.addText').html("<p>CONGRATULATIONS!</p><p>AVENIR WINS!</p><p>Close this window and click New Game to play again!</p>");
    }
  }else if(event.keyCode === 71 && !winner){
      $gLocation.attr('x', gLocation + '%');
      gLocation++;
      if(gLocation === 83){
        winner = true;
        $('div.someoneWins').removeClass("hidden");
        $('h2.addText').html("<p>CONGRATULATIONS!</p><p>GARAMOND WINS!</p><p>Close this window and click New Game to play again!</p>");
      }
    }
});
//***OBJECTIVE BUTTON FUNCTIONALITY***//
  $("button.objective").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup.hidden").removeClass("hidden");//opens popup to explain objective
  });
  $("button.close").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup").addClass("hidden"); //makes popup go hidden again so you can play the game
  });
  $('button.winClose').on('click', function(){
    $('div.someoneWins').addClass('hidden');//closes winning popup box
  });
  $("button.replay").on("click", function(){ //onclick telling the button, when clicked, to reload the page for a new game
    location.reload();
  });
});