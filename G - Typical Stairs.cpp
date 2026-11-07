#include <iostream>
using namespace std;

const int MOD = 1000000007;
int dp[100005];
bool broken[100005];

int main() {
    int n, m;
    cin >> n >> m;
    for (int i = 0; i < m; i++) {
        int a;
        cin >> a;
        broken[a] = true;
    }

    dp[0] = 1;
    for (int i = 1; i <= n; i++) {
        if (broken[i]) { dp[i] = 0; continue; }
        dp[i] = dp[i - 1];
        if (i >= 2) dp[i] = (dp[i] + dp[i - 2]) % MOD;
    }
    cout << dp[n];
    return 0;
}