#include <iostream>
#include <list>
#include <algorithm>
using namespace std;

string str;
int n;
int main(){
  ios_base::sync_with_stdio(0);
  cin.tie(0);

  cin >> str;
  list<char> L;
  for(auto l : str) L.push_back(l);
  auto idx = L.end();

  cin >> n;
  for(int i = 0 ; i < n; i++){
    char cmd;
    cin >> cmd;
    if(cmd == 'L') {
      if(idx != L.begin()) idx--;
    } else if(cmd == 'D') {
      if(idx != L.end()) idx++;
    } else if(cmd == 'B') {
      if(idx != L.begin()){
        idx--;
        idx = L.erase(idx);
      }
    } else {
      char s;
      cin >> s;
      L.insert(idx, s);
    }
  }
  for(auto c: L) cout << c;
}