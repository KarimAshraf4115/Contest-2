const fs = require("fs")
const data = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
const N = data[0]
const W = data[1]

const dp = new Float64Array(W + 1)
for (let i = 0; i < N; i++) {
    const wt = data[2 + 2 * i]
    const val = data[3 + 2 * i]
    for (let w = W; w >= wt; w--) {
        const cand = dp[w - wt] + val
        if (cand > dp[w]) dp[w] = cand
    }
}

console.log(String(dp[W]))