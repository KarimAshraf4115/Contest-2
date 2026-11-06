import sys

def main():
    data = sys.stdin.read().split()
    pos = 0
    T = int(data[pos]); pos += 1
    out = []

    for _ in range(T):
        h = int(data[pos]); w = int(data[pos + 1]); pos += 2

        dp = [int(v) for v in data[pos:pos + w]]
        pos += w

        for _ in range(1, h):
            row = [int(v) for v in data[pos:pos + w]]
            pos += w

            nxt = [0] * w
            for j in range(w):
                best = dp[j]
                if j > 0 and dp[j - 1] > best:
                    best = dp[j - 1]
                if j < w - 1 and dp[j + 1] > best:
                    best = dp[j + 1]
                nxt[j] = row[j] + best
            dp = nxt

        out.append(str(max(dp)))

    print("\n".join(out))

main()