export default function printField(field, tableId, show, user) {
    let table = document.getElementById(tableId);
    for (let i = 0; i < 10; i++) {
      let row = table.insertRow(-1);
      let th = document.createElement('th');
      th.innerHTML = i + 1;
      row.appendChild(th);
      for (let j = 0; j < 10; j++) {
        let cell = row.insertCell(-1);
        cell.id = user + '-' + i + '-' + j;
        if (show === true) {
          if (field[i][j] == 1) {
            cell.className = 'ship';
          } else {
            cell.innerHTML = '<a></a>';
          }
        } else {
          if (field[i][j] == 2) {
            cell.className = 'miss';
          } else {
          cell.innerHTML =
            `<a class="cell" href="#"> </a>`;  
          }
        }
      }
    }
  }