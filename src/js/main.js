import generateRandomField from "./generateRandomField";
import printField from "./printField";
import fieldClick from "./fieldClick";

export const username1 = 'Player1';
export const username2 = 'Player2';
export const username1Place = document.getElementById('player1-place');
export const username2Place = document.getElementById('player2-place');
export const layout = document.getElementById('layout');
export const changePlayerBtn = document.getElementById('change_player');

export const shipTypes = [
        ['Линкор', 4, 1],
        ['Крейсер', 3, 2],
        ['Эсминец', 2, 3],
        ['Катер', 1, 4]
    ];

export let playerField = [];
export let opponentField = [];
export let playerShips = [];
export let opponentShips = []; 

function gameStart() {
    
    username1Place.innerHTML = username1;
    username2Place.innerHTML = username2;
  
    playerField = generateRandomField(shipTypes, playerShips);
    opponentField = generateRandomField(shipTypes, opponentShips);  
     
    printField(playerField, 'playerField', true, 'player');
    printField(opponentField, 'opponentField', false, 'player2');
  
  }

export function gameEnd() {
    return true;
}

gameStart();