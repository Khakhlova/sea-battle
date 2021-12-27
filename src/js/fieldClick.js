import printField from "./printField";
import { opponentField, opponentShips, playerField, playerShips, layout, changePlayerBtn,
        username1, username2, username1Place, username2Place } from "./main";
import checkWhenShipHitted from "./checkWhenShipHitted";
import isSunk from "./isSunk";
import markSunkShip from "./markSunkShip";
import checkGameStatus from "./checkGameStatus";
import clearField from "./clearField";

export default function fieldClick(elem, x, y, user) {
    let style;
    let opField,
        opShips;
    if (user.substring(1, user.length-1) == 'player2') {
      opField = opponentField;
      opShips = opponentShips;
    } else {
      opField = playerField;
      opShips = playerShips;
    }
    
    if (opField[x][y] === 1) {
      style = 'hit';
      opField[x][y] = 3;
      let shipID = checkWhenShipHitted(opShips, x, y);
      if (isSunk(opShips, shipID, opField)) {
        markSunkShip(opShips, shipID, user, opField);
      }
      checkGameStatus();
    } else if (opField[x][y] === 0) {
      style = 'miss';
      opField[x][y] = 2;
      checkGameStatus();
      
      layout.classList.add("layout-visible");
      
      changePlayerBtn.addEventListener('click', () => {
        clearField();
        if (opField == opponentField) {
  
        printField(opponentField, 'playerField', true, 'player2');
        printField(playerField, 'opponentField', false, 'player');
        username1Place.innerHTML = username2;
        username2Place.innerHTML = username1;
        } else {
          printField(playerField, 'playerField', true, 'player');
          printField(opponentField, 'opponentField', false, 'player2');
          username1Place.innerHTML = username1;
          username2Place.innerHTML = username2;
        }
        layout.classList.remove("layout-visible");  
      })  
      
    }
    
    elem.parentNode.className = style;
    elem.parentNode.removeChild(elem); 
  }