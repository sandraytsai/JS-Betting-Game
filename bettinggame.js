var bankroll = 100;  
$('#theform').on("submit", function(event){ 
  event.preventDefault();
  var randNum = Math.floor(Math.random()*10 + 1); 
  var bet = parseInt($('#bet').val());
  var guess = parseInt($('#guess').val()); 
  if (bankroll > 0) {
    if (guess == randNum) {
      bankroll += bet;
      $('#result span').text("Correct! You now have $" + bankroll + "!");
    } else if (guess == randNum+1 || guess == randNum-1) {
      $('#result span').text("Close... but not quite");
    } else {
      bankroll -= bet; 
      if (bankroll <= 0) {
        $('#result span').text("Sorry, you lost the game!!! :(");
      } else {
        $('#result span').text("Wroonngggg, you now have $" + bankroll +" left...");
      };
    };
  };
  $('#bankbalance').text("Bank balance: $" + bankroll);
  $('#randomnum').text("Correct number: " + randNum);
  $('#yourguess').text("Your guess: " + guess);
});

$("#reset").on("click", function(event){
  location.reload();
});