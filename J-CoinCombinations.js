const fs = require("fs")
const [n, x, ...coins] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)

function countWays(coins, x) {
    const MOD = 1000000007
    coins.sort((a, b) => a - b)
    const m = coins.length

    const dp = new Int32Array(x + 1)
    dp[0] = 1

    let k = 0
    for (let s = 1; s <= x; s++) {
        while (k < m && coins[k] <= s) k++

        let v = 0
        for (let i = 0; i < k; i++) {
            v += dp[s - coins[i]]
        }
        dp[s] = v % MOD
    }

    return dp[x]
}

console.log(countWays(coins, x))