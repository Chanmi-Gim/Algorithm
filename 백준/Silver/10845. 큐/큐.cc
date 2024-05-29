#include <iostream>
#include <queue>
using namespace std;

int t;
queue<int> q;
int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);  
  cin >> t;
  while(t--){
    string cmd; 
    cin >> cmd;
    if(cmd == "push"){
      int v;
      cin >> v;
      q.push(v); 
    }else if(cmd == "front"){
      if(q.empty()) cout << -1 << '\n';
      else cout << q.front() << '\n';
    }else if(cmd == "back"){
      if(q.empty()) cout << -1 << '\n';
      else cout << q.back() << '\n';
    }else if(cmd == "pop"){
      if(q.empty()) cout << -1 << '\n';
      else {
        cout << q.front() << '\n';
        q.pop();
      }
    }else if(cmd == "size"){
      cout << q.size() << '\n';
    }else{
      cout << q.empty() << '\n';
    }
  }
}