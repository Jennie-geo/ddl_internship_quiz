function getMoneySpent(keyboards, drives, b) {
    let keyboard = keyboards[1]
    let drive = drives[2]
    if(keyboard && drive <= b){
        return keyboard + drive
    } else {
        return -1
    }
}
