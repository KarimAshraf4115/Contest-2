#include <iostream>
using namespace std;

const int MOD = 1000000007;
int dp[1000001];

int main() {
    int n;
    cin >> n;

    dp[0] = 1;
    for (int i = 1; i <= n; i++) {
        for (int x = 1; x <= 6 && x <= i; x++) {
            dp[i] = (dp[i] + dp[i - x]) % MOD;
        }
    }
    cout << dp[n];
    return 0;
}