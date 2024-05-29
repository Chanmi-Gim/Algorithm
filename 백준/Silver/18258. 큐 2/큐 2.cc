#include <iostream>
#include <queue>
using namespace std;

int t, s, e, i;
int q[100000000];

int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);  
  cin >> t;
  while(t--){
    string cmd; 
    cin >> cmd;
    if(cmd == "push"){
      cin >> q[e++];
    }else if(cmd == "pop"){
      cout << (s == e? -1 : q[s++]) << '\n';
    }else if(cmd == "size"){
      cout << e - s << '\n';
    }else if(cmd == "empty"){
      cout << (s == e) << '\n';
    }else if(cmd == "front"){
      cout << (s == e? -1 : q[s]) << '\n'; 
    }else{
      cout << (s == e? -1 : q[e-1]) << '\n';
    }
  }
}