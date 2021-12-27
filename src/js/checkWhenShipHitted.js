export default function checkWhenShipHitted(userShips, x, y) { 
    let searchCell = JSON.stringify([x, y, 0]);
    for (let i = 1; i < userShips.length; i++) {
      for (let j = 0; j < userShips[i].length; j++) {
        let temp = JSON.stringify(userShips[i][j]);
        if (temp == searchCell) {
          userShips[i][j][2] = 1;
          return i; 
        }
      }
    }
  }