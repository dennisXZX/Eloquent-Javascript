for(let i=1; i<8; i++){

    let symbol = "";

    for(let j=1; j<=i; j++){
        symbol += "#";
    }
    console.log(symbol);
}

/* A better solution
for (var line = "#"; line.length < 8; line += "#"){
  console.log(line);
}
*/