#include <iostream>
#include <list>
#include <algorithm>
using namespace std;

int n = 0;
int main(){
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  
  cin >> n;
  for(int i = 0; i < n; i++){
    string str;
    cin >> str;
    list<char> L;
    auto cursor = L.end();
    for(auto s : str){
      if(s == '-'){
        if(cursor != L.begin()){
          cursor--;
          cursor = L.erase(cursor);
        } 
      } else if(s == '<'){
        if(cursor != L.begin()) cursor--;
      } else if(s == '>'){
        if(cursor != L.end()) cursor++;
      } else{
        L.insert(cursor, s);
      }
    }
    for(auto c : L) cout << c; 
    cout << '\n';
  }
}
