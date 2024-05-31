#include <iostream>
#include <stack>
using namespace std;

int n;
int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cin >> n; 
  string str;
  while(n--){
    stack<char> s;
    bool flag = false;
    cin >> str;
    for(auto c : str){
      if(c == '(') s.push(c);
      else if(!s.empty() && s.top() == '(') s.pop();
      else{
        flag = true;
        break;
      }
    }
    cout << (s.empty() && !flag? "YES" : "NO") << '\n';
  }
}