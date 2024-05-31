#include <iostream>
#include <stack>
using namespace std;

int n, answer;
int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cin >> n; 
  string str;
  while(n--){
    stack<char> s;
    cin >> str;
    for(auto c : str){
      if(!s.empty() && s.top() == c){
        s.pop();
        continue;
      }
      s.push(c);
    }
    if(s.empty()) answer++;
  }
  cout << answer;
}