#include <iostream>
#include <algorithm>
using namespace std;
int main(){
  int a, b, c, maxNum, midNum, minNum;
  cin >> a >> b >> c;
  maxNum = max({a,b,c});
  minNum = min({a,b,c});
  cout << minNum << ' ' <<  a+b+c-maxNum-minNum << ' ' << maxNum;
}