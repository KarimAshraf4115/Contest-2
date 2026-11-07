#include <iostream>
#include <string>
using namespace std;

int main() {
    int n, d;
    string s;
    cin >> n >> d >> s;

    int pos = 0, jumps = 0;
    while (pos < n - 1) {
        int next = -1;
        for (int step = d; step >= 1; step--) {
            int t = pos + step;
            if (t < n && s[t] == '1') {
                next = t;
                break; }
        }
        if (next == -1) {
            cout << -1;
            return 0;
        }
        pos = next;
        jumps++;
    }
    cout << jumps;
    return 0;
}