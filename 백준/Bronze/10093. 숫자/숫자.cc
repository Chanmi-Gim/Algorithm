#include <iostream>
#include <algorithm>
using namespace std;
int A, B, cnt, length;
int main(){
  cin >> A >> B;
  if (A > B) swap(A, B);
  length = B - A - 1;
  int numberArr[length];
  for(int i = 0; i < length; i++){
    numberArr[i] = i + A + 1;
    cnt++;
  }
  cout << cnt << '\n';
  for(int i = 0; i < length ; i++) cout << numberArr[i] << ' ';  
}