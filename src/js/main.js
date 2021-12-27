import generateRandomField from "./generateRandomField";
import printField from "./printField";

const username1 = 'Player1',
      username2 = 'Player2',
      username1Place = document.getElementById('player1-place'),
      username2Place = document.getElementById('player2-place');

const shipTypes = [
        ['Линкор', 4, 1],
        ['Крейсер', 3, 2],
        ['Эсминец', 2, 3],
        ['Катер', 1, 4]
    ];

let playerField = [],
    opponentField = [],
    playerShips = [],
    opponentShips = []; 

function gameStart() {
    
    username1Place.innerHTML = username1;
    username2Place.innerHTML = username2;
  
    playerField = generateRandomField(shipTypes, playerShips);
    opponentField = generateRandomField(shipTypes, opponentShips);
  
    console.log(playerField);
    console.log(opponentField);
  
    printField(playerField, 'playerField', true, 'player');
    printField(opponentField, 'opponentField', false, 'player2');
  
  }

gameStart();