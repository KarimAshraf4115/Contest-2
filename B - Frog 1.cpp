#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int n;
    cin >> n;
    int h[100005], dp[100005];
    for (int i = 0; i < n; i++) cin >> h[i];

    dp[0] = 0;
    dp[1] = abs(h[1] - h[0]);
    for (int i = 2; i < n; i++) {
        int one = dp[i - 1] + abs(h[i] - h[i - 1]);
        int two = dp[i - 2] + abs(h[i] - h[i - 2]);
        dp[i] = one < two ? one : two;
    }
    cout << dp[n - 1];
    return 0;
}