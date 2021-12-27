export default function checkShipPlace(field, x, y, direction, length) {
    let minX, maxX, minY, maxY;
  
    if (direction === 'vertical') {
      if (x + length - 1 > 9) return false;
      minX = x === 0 ? 0 : x - 1;
      maxX = x + length > 9 ? 9 : x + length;
      minY = y === 0 ? 0 : y - 1;
      maxY = y + 1 > 9 ? 9 : y + 1;
    }
    if (direction === 'horizontal') {
      if (y + length - 1 > 9) return false;
      minX = x === 0 ? 0 : x - 1;
      maxX = x + 1 > 9 ? 9 : x + 1;
      minY = y === 0 ? 0 : y - 1;
      maxY = y + length > 9 ? 9 : y + length;
    }
  
    for (let i = minX; i <= maxX; i++) {
      for (let j = minY; j <= maxY; j++) {
        if (field[i][j] === 1) return false;
      }
    }
    return true;
  }