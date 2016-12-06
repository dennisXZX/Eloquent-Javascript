const size = 8;

let chessBoard = "";

for (let i=0; i<size; i++){ // loop through the rows
    for (let j=0; j<size; j++) { // loop through the columns

        if (i % 2 == 0) { // even row
            if(j % 2 == 0) { // even column
                chessBoard += " ";
            } else {
                chessBoard += "#";
            }
        } else { // odd row
            if(j % 2 == 0) { // even column
                chessBoard += "#";
            } else {
                chessBoard += " ";
            }
        } 

    }
    
    // add a new line
    chessBoard += "\n";

}

console.log(chessBoard);

/* A better solution

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)  // even grid
      board += " ";
    else // odd grid
      board += "#";
  }
  board += "\n";
}

console.log(board);

*/