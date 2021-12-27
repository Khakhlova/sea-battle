import checkAliveShips from "./checkAliveShips";
import { gameEnd, playerShips, opponentShips, username1, username2 } from "./main";


export default function checkGameStatus() {
    if (!checkAliveShips(playerShips)) {
      alert(username2 + ' победил!');
      gameEnd();
      return true;
    }
    if (!checkAliveShips(opponentShips)) {
      alert(username1 + ' победил!');
      gameEnd();
      return true;
    }
  
  }

