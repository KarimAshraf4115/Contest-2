#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    for (int c = 1; c <= t; c++) {
        int n;
        cin >> n;
        long long take = 0, skip = 0;
        for (int i = 0; i < n; i++) {
            long long a;
            cin >> a;
            long long newTake = skip + a;
            long long newSkip = take > skip ? take : skip;
            take = newTake;
            skip = newSkip;
        }
        long long best = take > skip ? take : skip;
        cout << "Case " << c << ": " << best << "\n";
    }
    return 0;
}