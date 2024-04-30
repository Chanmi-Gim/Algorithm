#include <iostream>
#include <stack>
using namespace std;

int main(void){
  ios::sync_with_stdio(0);
  cin.tie(0);
  
  int n;
  cin >> n;
  stack<int> S;
  while(n--){
    string cmd;
    cin >> cmd;
    if(cmd == "push"){
      int number;
      cin >> number;
      S.push(number);
    }else if(cmd == "pop"){
      if(S.empty()) cout << -1 << '\n';
      else{
        cout << S.top() << '\n';
        S.pop();
      }
    }else if(cmd == "size"){
      cout << S.size() << '\n';
    }else if(cmd == "empty"){
      cout << S.empty() <<'\n';
    }else{
      if(S.empty()) cout << -1 << '\n';
      else cout << S.top() << '\n';
    }
  }
}