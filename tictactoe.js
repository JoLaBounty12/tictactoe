var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();


const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  
  handleClick = function(event) {
    var cell = event.target;
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
    if (checkWinner() ==true){
      alert ("Current Player Winner");
      resetGame();
    }
    if (checkDraw() ==true){
      alert ("Draw");
      resetGame();
    }

  
    
    playerSelections.push(parseInt(cell.id));
    
    // Swap players
    currentPlayer = nextPlayer;
  }
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)


  }

  function checkWinner() {

  

  for(var i=0; i < winningCombinations.length; i++) {
      let section = winningCombinations[i];
      var matches = 0;
      

      

    for(var j = 0; j < section.length; j++){
        var cell = section[j];
        
        


        if (document.getElementById(cell).innerHTML == currentPlayer) {
          matches++
          if (matches == 3){
            return true;
          }
        }
        else {
          break;
        }
       

    }
  }
  return false;
} 


function checkDraw() {
return playerOSelections.length + playerXSelections.length >= cells.length
}
function resetGame() {
  playerXSelections = new Array();
  playerOSelections = new Array();
  for(var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ""
  }
}
