#include <iostream>
using namespace std;

int dp[1000001];

int main() {
    int n;
    cin >> n;

    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        dp[i] = 1000000;
        int x = i;
        while (x > 0) {
            int digit = x % 10;
            x /= 10;
            if (digit > 0 && dp[i - digit] + 1 < dp[i])
                dp[i] = dp[i - digit] + 1;
        }
    }
    cout << dp[n];
    return 0;
}