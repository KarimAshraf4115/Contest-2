const fs = require("fs")
const lines = fs.readFileSync(0, 'utf-8').trim().split('\n')
const [H, W] = lines[0].trim().split(/\s+/).map(Number)
const MOD = 1000000007
const dp = new Int32Array(W)
dp[0] = 1

for (let i = 0; i < H; i++) {
    const row = lines[i + 1].trim()
    for (let j = 0; j < W; j++) {
        if (row[j] === '#') {
            dp[j] = 0
        } else if (j > 0) {
            dp[j] = (dp[j] + dp[j - 1]) % MOD
        }
    }
}

console.log(dp[W - 1])