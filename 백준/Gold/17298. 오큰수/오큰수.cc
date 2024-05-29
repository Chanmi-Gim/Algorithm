#include <iostream>
#include <stack>
#include <vector>
using namespace std;

int arr[1000004];
int answer[1000004];
int main(void){
  ios_base::sync_with_stdio(0);
  cin.tie(0);

  int n = 0;
  cin >> n;
  stack<int> s;
  for(int i = 0; i < n; i++) cin >> arr[i];
  for(int i =  n - 1; i >= 0; i--){
    while(!s.empty() && s.top() <= arr[i]) s.pop();
    if(s.empty()) answer[i] = -1;
    else answer[i] = s.top();
    s.push(arr[i]);
  }
  for(int i = 0; i < n; i++) cout << answer[i] <<' ';
}