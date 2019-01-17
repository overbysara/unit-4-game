  $(document).ready(function(){
  
    // Generates random number to guess
  var Random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#numToMatch').text(Random);
  
  //Generate random number for each button
  var num1= Math.floor(Math.random() * 12+1)
  var num2= Math.floor(Math.random() * 12+1)
  var num3= Math.floor(Math.random() * 12+1)
  var num4= Math.floor(Math.random() * 12+1)
  
  // Variables to keep track of wins, losses and total
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

$('#wins').text(wins);
$('#losses').text(losses);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#numToMatch').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 
// Display wins
function woohoo(){
alert("You escaped the jungle! You won!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
// Display losses
function loser(){
alert ("You didn't make it! You lose!");
  losses++;
  $('#losses').text(losses);
  reset()
}
// Clicking fossils
  $('.fish').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  
  $('.bug').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.print').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('.trilo').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 