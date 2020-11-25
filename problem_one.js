function simpleArraySum(ar) {
    var total = 0;
    for (var i = 0; i < ar.length; i++){
        if(ar[i]) {
            total += ar[i]
        }
    }
         return total;
}
