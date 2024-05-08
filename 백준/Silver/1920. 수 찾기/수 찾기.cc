
#include <iostream>
#include <algorithm>
using namespace std;
int a[100005] = {0};
int n, m;
int main(){
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cin >> n;
  for(int i = 0; i < n ; i++) cin >> a[i];
  sort(a, a+n);
  cin >> m;
  for(int i = 0; i < m ; i++){
    int t; 
    cin >> t; 
    cout << binary_search(a, a+n, t) << '\n';
  }
}