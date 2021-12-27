export default function markSunkShip(userShips, shipID, user, field) {
    let cell;
    let minX, maxX, minY, maxY;
  
    for (let i = 0; i < userShips[shipID].length; i++) {
      let x = userShips[shipID][i][0],
          y = userShips[shipID][i][1];
  
      minX = x === 0 ? 0 : x - 1;
      maxX = x + 1 > 9 ? 9 : x + 1;
      minY = y === 0 ? 0 : y - 1;
      maxY = y + 1 > 9 ? 9 : y + 1;
  
      for (let k = minX; k <= maxX; k++) {
        for (let l = minY; l <= maxY; l++) {
          if (field[k][l] === 0) {
            field[k][l] = 2;
            
            cell = document.getElementById(`${user.substring(1, user.length-1)}-${k}-${l}`);
          
            cell.className = 'miss';
            cell.removeChild(cell.firstChild);
            if (user === 'player2') cell.removeChild(cell.firstChild);
  
          }
        }
      }
    }
    userShips.splice(shipID, 1);
  }