const fs = require("fs")
const lines = fs.readFileSync(0, 'utf-8').split('\n')
const s = lines[0].trim()
const t = lines[1].trim()
const n = s.length
const m = t.length
const dp = []
for (let i = 0; i <= n; i++) dp.push(new Int16Array(m + 1))

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (s[i - 1] === t[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
            dp[i][j] = dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1]
        }
    }
}

const res = []
let i = n, j = m
while (i > 0 && j > 0) {
    if (s[i - 1] === t[j - 1]) {
        res.push(s[i - 1])
        i--
        j--
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--
    } else {
        j--
    }
}

console.log(res.reverse().join(""))