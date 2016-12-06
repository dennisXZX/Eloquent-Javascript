for(let i=1; i<=100; i++){

    // check if the num is divisible by both 3 and 5
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzFuzz");
        continue;        
    } else {
        if(i % 3 == 0) { // divisible by 3
            console.log("Fizz");
            continue;
        }

        if(i % 5 == 0) { // divisible by 5
            console.log("Fuzz");
            continue;
        }
    }

    console.log(i);
}

/* A better solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0){
    output += "Fizz";
  }
  if (n % 5 == 0){
    output += "Buzz";
  }
  console.log(output || n);
}
*/