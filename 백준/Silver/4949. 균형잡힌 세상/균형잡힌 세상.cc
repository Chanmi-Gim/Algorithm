#include <iostream>
#include <stack>
using namespace std;

int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);

  while(true){
    string str;
    getline(cin, str);
    if(str == ".") break;
    stack<char> s;
    int flag = false;
    for(auto c : str){
      if(c == '(' || c == '[') s.push(c);
      else if(c == ')'){
        if(s.empty() || s.top() != '('){
          flag = true;
          break;
        }
        s.pop();
      }else if(c == ']'){
        if(s.empty() || s.top() != '['){
          flag = true;
          break;
        }
        s.pop();
      }
    }
    cout << (s.empty() && !flag? "yes" : "no") << '\n';
  }
}