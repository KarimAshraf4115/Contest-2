#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a, b, c;
    cin >> a >> b >> c;
    int pa = a, pb = b, pc = c;

    for (int i = 1; i < n; i++) {
        cin >> a >> b >> c;
        int na = a + (pb > pc ? pb : pc);   
        int nb = b + (pa > pc ? pa : pc);
        int nc = c + (pa > pb ? pa : pb);
        pa = na; pb = nb; pc = nc;
    }
    int best = pa;
    if (pb > best) best = pb;
    if (pc > best) best = pc;
    cout << best;
    return 0;
}