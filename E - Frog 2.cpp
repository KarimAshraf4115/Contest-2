#include <iostream>
#include <cstdlib>
using namespace std;

int h[100005], dp[100005];

int main() {
    int n, k;
    cin >> n >> k;
    for (int i = 0; i < n; i++) cin >> h[i];

    dp[0] = 0;
    for (int i = 1; i < n; i++) {
        dp[i] = 2000000000;
        for (int j = 1; j <= k && j <= i; j++) {
            int cost = dp[i - j] + abs(h[i] - h[i - j]);
            if (cost < dp[i]) dp[i] = cost;
        }
    }
    cout << dp[n - 1];
    return 0;
}