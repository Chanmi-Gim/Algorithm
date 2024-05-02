#include <iostream>
#include <stack>
using namespace std;

int k;
stack<int> S;
int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> k;
  for(int i = 0; i < k ; i++){
    int n;
    cin >> n;
    if(n == 0) S.pop();
    else S.push(n);
  }
  int count = 0;
  while(!S.empty()){
    count += S.top();
    S.pop();
  }
  cout << count;
}