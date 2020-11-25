function staircase(n) {
let arr = new Array(n).fill(" ");
    while (arr.indexOf(" ") !== -1) {
        arr.shift();
        arr.push("#");
        console.log(arr.join(""));
        
        n--;
    }
}
