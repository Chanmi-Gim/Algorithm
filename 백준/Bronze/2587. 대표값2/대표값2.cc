#include <iostream>
#include <algorithm>
using namespace std;

int num[5];
int avg, mid;

int main(){
  for(int i = 0; i < 5; i++) cin >> num[i];
  for(int i = 0; i < 5; i++) avg += num[i];
  cout << avg / 5 << '\n';
  sort(num, num+5);
  cout << num[2];
}