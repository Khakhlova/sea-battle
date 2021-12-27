export default function isSunk(userShips, shipID) {
    for (let i = 0; i < userShips[shipID].length; i++) {
      if (userShips[shipID][i][2] === 0) {
        return false;
      }
    }
    return true;
  }