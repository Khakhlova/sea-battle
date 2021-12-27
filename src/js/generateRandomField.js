import getMatrix from "./getMatrix";
import getRandom from "./getRandom";
import checkShipPlace from "./checkShipPlace";

export default function generateRandomField(ships, userShips) {
    let possibleCoord = 0;
    let field = getMatrix();
    let x, y;
    let direction;
    let shipCounter = 0;
  
    for (let i = 0; i < 4; i++) {
      let shipLength = ships[i][1];
      let shipAmmount = ships[i][2];
  
      for (let j = 0; j < shipAmmount; j++) {
        possibleCoord = 0;
        shipCounter++;
        userShips[shipCounter] = [];
        while (possibleCoord === 0) {
          direction = getRandom(1) ? 'vertical' : 'horizontal';
          x = getRandom(9);
          y = getRandom(9);
          if (direction === 'vertical') {
            if (checkShipPlace(field, x, y, direction, shipLength)) {
              for (let k = 0; k < shipLength; k++) {
                field[x + k][y] = 1;
                userShips[shipCounter].push([x + k, y, 0]);
              }
              possibleCoord = 1;
            }
          }
          if (direction === 'horizontal') {
            if (checkShipPlace(field, x, y, direction, shipLength)) {
              for (let l = 0; l < shipLength; l++) {
                field[x][y + l] = 1;
                userShips[shipCounter].push([x, y + l, 0]);
              }
              possibleCoord = 1;
            }
          }
        } 
      }
    } 
    return field;
  }