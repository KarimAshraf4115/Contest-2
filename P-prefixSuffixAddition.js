const fs = require("fs")
const data = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
const n = data[0]
let levels = new Map([[0, 0]])
let prev = 0 

for (let i = 1; i <= n; i++) {
    const x = data[i]
    const a = x - prev
    const cand = new Map()

    for (const [c, lo] of levels) {
        const options = [
            [0, lo + Math.max(0, a)],
            [1, Math.max(0, lo + Math.min(0, a))],
            [2, 0],
        ]
        for (const [extra, thr] of options) {
            if (thr <= x) { 
                const k = c + extra
                if (!cand.has(k) || thr < cand.get(k)) cand.set(k, thr)
            }
        }
    }

    const next = new Map()
    let best = Infinity
    for (const k of [...cand.keys()].sort((p, q) => p - q)) {
        if (cand.get(k) < best) {
            best = cand.get(k)
            next.set(k, best)
        }
    }

    levels = next
    prev = x
}

let ans = Infinity
for (const [c, lo] of levels) {
    ans = Math.min(ans, c + (lo > 0 ? 1 : 0))
}
console.log(ans)