export default function clearField () {
    for (let rowNumber = 9; rowNumber >= 0; rowNumber--) {
    document.getElementById("playerField").deleteRow(-1);
    document.getElementById("opponentField").deleteRow(-1);
    }
  }
  