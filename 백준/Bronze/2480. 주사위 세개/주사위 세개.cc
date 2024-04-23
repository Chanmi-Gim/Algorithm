#include <iostream>
#include <algorithm>
using namespace std;

int main(){
  int a, b, c;
  int cost;
  cin >> a >> b >> c;
  if(a == b && b== c) cost = 10000 + (a * 1000);
  else if(a == b || b == c || a == c) cost = a == b || a == c ? 1000 + (a * 100) : 1000 + (b * 100);
  else cost = max({a, b, c}) * 100;
  cout << cost;
}