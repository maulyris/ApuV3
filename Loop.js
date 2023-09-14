let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
    if (i %2 !==0){
        for (let j = 0; j < i; j++) {
            string += "*";
    }
    string += "\n";
  }
}
for (let i = 1; i <= n - 1; i++) {
    if (i %2 !==0){
        for (let j = 0; j < n - i; j++) {
            string += "*";
    }
    string += "\n";
  }
}
console.log(string);