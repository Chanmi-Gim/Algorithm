#include <iostream>
#include <vector>
using namespace std;

int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, v;
  cin >> n; 
  vector<int> x(n);
  for(int i = 0; i < n; i++) cin >> x[i];
  cin >> v;
  int count = 0;
  for(int i = 0; i < n; i++){
    if(x[i] == v) count++;
  }
  cout << count;
}