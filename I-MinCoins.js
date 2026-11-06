const fs = require("fs")
const [n, sum, ...inputs] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
function minCoins(coins, sum) {

    const arrayOfSums = new Array(sum+1).fill(Infinity);
    arrayOfSums[0] = 0;
    for(let s = 1 ; s < arrayOfSums.length ; s++){
        for(coin of coins){
            if(c <= s){
                arrayOfSums[s] = Math.min(arrayOfSums[s] , arrayOfSums[s-c] + 1)
            }
        }
    }

}